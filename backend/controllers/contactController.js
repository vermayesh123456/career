const Contact = require('../models/Contact');

exports.contactMe = async (req, res) => {
  try {
    const contactMessage = await Contact.create(req.body);
    // Optional: Send an acknowledgment email here
    res.json(contactMessage);
  } catch (err) {
    res.status(400).json({ message: 'Error sending message', error: err });
  }
};
