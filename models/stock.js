'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Stock.belongsTo(models.User);     // Pertence a tabela User (Muitos para Muitos)
      Stock.belongsTo(models.Product);  // Pertence a tabela Products (Muitos para Muitos)
    }
  }
  Stock.init({
    fk_inputUser: DataTypes.INTEGER,
    fk_outputUser: DataTypes.INTEGER,
    qtd: DataTypes.INTEGER,
    price_total: DataTypes.FLOAT,
    fk_code: DataTypes.STRING,
    allowNull: false
  }, {
    sequelize,
    modelName: 'Stock',
  });

  return Stock;
};