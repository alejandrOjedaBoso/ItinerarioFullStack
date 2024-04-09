import { Router } from "express";
import { getSensorByUserUnansigned } from "../controllers/sensors.controller.js";

const router = Router();

router.route("/noasignedanduser").get(getSensorByUserUnansigned);

export default router;
