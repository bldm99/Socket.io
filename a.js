const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Lab5', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión con MongoDB:'));
db.once('open', function() {
  console.log('Conexión exitosa con MongoDB!');
});