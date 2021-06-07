import { DataTypes } from 'sequelize';
import { db } from '../../db/connection';


export const Medidor = db.define('medidor', {
    numero_medidor: DataTypes.STRING,
    watts: DataTypes.NUMBER
}, {
    tableName: 'medidor'
});

