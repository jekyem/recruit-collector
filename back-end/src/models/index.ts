import * as Sequelize from "sequelize";
import { recruitFactory } from "./Recruit";
import { userFactory } from "./User";

const dbConfig = require("./dbConfig.json");

const sequelize = new Sequelize.Sequelize(
  dbConfig.database,
  dbConfig.userName,
  dbConfig.password,
  dbConfig.options
);

const db = {
  Recruit: recruitFactory(sequelize),
  User: userFactory(sequelize)
};

export default db;
