const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, projectController.createProject);
router.get('/', authMiddleware, projectController.getProjects);
router.put('/:projectId', authMiddleware, projectController.updateProject);
router.delete('/:projectId', authMiddleware, projectController.deleteProject);

module.exports = router;
