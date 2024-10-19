const express = require('express');
const { getCareers } = require('../controllers/careerController');
const router = express.Router();

router.get('/explore', getCareers);

module.exports = router;
