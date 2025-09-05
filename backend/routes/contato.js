const express = require('express');
const router = express.Router();
const contato = require('../data/contato');

// GET /api/contato - Informações de contato
router.get('/', (req, res) => {
  try {
    res.json({
      success: true,
      data: contato
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar informações de contato',
      error: error.message
    });
  }
});

// GET /api/contato/informacoes - Informações básicas
router.get('/informacoes', (req, res) => {
  try {
    res.json({
      success: true,
      data: contato.informacoes
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar informações básicas',
      error: error.message
    });
  }
});

// GET /api/contato/departamentos - Departamentos
router.get('/departamentos', (req, res) => {
  try {
    res.json({
      success: true,
      data: contato.departamentos
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar departamentos',
      error: error.message
    });
  }
});

// POST /api/contato/mensagem - Enviar mensagem de contato
router.post('/mensagem', (req, res) => {
  try {
    const { nome, email, telefone, assunto, mensagem } = req.body;
    
    // Validação básica
    if (!nome || !email || !mensagem) {
      return res.status(400).json({
        success: false,
        message: 'Nome, email e mensagem são obrigatórios'
      });
    }
    
    // Simular envio de mensagem (em um projeto real, aqui seria integrado com email)
    const novaMensagem = {
      id: Date.now(),
      nome,
      email,
      telefone: telefone || '',
      assunto: assunto || 'Contato via site',
      mensagem,
      dataEnvio: new Date().toISOString(),
      status: 'recebida'
    };
    
    res.json({
      success: true,
      message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
      data: novaMensagem
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao enviar mensagem',
      error: error.message
    });
  }
});

module.exports = router;

