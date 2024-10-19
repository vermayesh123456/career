const Quiz = require('../models/Quiz');

exports.submitQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.create({
      userId: req.userId,
      result: req.body.result,
      answers: req.body.answers
    });
    res.json(quiz);
  } catch (err) {
    res.status(400).json({ message: 'Error submitting quiz', error: err });
  }
};
