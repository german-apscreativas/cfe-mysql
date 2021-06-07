import { Sequelize } from 'sequelize';

const dbName:any = process.env.DB_NAME;
const userName:any = process.env.DB_USERNAME;
const password:any = process.env.DB_PASSWORD;
const host:any = process.env.DB_HOST;


export const db = new Sequelize(dbName, userName, password, {
  host,
  dialect: 'mysql'
});

