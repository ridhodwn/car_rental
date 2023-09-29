'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo(models.Car, {
        foreignKey: 'car_id'
      });
    }
  }
  Order.init({
    car_id: DataTypes.INTEGER,
    order_date: DataTypes.DATE,
    pickup_date: DataTypes.DATE,
    dropoff_date: DataTypes.DATE,
    pickup_location: DataTypes.CHAR(50),
    dropoff_location: DataTypes.CHAR(50)
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};