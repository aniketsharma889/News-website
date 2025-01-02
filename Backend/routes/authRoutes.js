const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController'); // Removed getUser
const { check } = require('express-validator');

const router = express.Router();

const signupValidation = [
  check('username', 'Username is required').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password must be at least 6 characters').isLength({ min: 6 })
];

router.post('/signup', signupValidation, registerUser);

router.post('/login', loginUser);

module.exports = router;
