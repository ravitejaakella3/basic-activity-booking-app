const express = require('express');
const { bookActivity, getMyBookings } = require('../controllers/bookingController');
const authenticate = require('../middlewares/authMiddleware');

const router = express.Router();

// Route to book an activity
router.post('/book/:activityId', authenticate, bookActivity);

// Route to get all bookings for the logged-in user
router.get('/my-bookings', authenticate, getMyBookings);

module.exports = router;