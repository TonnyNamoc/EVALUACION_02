import { validationResult } from "express-validator";
import { Paciente } from "../models/Paciente.js";
import { Doctor } from "../models/Doctor.js";

export const listarPacientes = async (_req, res) => {
        const data = await Paciente.findAll({
        include: [{ model: Doctor, as: "doctor", attributes: ["id_doctor","nombre","especialidad"] }],
        order: [["id_paciente","ASC"]]
    });
    res.json(data);
};

export const obtenerPaciente = async (req, res) => {
    const p = await Paciente.findByPk(req.params.id, {
    include: [{ model: Doctor, as: "doctor", attributes: ["id_doctor","nombre","especialidad"] }]
    });
    if (!p) return res.status(404).json({ message: "No existe" });
    res.json(p);
};

export const crearPaciente = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    const foto = req.file?.filename || null;
    const nuevo = await Paciente.create({ ...req.body, foto });
    res.status(201).json(nuevo);
};

export const actualizarPaciente = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    const p = await Paciente.findByPk(req.params.id);
    if (!p) return res.status(404).json({ message: "No existe" });

    const data = { ...req.body };
    if (req.file?.filename) data.foto = req.file.filename;

    await p.update(data);
    res.json(p);
};

export const eliminarPaciente = async (req, res) => {
    const p = await Paciente.findByPk(req.params.id);
    if (!p) return res.status(404).json({ message: "No existe" });
    await p.destroy();
    res.json({ ok: true });
};
    