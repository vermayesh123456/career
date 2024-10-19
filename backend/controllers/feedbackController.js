const Feedback = require('../models/Feedback');

exports.leaveFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.create({
      userId: req.userId,
      message: req.body.message,
    });
    res.json(feedback);
  } catch (err) {
    res.status(400).json({ message: 'Error submitting feedback', error: err });
  }
};
