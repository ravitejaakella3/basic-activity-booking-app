const express = require('express');
const { listActivities, createActivity } = require('../controllers/activityController');

const router = express.Router();

// Route to list available activities
router.get('/', listActivities);

// Route to create a new activity
router.post('/', createActivity);

module.exports = router;