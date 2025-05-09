const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const activityRoutes = require('./routes/activityRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const { connectDB } = require('./utils/db');
const { initializeActivities } = require('./controllers/activityController');

dotenv.config();

const app = express();
app.use(express.json());

connectDB();

// Initialize sample activities
initializeActivities();

app.use('/api/auth', authRoutes);
app.use('/api/activities', activityRoutes);
app.use('/api/bookings', bookingRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});