import { Router } from "express";
import { listarPacientes, crearPaciente, actualizarPaciente, eliminarPaciente, obtenerPaciente } from "../controllers/pacientes.controller.js";
import { createPacienteVal, idPacienteVal } from "../validators/pacientes.validator.js";
import { upload } from "../middleware/upload.js";

const r = Router();
r.get("/", listarPacientes);
r.get("/:id", idPacienteVal, obtenerPaciente);
r.post("/", upload.single("foto"), createPacienteVal, crearPaciente);
r.put("/:id", upload.single("foto"), idPacienteVal, createPacienteVal, actualizarPaciente);
r.delete("/:id", idPacienteVal, eliminarPaciente);
export default r;
