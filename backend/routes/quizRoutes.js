const express = require('express');
const { submitQuiz } = require('../controllers/quizController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/submit', authMiddleware, submitQuiz);

module.exports = router;
