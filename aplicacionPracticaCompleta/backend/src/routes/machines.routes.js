import { Router } from "express";
import {
  createMachine,
  getMachinesByUserToken,
  updateMachine,
  deleteMachine,
} from "../controllers/machines.controller.js";

const router = Router();

router.route("/").post(createMachine);
router.route("/:id").put(updateMachine).delete(deleteMachine);
router.route("/token").get(getMachinesByUserToken);

export default router;
