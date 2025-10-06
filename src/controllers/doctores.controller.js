import { validationResult } from "express-validator";
import { Doctor } from "../models/Doctor.js";

export const listarDoctores = async (_req, res) => {
    const data = await Doctor.findAll({ order: [["id_doctor","ASC"]] });
    res.json(data);
};

export const crearDoctor = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    const d = await Doctor.create({ nombre: req.body.nombre, especialidad: req.body.especialidad });
    res.status(201).json(d);
};

export const actualizarDoctor = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    const d = await Doctor.findByPk(req.params.id);
    if (!d) return res.status(404).json({ message: "No existe" });
    await d.update({ nombre: req.body.nombre, especialidad: req.body.especialidad });
    res.json(d);
};

export const eliminarDoctor = async (req, res) => {
    const d = await Doctor.findByPk(req.params.id);
    if (!d) return res.status(404).json({ message: "No existe" });
    await d.destroy();
    res.json({ ok: true });
};
