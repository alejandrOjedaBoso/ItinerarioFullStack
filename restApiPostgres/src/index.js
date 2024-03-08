import app from "./app.js";
import { sequelize } from "./database/database.js";

// Importamos las clases de la tabla para que se creen en la base de datos
// import "./models/Project.js";
// import "./models/Task.js";

async function main() {
  try {
    // Force true para que se apliquen los cambios en las tablas
    await sequelize.sync({ force: false });

    console.log("Connection has beem established");

    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  } catch (e) {
    console.error("Unable to connect to the database:", e);
  }
}

main();
