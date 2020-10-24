const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
});

module.exports = User = mongoose.model('users', UserSchema);
