//console.log('wliuehfpiuq')
const bcrypt = require('bcrypt');
//console.log('poweryiuqw')
const jwt = require('jsonwebtoken');
//console.log('nvvwpoq')
const User = require('../models/User');
//console.log('bsiwoue')
const express = require('express');
//console.log('zxcvbnm')
const app = express();
//app.use(express.json());
const router = express.Router();

const JWT_SECRET = 'ballsack';

router.post('/signup', async (req, res) => {
    console.log("in...");
    const { email, phoneNumber, username, password } = req.body;

    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            email,
            phoneNumber,
            username,
            password: hashedPassword,
        });

        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user' });
    }
});

router.post('/signin', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find user
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        // Generate token
        const token = jwt.sign({ userId: user._id, username: user.username }, JWT_SECRET, {
            expiresIn: '12h',
        });

        res.json({ message: 'Sign in successful', token });
    } catch (error) {
        res.status(500).json({ message: 'Error signing in' });
    }
});

module.exports = router;