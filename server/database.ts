const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://127.0.0.1/my-app-db', {});

mongoose.connection.on('open', function () {
  console.log('connected to MongoDB');
});

const eventSchema = new Schema({});

const Data = mongoose.model('Data', eventSchema);

module.exports = Data;
