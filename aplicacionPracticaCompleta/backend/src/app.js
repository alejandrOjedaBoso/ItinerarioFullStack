import express from "express";
import cors from "cors";
import { front } from "./config/config.js";
import { checkCredentials } from "./config/jwt.js";
import usersRoutes from "./routes/users.routes.js";
import machinesRoutes from "./routes/machines.routes.js";
import sensorsRoutes from "./routes/sensors.routes.js";

const app = express();

//middlewares
app.use(cors({ origin: front }));
app.use(express.json());
app.use("/", checkCredentials);
app.use("/api/users", usersRoutes);
app.use("/machines", machinesRoutes);
app.use("/sensors", sensorsRoutes);

export default app;
