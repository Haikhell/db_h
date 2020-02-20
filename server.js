const http = require('http');

const dbHelper = require('./src/db');
const config = require('./src/config');

(async () => {
  await dbHelper.mongodbClient.connect();

  dbHelper.mongodbClient.on('error', (err) => logger.error(err));
  dbHelper.mongodbClient.on('close', () => logger.error('Mongo driver connection disconnected'));

  const app = require('./src/app');

  const httpServer = http.createServer(app);

  httpServer.listen(config.PORT);
})();
