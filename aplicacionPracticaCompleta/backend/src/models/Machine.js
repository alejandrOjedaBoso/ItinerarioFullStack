import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

import { Sensor } from "./Sensor.js";

export const Machine = sequelize.define(
  "machines",
  {
    ref: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING,
    },
    model: {
      type: DataTypes.STRING,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
    },
    derigistered: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    heads: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 2,
      },
    },
    status: {
      type: DataTypes.STRING,
      validate: {
        isIn: [["stopped", "working", "paused", "maintenance"]],
      },
      allowNull: false,
    },
    powerKv: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    emailAlerts: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

//Relaciones
Machine.hasMany(Sensor, {
  foreignKey: "machineId",
  sourceKey: "ref",
});

Sensor.belongsTo(Machine, {
  foreignKey: "machineId",
  targetKey: "ref",
});
