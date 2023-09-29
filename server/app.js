if(process.env.NODE_ENV !== "production") {
    require('dotenv').config()
}

const express = require('express');
const cors = require('cors');
const errorHandler = require('./middlewares/error-handler');
const router = require('./routes');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/', router);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});