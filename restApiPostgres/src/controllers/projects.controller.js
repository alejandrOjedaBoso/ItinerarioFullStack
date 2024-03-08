import { Project } from "../models/Project.js";
import { Task } from "../models/Task.js";

export async function getProjects(req, res) {
  try {
    const projects = await Project.findAll();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function createProject(req, res) {
  const { name, priority, description } = req.body;

  try {
    const newProject = await Project.create({
      name: name,
      priority: priority,
      description: description,
    });

    res.status(200).json(newProject);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function updateProject(req, res) {
  const { id } = req.params;
  const { name, priority, description } = req.body;

  try {
    const project = await Project.findByPk(id);

    project.name = name;
    project.priority = priority;
    project.description = description;

    await project.save();
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteProject(req, res) {
  const { id } = req.params;

  try {
    await Project.destroy({
      where: {
        id: id,
      },
    });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getProject(req, res) {
  const { id } = req.params;
  try {
    const project = await Project.findOne({ where: { id: id } });

    if (!project) {
      throw new Error("Project does not exist");
    }

    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getProjectTasks(req, res) {
  const { id } = req.params;
  try {
    const tasks = await Task.findAll({ where: { projectId: id } });

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
