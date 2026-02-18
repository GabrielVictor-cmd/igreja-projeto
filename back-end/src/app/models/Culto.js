import Sequelize, { Model } from "sequelize"

class Culto extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
        evento: Sequelize.BOOLEAN,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `http://localhost:3001/culto-file/${this.path}`
          },
        },
      },
      {
        sequelize,
      }
    )
    return this
  }
  static associate(models) {
    this.belongsTo(models.Category, { foreignKey: "culto_id", as: "culto" })
  }
}

export default Culto
