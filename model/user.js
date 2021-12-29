const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
  first_name: String,
  last_name: String,
  age: Number,
  user_name: String,
  user_email: String,
  user_password: String,
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
