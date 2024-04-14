'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Stocks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // Chave estrangeira
      fk_inputUser: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Users',
          key: 'id'
        },
        onUpdate:'cascade',
        onDelete:'cascade'
      },
      // Chave estrangeira
      fk_outputUser: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Users',
          key: 'id'
        },
        onUpdate:'cascade',
        onDelete:'cascade'
      },
      qtd: {
        type: Sequelize.INTEGER
      },
      price_total: {
        type: Sequelize.FLOAT
      },
      // Chave estrangeira
      fk_code: {
        type: Sequelize.STRING,
        allowNull: false,
        references:{
          model: 'Products',
          key: 'code'
        },
        onUpdate:'cascade',
        onDelete:'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Stocks');
  }
};