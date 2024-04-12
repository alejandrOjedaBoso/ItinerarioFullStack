import { Machine } from "../models/Machine.js";
import { Sensor } from "../models/Sensor.js";
import { getUser } from "../config/jwt.js";

export async function createMachine(req, res) {
  const machine = req.body;

  try {
    const newMachine = Machine.create(machine);
    res.status(200).json(machine);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
}

export async function getMachinesByUserToken(req, res) {
  try {
    let token = req.headers.authorization;
    token = token.split(" ")[1];
    const user = getUser(token);
    const machines = await Machine.findAll({
      where: {
        userId: user.username,
      },
      include: {
        model: Sensor,
      },
    });
    res.status(200).json(machines);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
}

export async function deleteMachine(req, res) {
  try {
    const machine = await Machine.findOne({
      where: {
        ref: req.params.id,
      },
    });
    console.log(machine);
    await machine.destroy();
    res.status(200).json({});
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
}

export async function updateMachine(req, res) {
  try {
    //Modifica los sensores
    if (req.body.sensores) {
      const sensors = req.body.sensores;
      sensors.forEach(async (element) => {
        const sensor = await Sensor.findOne({ where: { code: element.code } });
        sensor.machineId = element.machineId;
        if (sensor) {
          sensor.save();
        }
      });
    }
    //Modifica la maquina
    const machine = await Machine.findOne({
      where: {
        ref: req.params.id,
      },
    });

    await machine.update(req.body);
    res.status(200).json(machine);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
}
