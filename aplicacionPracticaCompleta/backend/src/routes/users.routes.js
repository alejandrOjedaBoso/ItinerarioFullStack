import { Router } from "express";
import { createUser, loginUser } from "../controllers/users.controller.js";

const router = Router();

router.route("/").post(createUser);
router.route("/authenticate").post(loginUser);

export default router;
