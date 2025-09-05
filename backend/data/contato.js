const contato = {
  informacoes: {
    empresa: 'FTSAuto - Carros de Luxo',
    cnpj: '12.345.678/0001-90',
    enderecoPrincipal: 'Av. Paulista, 1000 - Bela Vista, São Paulo - SP, 01310-100',
    telefoneGeral: '(11) 3000-1000',
    whatsapp: '(11) 99999-0000',
    emailGeral: 'contato@ftsauto.com.br',
    emailVendas: 'vendas@ftsauto.com.br',
    emailSuporte: 'suporte@ftsauto.com.br'
  },
  horarioFuncionamento: {
    segundaASexta: '9h às 19h',
    sabado: '9h às 17h',
    domingo: 'Fechado',
    feriados: 'Consultar disponibilidade'
  },
  departamentos: [
    {
      nome: 'Vendas',
      telefone: '(11) 3000-1001',
      email: 'vendas@ftsauto.com.br',
      responsavel: 'Carlos Silva'
    },
    {
      nome: 'Pós-Vendas',
      telefone: '(11) 3000-1002',
      email: 'posvenda@ftsauto.com.br',
      responsavel: 'Maria Santos'
    },
    {
      nome: 'Financeiro',
      telefone: '(11) 3000-1003',
      email: 'financeiro@ftsauto.com.br',
      responsavel: 'João Costa'
    },
    {
      nome: 'Importação',
      telefone: '(11) 3000-1004',
      email: 'importacao@ftsauto.com.br',
      responsavel: 'Ana Silva'
    }
  ],
  redesSociais: {
    instagram: '@ftsauto_oficial',
    facebook: 'FTSAuto Carros de Luxo',
    youtube: 'FTSAuto Channel',
    linkedin: 'FTSAuto'
  },
  servicos: [
    'Test Drive Agendado',
    'Avaliação de Veículos',
    'Financiamento e Consórcio',
    'Seguro Automotivo',
    'Manutenção Especializada',
    'Importação Exclusiva',
    'Personalização de Veículos'
  ]
};

module.exports = contato;
