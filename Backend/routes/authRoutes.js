const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const { check } = require('express-validator');

const router = express.Router();

// Validation for signup
const signupValidation = [
  check('username', 'Username is required').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password must be at least 6 characters').isLength({ min: 6 })
];

// POST /api/signup - Register a user
router.post('/signup', signupValidation, registerUser);

// POST /api/login - Login a user
router.post('/login', loginUser);

module.exports = router;
