var express = require('express');
var router = express.Router();
var Message = require('../models/Message/Message');

router.post('/', function (req, res) {
  const { name, message } = req.query;
  if (!name || !message) {
    res.json({ message: 'YOU KNOW WHAT YOU DID' });
  }
  Message.create({ name, message });
  res.json(req.query);
});

router.get('/', async (req, res) => {
  const result = await Message.find({}).sort({ createdAt: -1 }).lean();
  res.json(result);
});

module.exports = router;
