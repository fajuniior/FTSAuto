const express = require('express');
const cors = require('cors');
const carrosRoutes = require('./routes/carros');
const lojasRoutes = require('./routes/lojas');
const sobreRoutes = require('./routes/sobre');
const contatoRoutes = require('./routes/contato');

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas
app.use('/api/carros', carrosRoutes);
app.use('/api/lojas', lojasRoutes);
app.use('/api/sobre', sobreRoutes);
app.use('/api/contato', contatoRoutes);

// Rota de teste
app.get('/', (req, res) => {
  res.json({ message: 'FTSAuto API - Loja de Carros de Luxo' });
});

// Iniciar servidor
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;

