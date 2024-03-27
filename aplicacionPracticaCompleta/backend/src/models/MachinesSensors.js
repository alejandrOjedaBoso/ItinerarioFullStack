import { sequelize } from "../database/database.js";

export const MachinesSensors = sequelize.define(
  "machines_sensors",
  {},
  { timestamps: false }
);
