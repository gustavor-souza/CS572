const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected");
});

const SeecretSchema = mongoose.Schema({
  message:String
});

module.exports = mongoose.model('SecretModel', SeecretSchema);