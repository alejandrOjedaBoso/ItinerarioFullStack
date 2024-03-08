import { Task } from "../models/Task.js";
import { Project } from "../models/Project.js";

export async function getTasks(req, res) {
  try {
    const tasks = await Task.findAll();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(404).json({ Error: error.message });
  }
}

export async function getTask(req, res) {
  const { id } = req.params;
  try {
    const task = await Task.findOne({
      where: { id: id },
      include: Project,
      //attributes: ["name"],
    });
    if (!task) {
      throw new Error("could not find task with id " + id);
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(404).json({ Error: error.message });
  }
}

export async function createTask(req, res) {
  const { name, done, projectId } = req.body;
  try {
    const newTask = await Task.create({
      name: name,
      done: done,
      projectId: projectId,
    });
    res.status(201).json(newTask);
  } catch (error) {
    res.status(404).json({ Error: error.message });
  }
}
export async function updateTask(req, res) {
  const { id } = req.params;

  try {
    const task = await Task.findByPk(id);
    task.set(req.body);
    await task.save();
    res.status(200).json(task);
  } catch (error) {
    res.status(404).json({ Error: error.message });
  }
}
export async function deleteTask(req, res) {
  const { id } = req.params;
  await Task.destroy({
    where: {
      id: id,
    },
  });
  res.status(204).end();
  try {
  } catch (error) {
    res.status(404).json({ Error: error.message });
  }
}
