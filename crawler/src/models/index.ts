import * as Sequelize from 'sequelize';
import { recruitFactory } from './Recruit';

const dbConfig = require('./DBConfig.json');

const sequelize = new Sequelize.Sequelize(
  dbConfig.database,
  dbConfig.userName,
  dbConfig.password,
  dbConfig.options,
);

export default {
  Recruit: recruitFactory(sequelize),
};
