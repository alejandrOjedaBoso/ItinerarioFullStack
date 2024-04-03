import { Machine } from "../models/Machine.js";
import { getUser } from "../config/jwt.js";
import { where } from "sequelize";

export async function createMachine(req, res) {
  const machine = req.body;

  try {
    const newMachine = Machine.create(machine);
    res.status(200).json(machine);
  } catch (err) {
    res.status(500).json({ err: err });
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
    });
    res.status(200).json(machines);
  } catch (err) {
    res.status(500).json({ err: err });
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
    res.status(500).json({ err: err });
  }
}

export async function updateMachine(req, res) {
  try {
    const machine = await Machine.findOne({
      where: {
        ref: req.params.id,
      },
    });
    machine.update(req.body);
    res.status(200).json(machine);
  } catch (err) {
    res.status(500).json({ err: err });
  }
}
