const express = require('express');
const schedule = require('node-schedule');
const authenticate = require('../middleware/authMiddleware');
const nodemailer = require('nodemailer');
const User = require('../models/User');
const Machine = require('../models/Machine');

const router = express.Router();

// Configure Nodemailer (replace with your SMTP credentials)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mimict2005@gmail.com',
        pass: 'M1x2xT5*',
    },
});

// Claim appliance endpoint
router.post('/claim', authenticate, async (req, res) => {
    const { name } = req.body;
    const userId = req.user.userId;
    const currentTime = Date.now();

    try {
        // Find the machine
        const machine = await Machine.findOne({ name });

        if (!machine) {
            return res.status(404).json({ message: 'Appliance not found' });
        }

        // Check if machine is available
        if (machine.status === 'available') {
            // Update the machine status to claimed
            const claimExpiration = new Date(currentTime + 60 * 60 * 1000); // 60 minutes later
            machine.status = 'claimed';
            machine.claimedBy = userId;
            machine.claimExpiresAt = claimExpiration;
            await machine.save();
            
            // Schedule email notification
            schedule.scheduleJob(claimExpiration, () => {
                const mailOptions = {
                    from: 'mimict2005@gmail.com',
                    to: req.user.email, // Use the user's email
                    subject: 'Laundry Notification',
                    text: `Your laundry on ${name} is done.`,
                };

                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.error('Failed to send email:', error);
                    } else {
                        console.log(`Email sent: ${info.response}`);
                    }
                });
            });

            res.json({ success: true, message: `${name} claimed successfully.` });
        } else {
            res.json({ success: false, message: `${name} is currently ${machine.status}.` });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error processing request' });
    }
});

module.exports = router;
