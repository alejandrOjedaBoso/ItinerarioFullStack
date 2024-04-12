import { Sensor } from "../models/Sensor.js";
import { getUser } from "../config/jwt.js";
import { Machine } from "../models/Machine.js";
import { Op } from "sequelize";

//query a la base de datos
// import { sequelize } from "../database/database.js";
// import { QueryTypes } from "sequelize";

export async function getSensorByUserUnansigned(req, res) {
  try {
    let token = req.headers.authorization;
    token = token.split(" ")[1];
    const user = getUser(token);
    // query a la base de datos, pero no incluye la maquina
    // const sensors = await sequelize.query(
    //   `select s.* from sensors s left join machines m on m."ref" = s."machineId" where m."userId" like :username or s."machineId" is NULL`,
    //   { replacements: { username: user.username }, type: QueryTypes.SELECT }
    // );
    const sensors = [
      ...(await Sensor.findAll({
        include: {
          model: Machine,
          required: true,
          where: {
            userId: {
              [Op.like]: user.username,
            },
          },
        },
      })),
      ...(await Sensor.findAll({
        where: {
          machineId: null,
        },
      })),
    ];
    res.status(200).json(sensors);
  } catch (er) {
    console.log(er.message);
    res.status(500).json({ err: er.message });
  }
}

export async function updateSensor(req, res) {
  try {
    const sensor = await Sensor.findOne({
      where: {
        code: req.params.id,
      },
    });
    await sensor.update(req.body);
    res.status(200).json(sensor);
  } catch (er) {
    res.status(500).json({ err: er.message });
  }
}

export async function deleteSensor(req, res) {
  try {
    const sensor = await Sensor.findOne({
      where: {
        code: req.params.id,
      },
    });
    await sensor.destroy();
    res.status(200).json(sensor);
  } catch (er) {
    res.status(500).json({ err: er.message });
  }
}

export async function getSensorByMachineUnasigned(req, res) {
  try {
    const machineRef = req.params.id;
    const sensors = [
      ...(await Sensor.findAll({
        where: {
          machineId: machineRef,
        },
      })),
      ...(await Sensor.findAll({
        where: {
          machineId: null,
        },
      })),
    ];
    res.status(200).json(sensors);
  } catch (er) {
    res.status(500).json({ err: er.message });
  }
}
