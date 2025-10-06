import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const Doctor = sequelize.define("Doctor", {
    id_doctor: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING(120), allowNull: false },
    especialidad: { type: DataTypes.STRING(120), allowNull: false }
}, {
    tableName: "doctores",
    timestamps: false
});
