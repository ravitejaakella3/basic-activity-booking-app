const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const router = express.Router();

// User Registration Route
router.post('/register', registerUser);

// User Login Route
router.post('/login', loginUser);

module.exports = router;