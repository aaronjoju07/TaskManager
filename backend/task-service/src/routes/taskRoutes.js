const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, taskController.createTask);
router.get('/', authMiddleware, taskController.getTasks);
router.put('/:taskId', authMiddleware, taskController.updateTask);
router.delete('/:taskId', authMiddleware, taskController.deleteTask);

module.exports = router;
