const express = require('express');
const router = express.Router();
const carros = require('../data/carros');

// GET /api/carros - Listar todos os carros
router.get('/', (req, res) => {
  try {
    res.json({
      success: true,
      data: carros,
      total: carros.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar carros',
      error: error.message
    });
  }
});

// GET /api/carros/:id - Buscar carro por ID
router.get('/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const carro = carros.find(c => c.id === id);
    
    if (!carro) {
      return res.status(404).json({
        success: false,
        message: 'Carro não encontrado'
      });
    }
    
    res.json({
      success: true,
      data: carro
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar carro',
      error: error.message
    });
  }
});

// GET /api/carros/categoria/:categoria - Filtrar por categoria
router.get('/categoria/:categoria', (req, res) => {
  try {
    const categoria = req.params.categoria;
    const carrosFiltrados = carros.filter(c => 
      c.categoria.toLowerCase().includes(categoria.toLowerCase())
    );
    
    res.json({
      success: true,
      data: carrosFiltrados,
      total: carrosFiltrados.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao filtrar carros',
      error: error.message
    });
  }
});

// GET /api/carros/marca/:marca - Filtrar por marca
router.get('/marca/:marca', (req, res) => {
  try {
    const marca = req.params.marca;
    const carrosFiltrados = carros.filter(c => 
      c.marca.toLowerCase() === marca.toLowerCase()
    );
    
    res.json({
      success: true,
      data: carrosFiltrados,
      total: carrosFiltrados.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao filtrar carros por marca',
      error: error.message
    });
  }
});

module.exports = router;