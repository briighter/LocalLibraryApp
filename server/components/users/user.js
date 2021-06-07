import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  name:  String, // String is shorthand for {type: String}
  email: String,
  roles:   [{ role: String }],
  dateJoined: { type: Date, default: Date.now }
});