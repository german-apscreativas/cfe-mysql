import { DataTypes } from 'sequelize';
import { db } from '../../db/connection';
import { Medidor } from '../model/medidorModel';

export const Address = db.define('address', {
    colonia: { type: DataTypes.STRING },
    calle: { type: DataTypes.STRING },
    codigoPostal: { type: DataTypes.STRING },
    numeroExterior: { type: DataTypes.INTEGER },
    numeroInterior: { type: DataTypes.INTEGER }
}, {
    tableName: 'address'
});
