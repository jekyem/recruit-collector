import * as Sequelize from 'sequelize';
import { recruitFactory } from './models/Recruit';

const dbConfig = require('./config/dbConfig.json');

const sequelize = new Sequelize.Sequelize(
  dbConfig.database,
  dbConfig.userName,
  dbConfig.password,
  dbConfig.options,
);

const db = {
  Recruit: recruitFactory(sequelize),
};

export default db;
