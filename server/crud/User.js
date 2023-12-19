const express = require('express');
const router = express.Router();
const User = require('../models/User');
const argon2 = require('argon2');

router.post('/', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validate input
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Please provide name, email, and password' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User with this email already exists' });
    }

    // Create a new user instance
    const newUser = new User({
      name,
      email,
      password,
    });

    // Hash the password
    const saltRounds = 12;
    newUser.password = await argon2.hash(password, { saltLength: saltRounds });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });

  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
