const express = require('express');
const app = express();
const port = 3000;

// Middleware para aceitar JSON
app.use(express.json());

// Rota inicial
app.get('/', (req, res) => {
  res.send('API de CRUD de Produtos');
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});