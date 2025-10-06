import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { sequelize } from "./config/db.js";

import doctoresRoutes from "./routes/doctores.routes.js";
import pacientesRoutes from "./routes/pacientes.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));
app.use(express.static(path.join(__dirname, "..", "public"))); 

app.get("/", (_req, res) => res.send("API OK"));

app.use("/api/doctores", doctoresRoutes);
app.use("/api/pacientes", pacientesRoutes);

export const init = async () => {
    await sequelize.authenticate();
    await sequelize.sync();
    return app;
};

export default app;
