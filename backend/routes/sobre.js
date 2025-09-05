const express = require('express');
const router = express.Router();
const sobre = require('../data/sobre');

// GET /api/sobre - Informações sobre a empresa
router.get('/', (req, res) => {
  try {
    res.json({
      success: true,
      data: sobre
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar informações da empresa',
      error: error.message
    });
  }
});

// GET /api/sobre/empresa - Informações básicas da empresa
router.get('/empresa', (req, res) => {
  try {
    res.json({
      success: true,
      data: sobre.empresa
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar informações da empresa',
      error: error.message
    });
  }
});

// GET /api/sobre/historia - História da empresa
router.get('/historia', (req, res) => {
  try {
    res.json({
      success: true,
      data: sobre.historia
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar história da empresa',
      error: error.message
    });
  }
});

// GET /api/sobre/equipe - Equipe da empresa
router.get('/equipe', (req, res) => {
  try {
    res.json({
      success: true,
      data: sobre.equipe
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar informações da equipe',
      error: error.message
    });
  }
});

// GET /api/sobre/certificacoes - Certificações da empresa
router.get('/certificacoes', (req, res) => {
  try {
    res.json({
      success: true,
      data: sobre.certificacoes
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar certificações',
      error: error.message
    });
  }
});

module.exports = router;

