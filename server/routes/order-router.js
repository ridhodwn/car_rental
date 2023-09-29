const router = require('express').Router();

const OrderController = require('../controllers/order-controller');

router.post("/", OrderController.createOrder);
router.get("/", OrderController.readOrders);
router.get("/:id", OrderController.readOrderById);
router.put("/:id", OrderController.updateOrderById);
router.delete("/:id", OrderController.deleteOrderById);

module.exports = router;