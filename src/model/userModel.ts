import { DataTypes } from 'sequelize';
import { db } from '../../db/connection';

const User = db.define('User', {
    nombre: DataTypes.STRING,
    username: DataTypes.STRING,
    telefono: DataTypes.STRING,
    email: {type: DataTypes.STRING, unique: true},
    password: DataTypes.STRING,
    role: DataTypes.STRING
}, {
    tableName: 'User'
});

module.exports = User;