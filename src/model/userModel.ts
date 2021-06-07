import { DataTypes } from 'sequelize';
import { db } from '../../db/connection';

const User = db.define('User', {
    idUser: DataTypes.UUIDV4,
    nombre: DataTypes.STRING,
    username: DataTypes.STRING,
    telefono: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
}, {
    tableName: 'User'
});

module.exports = User;