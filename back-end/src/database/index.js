import { Sequelize } from "sequelize";
import Culto from "../app/models/Culto.js";
import User from "../app/models/User.js";
import configDatabase from "../config/database.js";

const models = [Culto, User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(configDatabase);
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models),
      );
  }
}

export default new Database();
