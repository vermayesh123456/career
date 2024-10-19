const mongoose = require('mongoose');

const careerSchema = new mongoose.Schema({
  title: String,
  description: String,
  requiredSkills: [String],
  jobOutlook: String,
});

module.exports = mongoose.model('Career', careerSchema);
