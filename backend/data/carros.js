const carros = [
  {
    id: 1,
    marca: 'BMW',
    modelo: 'X6',
    ano: 2024,
    preco: 'R$ 850.000',
    categoria: 'SUV de Luxo',
    combustivel: 'Gasolina',
    potencia: '523 cv',
    aceleracao: '4.2s (0-100 km/h)',
    velocidadeMaxima: '250 km/h',
    cor: 'Preto Metálico',
    condicao: 'Novo',
    descricao: 'O BMW X6 combina a elegância de um cupê com a versatilidade de um SUV. Motor V8 biturbo de alta performance.',
    caracteristicas: [
      'Sistema de navegação BMW Live Cockpit Professional',
      'Bancos em couro Vernasca',
      'Sistema de som Harman Kardon',
      'Teto solar panorâmico',
      'Assistente de estacionamento'
    ],
    imagem: '/images/bmw-x6.jpg'
  },
  {
    id: 2,
    marca: 'Mercedes-Benz',
    modelo: 'GLE 400',
    ano: 2024,
    preco: 'R$ 720.000',
    categoria: 'SUV de Luxo',
    combustivel: 'Gasolina',
    potencia: '333 cv',
    aceleracao: '5.7s (0-100 km/h)',
    velocidadeMaxima: '240 km/h',
    cor: 'Branco Polar',
    condicao: 'Novo',
    descricao: 'Mercedes-Benz GLE 400 oferece conforto excepcional e tecnologia de ponta em um SUV elegante.',
    caracteristicas: [
      'Sistema MBUX com comando de voz',
      'Suspensão pneumática AIRMATIC',
      'Bancos com massagem',
      'Teto solar panorâmico',
      'Sistema de som Burmester'
    ],
    imagem: '/images/mercedes-gle400.jpg'
  },
  {
    id: 3,
    marca: 'Porsche',
    modelo: '911 Carrera GTS',
    ano: 2024,
    preco: 'R$ 1.200.000',
    categoria: 'Esportivo',
    combustivel: 'Gasolina',
    potencia: '480 cv',
    aceleracao: '3.3s (0-100 km/h)',
    velocidadeMaxima: '310 km/h',
    cor: 'Vermelho Guards',
    condicao: 'Novo',
    descricao: 'O icônico Porsche 911 Carrera GTS representa a perfeição em engenharia esportiva alemã.',
    caracteristicas: [
      'Motor boxer 6 cilindros biturbo',
      'Transmissão PDK de 8 velocidades',
      'Sistema de escape esportivo',
      'Suspensão PASM',
      'Freios cerâmicos PCCB'
    ],
    imagem: '/images/porsche-911-gts.jpg'
  },
  {
    id: 4,
    marca: 'Lamborghini',
    modelo: 'Gallardo',
    ano: 2012,
    preco: 'R$ 680.000',
    categoria: 'Superesportivo',
    combustivel: 'Gasolina',
    potencia: '560 cv',
    aceleracao: '3.4s (0-100 km/h)',
    velocidadeMaxima: '325 km/h',
    cor: 'Amarelo Midas',
    condicao: 'Usado',
    descricao: 'Lamborghini Gallardo usado em excelente estado. Um clássico superesportivo italiano.',
    caracteristicas: [
      'Motor V10 aspirado',
      'Tração integral',
      'Transmissão e-gear',
      'Suspensão magnética',
      'Interior em couro e Alcantara'
    ],
    imagem: '/images/lamborghini-gallardo.jpg'
  },
  {
    id: 5,
    marca: 'Audi',
    modelo: 'S3',
    ano: 2020,
    preco: 'R$ 280.000',
    categoria: 'Sedan Esportivo',
    combustivel: 'Gasolina',
    potencia: '310 cv',
    aceleracao: '4.8s (0-100 km/h)',
    velocidadeMaxima: '250 km/h',
    cor: 'Azul Navarra',
    condicao: 'Usado',
    descricao: 'Audi S3 usado, perfeito equilíbrio entre performance e praticidade no dia a dia.',
    caracteristicas: [
      'Motor TFSI 2.0 turbo',
      'Tração integral quattro',
      'Sistema Virtual Cockpit',
      'Bancos esportivos S',
      'Suspensão esportiva'
    ],
    imagem: '/images/audi-s3.jpg'
  },
  {
    id: 6,
    marca: 'Lamborghini',
    modelo: 'Huracán',
    ano: 2024,
    preco: 'R$ 2.800.000',
    categoria: 'Superesportivo',
    combustivel: 'Gasolina',
    potencia: '640 cv',
    aceleracao: '2.9s (0-100 km/h)',
    velocidadeMaxima: '325 km/h',
    cor: 'Verde Mantis',
    condicao: 'Novo',
    descricao: 'O mais novo Lamborghini Huracán representa o ápice da engenharia italiana em superesportivos.',
    caracteristicas: [
      'Motor V10 aspirado',
      'Tração integral',
      'Sistema ALA (Aerodinâmica Lamborghini Attiva)',
      'Modos de condução Anima',
      'Interior em fibra de carbono'
    ],
    imagem: '/images/lamborghini-huracan.jpg'
  }
];

module.exports = carros;

