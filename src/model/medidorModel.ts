import { DataTypes } from 'sequelize';
import { db } from '../../db/connection';
import { Address } from '../model/addressModel';

export const Medidor = db.define('medidor', {
    numero_medidor: DataTypes.STRING,
    watts: DataTypes.INTEGER,
    addressId: { type: DataTypes.INTEGER }
}, {
    tableName: 'medidor'
});
Medidor.belongsTo(Address, { foreignKey: 'addressId', as: 'address' })

