'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      History.belongsTo(models.Stock);  // Pertence a tabela Products (Muitos para Muitos)
      History.belongsTo(models.User);  // Pertence a tabela User (Muitos para Muitos)
    }
  }
  History.init({
    fk_idUser: DataTypes.INTEGER,
    fk_idProduct: DataTypes.INTEGER,
    qtd: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'History',
  });
  return History;
};