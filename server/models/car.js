'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Car.hasMany(models.Order, {
        foreignKey: 'car_id'
      });
    }
  }
  Car.init({
    car_name: DataTypes.CHAR(50),
    day_rate: DataTypes.DOUBLE,
    month_rate: DataTypes.DOUBLE,
    image: DataTypes.CHAR
  }, {
    sequelize,
    modelName: 'Car',
  });
  return Car;
};