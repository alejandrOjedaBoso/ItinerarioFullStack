import { Router } from "express";
import {
  getSensorByUserUnansigned,
  updateSensor,
  deleteSensor,
} from "../controllers/sensors.controller.js";

const router = Router();

router.route("/:id").put(updateSensor).delete(deleteSensor);
router.route("/noasignedanduser").get(getSensorByUserUnansigned);

export default router;
