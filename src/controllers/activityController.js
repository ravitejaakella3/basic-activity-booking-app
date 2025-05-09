const Activity = require('../models/Activity');

// List Activities
exports.listActivities = async (req, res) => {
    try {
        const activities = await Activity.find();
        res.status(200).json(activities);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving activities', error });
    }
};

// Create Activity
exports.createActivity = async (req, res) => {
    try {
        const { title, description, location, date, time } = req.body;
        const newActivity = new Activity({
            title,
            description,
            location,
            date,
            time
        });
        await newActivity.save();
        res.status(201).json(newActivity);
    } catch (error) {
        res.status(500).json({ message: 'Error creating activity', error });
    }
};

// Initialize Sample Activities
exports.initializeActivities = async () => {
    try {
        const sampleActivities = [
            {
                title: 'Cricket Match',
                description: 'Weekend cricket match at the local ground',
                location: 'Central Park Cricket Ground',
                date: new Date('2024-03-30'),
                time: '10:00 AM'
            },
            {
                title: 'Movie Night',
                description: 'Latest blockbuster movie screening',
                location: 'City Cinema Hall',
                date: new Date('2024-03-28'),
                time: '7:00 PM'
            },
            {
                title: 'Football Tournament',
                description: '5-a-side football tournament',
                location: 'Sports Complex',
                date: new Date('2024-04-01'),
                time: '4:00 PM'
            }
        ];

        // Check if activities already exist
        const existingActivities = await Activity.find();
        if (existingActivities.length === 0) {
            await Activity.insertMany(sampleActivities);
            console.log('Sample activities initialized');
        }
    } catch (error) {
        console.error('Error initializing activities:', error);
    }
};