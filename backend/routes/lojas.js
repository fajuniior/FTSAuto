const express = require('express');
const router = express.Router();
const lojas = require('../data/lojas');

// GET /api/lojas - Listar todas as lojas
router.get('/', (req, res) => {
  try {
    res.json({
      success: true,
      data: lojas,
      total: lojas.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar lojas',
      error: error.message
    });
  }
});

// GET /api/lojas/:id - Buscar loja por ID
router.get('/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const loja = lojas.find(l => l.id === id);
    
    if (!loja) {
      return res.status(404).json({
        success: false,
        message: 'Loja não encontrada'
      });
    }
    
    res.json({
      success: true,
      data: loja
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar loja',
      error: error.message
    });
  }
});

// GET /api/lojas/cidade/:cidade - Filtrar por cidade
router.get('/cidade/:cidade', (req, res) => {
  try {
    const cidade = req.params.cidade;
    const lojasFiltradas = lojas.filter(l => 
      l.endereco.toLowerCase().includes(cidade.toLowerCase())
    );
    
    res.json({
      success: true,
      data: lojasFiltradas,
      total: lojasFiltradas.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao filtrar lojas por cidade',
      error: error.message
    });
  }
});

module.exports = router;

