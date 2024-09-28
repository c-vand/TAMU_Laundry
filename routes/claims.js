const express = require('express');
const schedule = require('node-schedule');
const twilio = require('twilio');
const authenticate = require('../middleware/authMiddleware');

const router = express.Router();

// Twilio setup (replace with actual credentials)
const accountSid = 'your_account_sid';
const authToken = 'your_auth_token';
const twilioClient = twilio(accountSid, authToken);
const twilioPhoneNumber = 'your_twilio_phone_number';

let appliances = {
    washer1: null,
    washer2: null,
    dryer1: null,
    dryer2: null,
};

router.post('/claim', authenticate, async (req, res) => {
    const { applianceId } = req.body;
    const currentTime = Date.now();
    const userId = req.user.userId;

    try {
        // Your logic for finding user and managing appliance claim status
        // Using userId, send SMS, and handle claiming logic as explained before
        // ...
    } catch (error) {
        res.status(500).json({ message: 'Error processing request' });
    }
});

module.exports = router;
