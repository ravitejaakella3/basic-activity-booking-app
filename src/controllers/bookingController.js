const Booking = require('../models/Booking');
const User = require('../models/User');
const Activity = require('../models/Activity');

// Book an activity
exports.bookActivity = async (req, res) => {
    try {
        const { activityId } = req.params;
        const userId = req.user.id; // This comes from the auth middleware

        // Check if activity exists
        const activity = await Activity.findById(activityId);
        if (!activity) {
            return res.status(404).json({ message: 'Activity not found' });
        }

        // Check if user exists
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if booking already exists
        const existingBooking = await Booking.findOne({
            user: userId,
            activity: activityId
        });

        if (existingBooking) {
            return res.status(400).json({ message: 'You have already booked this activity' });
        }

        // Create new booking
        const booking = new Booking({
            user: userId,
            activity: activityId,
            bookingDate: new Date()
        });

        await booking.save();
        
        // Populate the activity details in the response
        const populatedBooking = await Booking.findById(booking._id)
            .populate('activity')
            .populate('user', 'name email');

        res.status(201).json({
            message: 'Activity booked successfully',
            booking: populatedBooking
        });
    } catch (error) {
        console.error('Booking error:', error);
        res.status(500).json({ message: 'Error booking activity', error: error.message });
    }
};

// Get all bookings for the logged-in user
exports.getMyBookings = async (req, res) => {
    try {
        const userId = req.user.id; // This comes from the auth middleware

        const bookings = await Booking.find({ user: userId })
            .populate('activity')
            .sort({ bookingDate: -1 }); // Sort by booking date, newest first

        res.status(200).json(bookings);
    } catch (error) {
        console.error('Get bookings error:', error);
        res.status(500).json({ message: 'Error retrieving bookings', error: error.message });
    }
};