const express = require('express');

const message = require('../../../controller/message');

const router = express.Router();
router.get('/list/:id', async (req, res) => {
  const list = await message.getList(+req.params.id);
  res.send(list);
});

router.get('/singl/:id', async (req, res) => {
  const messages = await message.getById(req.params.id);
  res.send(messages);
});

router.post('/create', async (req, res) => {
  const messages = await message.create(req.body);
  res.send(messages);
});

module.exports = router;
