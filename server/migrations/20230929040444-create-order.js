'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      car_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Cars',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      order_date: {
        type: Sequelize.DATE
      },
      pickup_date: {
        type: Sequelize.DATE
      },
      dropoff_date: {
        type: Sequelize.DATE
      },
      pickup_location: {
        type: Sequelize.CHAR(50)
      },
      dropoff_location: {
        type: Sequelize.CHAR(50)
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
    await queryInterface.dropTable('Orders');
  }
};