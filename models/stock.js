'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Stock extends Model {
    static associate(models) {
      Stock.belongsTo(models.Product, { foreignKey: 'fk_idProduct' });  // Pertence a tabela Products (Muitos para Muitos)
    }

    // Método estático para calcular o total do estoque por produto
    static async getTotalStockByProduct() {
      const [results, metadata] = await sequelize.query(`
        SELECT 
          p.productName,
          SUM(CASE WHEN s.inOut = true THEN s.qtd ELSE -s.qtd END) AS qtd_total
        FROM Stocks s
        JOIN Products p ON s.fk_idProduct = p.id
        GROUP BY p.productName
      `);
      return results;
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
