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
      Stock.belongsTo(models.Product);  // Pertence a tabela Products (Muitos para Muitos)
      Stock.hasMany(models.History);  // Pertence a tabela User (Muitos para Muitos)
    }
  }
  Stock.init({
    fk_idProduct: DataTypes.INTEGER,
    inOut: DataTypes.BOOLEAN,
    qtd: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Stock',
  });
  return Stock;
};