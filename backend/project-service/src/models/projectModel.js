const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const ProjectSchema = new mongoose.Schema({
  projectId: {
    type: String,
    default: uuidv4, // Use uuid to generate unique projectId
    unique: true,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema);
