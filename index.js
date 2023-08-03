const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

const logger = require('./middlewares.js');
const routes = require('./routes/routes.js');

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.static(path.resolve(__dirname, 'static')));
app.use(express.json());
app.use(cors());
app.use(logger);
app.use('/apps', routes);

function start() {
    try {
        app.listen(PORT, () => console.log('Сервер успешно запущен на', PORT));
    } catch (err) {
        console.log(err);
    }
}

start();