const express = require('express');

const messageRouter = require('./message');

const router = express.Router();

router.use('/message', messageRouter);

module.exports = router;
