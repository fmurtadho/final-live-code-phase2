const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

const userSchema = new Schema({
  name:   {
    type: String,
    required: [true,'name is required']
  },
  email: { type: String, index : true, unique: true, required: true },
  password: {
    type: String,
    required: [true, 'Error name is required']
  }
}, {
    timestamps : true
});

userSchema.plugin(uniqueValidator);

const User = mongoose.model('User', userSchema);

module.exports = User