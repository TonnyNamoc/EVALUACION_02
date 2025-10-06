import { Sequelize } from "sequelize";
import "dotenv/config";

let sequelize;

if (process.env.DATABASE_URL) {
  // Producción: Render (Postgres)
  const useSSL = process.env.DATABASE_SSL !== "disable"; // si usas Internal URL, puedes desactivar SSL
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    logging: false,
    dialectOptions: useSSL ? { ssl: { require: true, rejectUnauthorized: false } } : {}
  });
} else {
  // Desarrollo local: MySQL (tu .env)
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT || 3306,
      dialect: process.env.DB_DIALECT || "mysql",
      logging: false
    }
  );
}

export { sequelize };
