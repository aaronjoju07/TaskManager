const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');

router.post('/', notificationController.createNotification);
router.get('/:userId', notificationController.getNotifications);
router.put('/:notificationId', notificationController.updateNotification);
router.delete('/:notificationId', notificationController.deleteNotification);

module.exports = router;
