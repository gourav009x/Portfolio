const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

// ✅ Create transporter ONLY ONCE (outside try/catch)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// ✅ Verify transporter once when server starts
transporter.verify((error, success) => {
  if (error) {
    console.log("❌ Email transporter error:", error);
  } else {
    console.log("✅ Email server is ready");
  }
});

// POST /api/contact
router.post(
  '/',
  [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email required'),
    body('message').trim().notEmpty().withMessage('Message required')
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { name, email, message } = req.body;

      // ✅ Save to DB
      const contact = new Contact({ name, email, message });
      await contact.save();

      // ✅ Email config
      const mailOptions = {
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER, // better to send to yourself
        subject: "New Portfolio Message",
        replyTo: email, // VERY IMPORTANT
        html: `
          <h2>New Contact Message</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Message:</b></p>
          <p>${message}</p>
        `
      };

      // ✅ Send email
      await transporter.sendMail(mailOptions);

      res.status(200).json({
        success: true,
        message: "Message sent successfully!"
      });

    } catch (error) {
      console.error("❌ Contact error:", error);
      res.status(500).json({
        success: false,
        message: "Server error. Try again later."
      });
    }
  }
);

// GET contacts
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching contacts' });
  }
});

module.exports = router;