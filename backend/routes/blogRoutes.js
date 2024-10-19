const express = require('express');
const { writeBlog } = require('../controllers/blogController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/write', authMiddleware, writeBlog);

module.exports = router;
