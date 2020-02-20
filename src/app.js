const cors = require('cors');
const helmet = require('helmet');
const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');

const app = express();

app.enable('trust proxy');
app.disable('x-powered-by');
app.set('view engine', 'html');

app.use(cors());
app.use(helmet());
app.use(bodyParser.json({ limit: '500kb' }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(routes);
module.exports = app;
