import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { Doctor } from "./Doctor.js";

export const Paciente = sequelize.define("Paciente", {
    id_paciente: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING(200), allowNull: false },
    edad: { type: DataTypes.INTEGER, allowNull: false },
    foto: { type: DataTypes.STRING(255) },
    id_doctor: { type: DataTypes.INTEGER, allowNull: false }
}, {
    tableName: "pacientes",
    timestamps: false
});

Paciente.belongsTo(Doctor, { foreignKey: "id_doctor", as: "doctor" });
Doctor.hasMany(Paciente, { foreignKey: "id_doctor", as: "pacientes" });
