import { Router } from "express";
import { listarDoctores, crearDoctor, actualizarDoctor, eliminarDoctor } from "../controllers/doctores.controller.js";
import { createDoctorVal, idDoctorVal } from "../validators/doctores.validator.js";

const r = Router();
r.get("/", listarDoctores);
r.post("/", createDoctorVal, crearDoctor);
r.put("/:id", idDoctorVal, createDoctorVal, actualizarDoctor);
r.delete("/:id", idDoctorVal, eliminarDoctor);
export default r;
