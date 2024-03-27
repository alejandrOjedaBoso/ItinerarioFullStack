import { Router } from "express";
import {
  createUser,
  loginUser,
  checkTokenUser,
} from "../controllers/users.controller.js";

const router = Router();

router.route("/").post(createUser);
router.route("/authenticate").post(loginUser).get(checkTokenUser);

export default router;
