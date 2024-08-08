const reportingService = require('../services/reportingService');

exports.generateReport = async (req, res) => {
  try {
    const report = await reportingService.generateReport(req.body);
    res.status(201).json(report);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getReport = async (req, res) => {
  try {
    const report = await reportingService.getReport(req.params.reportId);
    if (!report) return res.status(404).json({ message: 'Report not found' });
    res.json(report);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
