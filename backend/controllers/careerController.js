const Career = require('../models/Career');

exports.getCareers = async (req, res) => {
  try {
    const careers = await Career.find();
    res.json(careers);
  } catch (err) {
    res.status(400).json({ message: 'Error fetching careers', error: err });
  }
};
