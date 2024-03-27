import app from "./app.js";
import { sequelize } from "./database/database.js";

// Importamos las clases de la tabla para que se creen en la base de datos
// import "./models/Project.js";
// import "./models/Task.js";

async function main() {
  try {
    // Force true para que se apliquen los cambios en las tablas borra los datos
    // alter modifica las tablas en basa en los modelos peor no borra ningún dato
    await sequelize.sync({ force: false, alter: true });

    console.log("Connection has been established");

    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  } catch (e) {
    console.error("Unable to connect to the database:", e);
  }
}

main();
