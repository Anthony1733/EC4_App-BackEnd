const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const usuariosRoutes = require('./routes/usuario.routes');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/PREGUNTA1';

// Middleware para mostrar cada petición recibida
app.use((req, res, next) => {
  console.log(`Petición recibida: ${req.method} ${req.url}`);
  next();
});

app.use(cors());
app.use(express.json());

app.use('/api/usuarios', usuariosRoutes);

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log(' Conectado a MongoDB');
  app.listen(PORT, () => {
    console.log(` Servidor corriendo en http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error('Error de conexión:', err);
});
