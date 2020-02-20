require('dotenv').config({ path: `${__dirname}/.env` });

const ENV = process.env;

const REQUIRED_CONFIG = [ 'MONGO_DB_URL', 'MONGO_DB_NAME' ];

REQUIRED_CONFIG.forEach((field) => {
  if (!ENV.hasOwnProperty(field)) {
    throw new Error('Missing required config');
  }
});
module.exports = Object.freeze({
  HOST: ENV.HOST || '127.0.0.1',
  PORT: ENV.PORT ? +ENV.PORT : 4040,

  MONGO_DB_URL: ENV.MONGO_DB_URL,
  MONGO_DB_NAME: ENV.MONGO_DB_NAME
});
