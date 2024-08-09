const express = require('express');
const twilio = require('twilio');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Replace with your Twilio Account SID and Auth Token
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = new twilio(accountSid, authToken);

// Middleware
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

// Endpoint to send OTP
app.post('/send-otp', (req, res) => {
  const { phoneNumber } = req.body;

  client.verify.services(process.env.TWILIO_VERIFY_SERVICE_SID)
    .verifications
    .create({ to: phoneNumber, channel: 'sms' })
    .then(verification => res.status(200).json({ success: true, verification }))
    .catch(error => {
      console.error('Error sending OTP:', error); // Log the error
      res.status(500).json({ success: false, message: 'Failed to send OTP', error });
    });
});

// Endpoint to verify OTP
app.post('/verify-otp', (req, res) => {
  const { phoneNumber, otp } = req.body;

  client.verify.services(process.env.TWILIO_VERIFY_SERVICE_SID)
    .verificationChecks
    .create({ to: phoneNumber, code: otp })
    .then(verificationCheck => {
      if (verificationCheck.status === 'approved') {
        res.status(200).json({ success: true });
      } else {
        res.status(400).json({ success: false, message: 'Invalid OTP' });
      }
    })
    .catch(error => res.status(500).json({ success: false, error }));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
