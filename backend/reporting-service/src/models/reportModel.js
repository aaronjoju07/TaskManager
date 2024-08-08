const mongoose = require('mongoose');

// Define the schema for the report
const reportSchema = new mongoose.Schema({
  reportId: {
    type: String,
    required: true,
    unique: true
  },
  projectId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create the model
const Report = mongoose.model('Report', reportSchema);

module.exports = Report;
