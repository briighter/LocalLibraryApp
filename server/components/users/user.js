var mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  name:  String,
  email: String,
  roles:   [{ role: String }],
  dateJoined: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);