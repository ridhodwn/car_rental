const { Order, Car, sequelize } = require('../models');

class OrderController {
    static async createOrder(req, res, next) {
        try {
            let { car_id, order_date, pickup_date, dropoff_date, pickup_location, dropoff_location } = req.body;
            order_date = new Date(order_date);
            pickup_date = new Date(pickup_date);
            dropoff_date = new Date(dropoff_date);
            let OrderCreated = await Order.create({ car_id, order_date, pickup_date, dropoff_date, pickup_location, dropoff_location });
            res.status(201).json(OrderCreated);
        } catch(error) {
            next(error);
        }
    }

    static async readOrders(req, res, next) {
        try {
            let orders = await Order.findAll({
                order: sequelize.col('id'),
                include: [Car]
            });
            res.status(200).json({orders});
        } catch(error) {
            next(error);
        }
    }

    static async readOrderById(req, res, next) {
        try {
            let { id } = req.params;
            let orderById = await Order.findByPk(id);
            if(!orderById) {
                throw {name: 'Order not found'};
            }
            res.status(200).json(orderById);
        } catch(error) {
            next(error);
        }
    }

    static async updateOrderById(req, res, next) {
        try {
            let { id } = req.params;
            let { car_id, order_date, pickup_date, dropoff_date, pickup_location, dropoff_location } = req.body;
            let orderFound = await Order.findByPk(id);
            if(!orderFound) {
                throw {name: 'Order not found'};
            }
            let orderUpdated = await orderFound.update({ car_id, order_date, pickup_date, dropoff_date, pickup_location, dropoff_location })

            res.status(200).json(orderUpdated);
        } catch(error) {
            next(error);
        }
    }

    static async deleteOrderById(req, res, next) {
        try {
            let { id } = req.params;
            let orderById = await Order.findByPk(id);
            if(!orderById) {
                throw {name: 'Order not found'};
            }
            await Order.destroy({
                where: {id}
            });
            res.status(200).json({message: `Delete order id ${orderById.id} success`});
        } catch(error) {
            next(error);
        }
    }
}

module.exports = OrderController;