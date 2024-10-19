const express = require('express');
const { contactMe } = require('../controllers/contactController');
const router = express.Router();

router.post('/contact', contactMe);

module.exports = router;
