const express = require('express');
const { leaveFeedback } = require('../controllers/feedbackController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/feedback', authMiddleware, leaveFeedback);

module.exports = router;
