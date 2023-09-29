function errorHandler (err, req, res, next) {
    if(err.name === 'Car not found') {
        res.status(404).json({message: 'Car not found'});
    } else if(err.name === 'Order not found') {
        res.status(404).json({message: 'Order not found'});
    } else {
        res.status(500).json({message: 'Internal server error'});
    }
}

module.exports = errorHandler;