import * as Sequelize from "sequelize";
import { recruitFactory } from "./model/Recruit";

const dbConfig = require("./dbConfig.json");

const sequelize = new Sequelize.Sequelize(
  dbConfig.database,
  dbConfig.userName,
  dbConfig.password,
  dbConfig.options
);

const db = {
  Recruit: recruitFactory(sequelize)
};

export default db;
