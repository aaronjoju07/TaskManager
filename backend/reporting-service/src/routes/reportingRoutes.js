const express = require('express');
const router = express.Router();
const reportingController = require('../controllers/reportingController');

router.post('/generate', reportingController.generateReport);
router.get('/:reportId', reportingController.getReport);

module.exports = router;
