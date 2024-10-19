const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  result: String,
  answers: [String],
});

module.exports = mongoose.model('Quiz', quizSchema);
