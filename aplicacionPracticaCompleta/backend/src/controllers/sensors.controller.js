import { Sensor } from "../models/Sensor.js";
import { sequelize } from "../database/database.js";
import { QueryTypes } from "sequelize";

export async function getSensorByUserUnansigned(req, res) {
  try {
    let token = req.headers.authorization;
    token = token.split(" ")[1];
    const user = getUser(token);
    const sensors = await sequelize.query(
      `select s.* from sensors s left join machines m on m."ref" = s."machineId" where m."userId" like ${user} or s."machineId" is NULL`,
      { type: QueryTypes.SELECT }
    );
    res.status(200).json(sensors);
  } catch (er) {
    res.status(500).json({ err: er });
  }
}
