const Report = require('../models/reportModel');

const generateReport = async (data) => {
  const newReport = new Report({
    reportId: Date.now().toString(), // Using timestamp as a simple unique ID
    ...data
  });
  return await newReport.save();
};

const getReport = async (reportId) => {
  return await Report.findOne({ reportId });
};

module.exports = {
  generateReport,
  getReport
};
