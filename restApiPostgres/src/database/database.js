import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  "sequelizecurse",
  "postgres",
  "postgres",
  {
    host: "localhost",
    dialect: "postgres",
  }
);
