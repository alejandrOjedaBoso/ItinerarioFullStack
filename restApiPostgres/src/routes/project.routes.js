import { Router } from "express";
import {
  createProject,
  getProjects,
  updateProject,
  deleteProject,
  getProject,
  getProjectTasks,
} from "../controllers/projects.controller.js";

const router = Router();

router.route("/").get(getProjects).post(createProject);
router.route("/:id").put(updateProject).delete(deleteProject).get(getProject);
router.route("/:id/tasks").get(getProjectTasks);

export default router;
