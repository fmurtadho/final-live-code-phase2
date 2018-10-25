const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validate = require('mongoose-validator');

var nameValidator = [
  validate({
    validator: 'isLength',
    arguments: [3, 50],
    message: 'Name should be between {ARGS[0]} and {ARGS[1]} characters',
  }),
  validate({
    validator: 'isAlphanumeric',
    passIfEmpty: true,
    message: 'Name should contain alpha-numeric characters only',
  }),
]

const userSchema = new Schema({
  name:   {
    type: String,
    required: [true,'name is required']
  },
  email: {
    type: String,
    required: [true, 'email is required']
  },
  password: {
    type: String,
    required: [true, 'Error name is required']
  }
}, {
    timestamps : true
});

const User = mongoose.model('User', userSchema);

module.exports = User