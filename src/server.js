const http = require('http');

const dbHelper = require('./db');
const config = require('./config');

(async () => {
  await dbHelper.mongodbClient.connect();

  dbHelper.mongodbClient.on('error', (err) => logger.error(err));
  dbHelper.mongodbClient.on('close', () => logger.error('Mongo driver connection disconnected'));

  const app = require('./app');

  const httpServer = http.createServer(app);

  httpServer.listen(config.PORT, config.HOST);
})();
