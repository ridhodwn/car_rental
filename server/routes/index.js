const router = require('express').Router();

const carRouter = require('./car-router');
const orderRouter = require('./order-router');

router.use("/cars", carRouter);
router.use("/orders", orderRouter);

module.exports = router;