import { Sequelize } from "sequelize";

//Conexion a la base de datos
export const sequelize = new Sequelize("medicion", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
});
