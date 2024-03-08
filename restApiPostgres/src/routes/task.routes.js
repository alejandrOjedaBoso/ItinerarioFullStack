import { Router } from "express";
import {
  createTask,
  deleteTask,
  getTasks,
  updateTask,
  getTask,
} from "../controllers/tasks.controller.js";
const router = Router();

router.route("/").get(getTasks).post(createTask);
router.route("/:id").put(updateTask).delete(deleteTask).get(getTask);

export default router;
