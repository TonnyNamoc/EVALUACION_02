import { body, param } from "express-validator";

export const createPacienteVal = [
    body("nombre").trim().notEmpty().withMessage("nombre es obligatorio"),
    body("edad").isInt({ min: 0 }).withMessage("edad inválida"),
    body("id_doctor").isInt({ gt: 0 }).withMessage("id_doctor inválido")
];

export const idPacienteVal = [ param("id").isInt().withMessage("id inválido") ];
