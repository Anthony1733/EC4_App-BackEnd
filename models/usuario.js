const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  dni: { type: String, required: true, unique: true },
  correo: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('Usuario', usuarioSchema);
 