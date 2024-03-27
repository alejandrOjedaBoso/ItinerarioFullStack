import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

import { Machine } from "./Machine.js";

export const User = sequelize.define(
  "users",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    surnames: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

//Relaciones;
User.hasMany(Machine, {
  foreignKey: "userId",
  sourceKey: "username",
});

Machine.belongsTo(User, {
  foreignKey: "userId",
  targetId: "userId",
});
