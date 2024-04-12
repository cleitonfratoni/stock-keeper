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
      Stock.belongsTo(models.User);
      Stock.belongsTo(models.Product);
    }
  }
  Stock.init({
    productID: DataTypes.INTEGER,
    code: DataTypes.STRING,
    quantidade: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    preco_total: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Stock',
  });
  return Stock;
};