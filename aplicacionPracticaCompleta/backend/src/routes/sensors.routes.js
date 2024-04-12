import { Router } from "express";
import {
  getSensorByUserUnansigned,
  updateSensor,
  deleteSensor,
  getSensorByMachineUnasigned,
} from "../controllers/sensors.controller.js";

const router = Router();

router.route("/:id").put(updateSensor).delete(deleteSensor);
router.route("/noasignedanduser").get(getSensorByUserUnansigned);
router.route("/sensor/machine/:id").get(getSensorByMachineUnasigned);

export default router;
