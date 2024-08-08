const Notification = require('../models/notificationModel');
const notificationService = require('../services/notificationService');

exports.createNotification = async (req, res) => {
  const { userId, message } = req.body;

  try {
    const newNotification = await notificationService.createNotification(userId, message);
    res.status(201).json(newNotification);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getNotifications = async (req, res) => {
  const { userId } = req.params;

  try {
    const notifications = await notificationService.getNotifications(userId);
    res.json(notifications);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateNotification = async (req, res) => {
  const { notificationId } = req.params;
  const { read } = req.body;

  try {
    const updatedNotification = await notificationService.updateNotification(notificationId, read);
    if (!updatedNotification) return res.status(404).json({ message: 'Notification not found' });
    res.json(updatedNotification);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteNotification = async (req, res) => {
  const { notificationId } = req.params;

  try {
    const result = await notificationService.deleteNotification(notificationId);
    if (!result) return res.status(404).json({ message: 'Notification not found' });
    res.json({ message: 'Notification deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
