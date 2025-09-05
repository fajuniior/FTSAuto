const lojas = [
  {
    id: 1,
    nome: 'FTSAuto São Paulo - Matriz',
    endereco: 'Av. Paulista, 1000 - Bela Vista, São Paulo - SP',
    cep: '01310-100',
    telefone: '(11) 3000-1000',
    email: 'saopaulo@ftsauto.com.br',
    horario: 'Segunda a Sexta: 9h às 19h | Sábado: 9h às 17h',
    gerente: 'Carlos Silva',
    especialidades: ['BMW', 'Mercedes-Benz', 'Audi'],
    servicos: [
      'Vendas de veículos novos e usados',
      'Financiamento e consórcio',
      'Test drive agendado',
      'Avaliação de veículos',
      'Pós-venda e garantia'
    ],
    imagem: '/images/loja-sao-paulo.jpg'
  },
  {
    id: 2,
    nome: 'FTSAuto Rio de Janeiro',
    endereco: 'Av. Atlântica, 500 - Copacabana, Rio de Janeiro - RJ',
    cep: '22070-000',
    telefone: '(21) 3000-2000',
    email: 'rio@ftsauto.com.br',
    horario: 'Segunda a Sexta: 9h às 19h | Sábado: 9h às 17h',
    gerente: 'Ana Costa',
    especialidades: ['Porsche', 'Lamborghini'],
    servicos: [
      'Vendas de superesportivos',
      'Importação exclusiva',
      'Test drive em pista',
      'Personalização de veículos',
      'Manutenção especializada'
    ],
    imagem: '/images/loja-rio.jpg'
  },
  {
    id: 3,
    nome: 'FTSAuto Brasília',
    endereco: 'SCS Quadra 1, Bloco A - Asa Sul, Brasília - DF',
    cep: '70300-500',
    telefone: '(61) 3000-3000',
    email: 'brasilia@ftsauto.com.br',
    horario: 'Segunda a Sexta: 9h às 19h | Sábado: 9h às 17h',
    gerente: 'Roberto Santos',
    especialidades: ['BMW', 'Audi', 'Mercedes-Benz'],
    servicos: [
      'Vendas executivas',
      'Leasing corporativo',
      'Frota empresarial',
      'Consultoria automotiva',
      'Seguro e proteção'
    ],
    imagem: '/images/loja-brasilia.jpg'
  }
];

module.exports = lojas;
