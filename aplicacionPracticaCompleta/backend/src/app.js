import express from "express";
import cors from "cors";
import usersRoutes from "./routes/users.routes.js";
import machinesRoutes from "./routes/machines.routes.js";
import sensorsRoutes from "./routes/sensors.routes.js";

const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use("/api/users", usersRoutes);
app.use("/machines", machinesRoutes);
app.use("/sensors", sensorsRoutes);

export default app;
