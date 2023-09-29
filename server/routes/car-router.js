const router = require('express').Router();

const CarController = require('../controllers/car-controller');

router.post("/", CarController.createCar);
router.get("/", CarController.readCars);
router.get("/:id", CarController.readCarById);
router.put("/:id", CarController.updateCarById);
router.delete("/:id", CarController.deleteCarById);

module.exports = router;