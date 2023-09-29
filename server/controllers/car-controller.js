const { Car, sequelize } = require('../models');

class CarController {
    static async createCar(req, res, next) {
        try {
            let { car_name, day_rate, month_rate, image } = req.body;
            let carCreated = await Car.create({ car_name, day_rate, month_rate, image });
            res.status(201).json(carCreated);
        } catch(error) {
            next(error);
        }
    }

    static async readCars(req, res, next) {
        try {
            let cars = await Car.findAll({
                order: sequelize.col('id')
            });
            res.status(200).json({cars});
        } catch(error) {
            next(error);
        }
    }

    static async readCarById(req, res, next) {
        try {
            let { id } = req.params;
            let carById = await Car.findByPk(id);
            if(!carById) {
                throw {name: 'Car not found'};
            }
            res.status(200).json(carById);
        } catch(error) {
            next(error);
        }
    }

    static async updateCarById(req, res, next) {
        try {
            let { id } = req.params;
            let { car_name, day_rate, month_rate, image } = req.body;
            let carFound = await Car.findByPk(id);
            if(!carFound) {
                throw {name: 'Car not found'};
            }
            let carUpdated = await carFound.update({ car_name, day_rate, month_rate, image })

            res.status(200).json(carUpdated);
        } catch(error) {
            next(error);
        }
    }

    static async deleteCarById(req, res, next) {
        try {
            let { id } = req.params;
            let carById = await Car.findByPk(id);
            if(!carById) {
                throw {name: 'Car not found'};
            }
            await Car.destroy({
                where: {id}
            });
            res.status(200).json({message: `Delete car id ${carById.id} success`});
        } catch(error) {
            next(error);
        }
    }
}

module.exports = CarController;