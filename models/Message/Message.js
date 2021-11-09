var mongoose = require('mongoose');

const Message = new mongoose.Schema(
  {
    message: String,
    name: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Message', Message);
