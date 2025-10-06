import { body, param } from "express-validator";

export const createDoctorVal = [
    body("nombre").trim().notEmpty().withMessage("nombre es obligatorio"),
    body("especialidad").trim().notEmpty().withMessage("especialidad es obligatoria")
];

export const idDoctorVal = [ param("id").isInt().withMessage("id inválido") ];
