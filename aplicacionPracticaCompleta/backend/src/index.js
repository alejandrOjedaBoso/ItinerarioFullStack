import app from "./app.js";
import { sequelize } from "./database/database.js";

//insertar tablas
import { User } from "./models/User.js";
import { Machine } from "./models/Machine.js";
import { Sensor } from "./models/Sensor.js";

async function main() {
  try {
    //sequelize ini
    await sequelize.sync({ force: false, alter: true });

    console.log("Connection has been established");

    //express ini
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  } catch (e) {
    console.error("unable to connect to database " + e);
  }
}

main();
