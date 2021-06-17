var mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  firstName:  String,
  lastName: String,
  email: String,
  roles:   [{ role: String }],
  dateJoined: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

module.exports = User;