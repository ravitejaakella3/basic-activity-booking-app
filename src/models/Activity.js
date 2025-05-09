const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        get: (date) => {
            return date.toISOString().split('T')[0]; // Returns YYYY-MM-DD format
        }
    },
    time: {
        type: String,
        required: true
    }
}, {
    toJSON: { getters: true },
    toObject: { getters: true }
});

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;