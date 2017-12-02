var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

// Bind the layout of the schema to the model 'User'
mongoose.model('User', UserSchema);
module.exports = mongoose.model('User');
