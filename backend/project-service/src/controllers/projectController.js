const Project = require('../models/projectModel');

exports.createProject = async (req, res) => {
  const { name, description } = req.body;
  const userId = req.user.id;

  try {
    const newProject = new Project({
      name,
      description,
      userId
    });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getProjects = async (req, res) => {
  const userId = req.user.id;

  try {
    const projects = await Project.find({ userId });
    res.json(projects);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateProject = async (req, res) => {
  const { projectId } = req.params;
  const { name, description } = req.body;
  const userId = req.user.id;

  try {
    const project = await Project.findOneAndUpdate(
      { projectId, userId },
      { name, description },
      { new: true }
    );
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.json(project);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteProject = async (req, res) => {
  const { projectId } = req.params;
  const userId = req.user.id;

  try {
    const project = await Project.findOneAndDelete({ projectId, userId });
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.json({ message: 'Project deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
