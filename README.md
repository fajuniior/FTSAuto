# FTSAuto - Loja de Carros de Luxo

Uma aplicação web completa para uma loja de carros de luxo, desenvolvida com React + Vite no frontend e Node.js no backend.

## 👥 Integrantes do Projeto

- **Fábio Pereira Rogério Junior** (RM 564005)
- **Sebastian Iriarte Gonzales** (RM 563619)
- **Matheus Tonsa Martini** (RM 564454)
- **Kauã Veloso Lima** (RM 561954)
- **Arthur Albertini Soares Pereira** (RM 565954)

## 🚗 Sobre o Projeto

FTSAuto é uma plataforma digital para uma concessionária especializada em veículos de luxo e alta performance. O projeto apresenta uma interface moderna e elegante para exibir carros premium como BMW X6, Mercedes-Benz GLE 400, Porsche 911 Carrera GTS, Lamborghini Gallardo, Audi S3 e Lamborghini Huracán.

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Biblioteca de animações
- **React Router DOM** - Roteamento
- **Lucide React** - Ícones
- **shadcn/ui** - Componentes UI

### Backend
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **CORS** - Middleware para requisições cross-origin
- **Nodemon** - Ferramenta de desenvolvimento

## 📁 Estrutura do Projeto

```
FTSAuto/
├── backend/                 # Servidor Node.js
│   ├── data/               # Dados dos carros, lojas, etc.
│   ├── routes/             # Rotas da API
│   ├── server.js           # Arquivo principal do servidor
│   └── package.json        # Dependências do backend
├── frontend/               # Aplicação React
│   ├── public/             # Arquivos públicos
│   ├── src/                # Código fonte
│   │   ├── components/     # Componentes React
│   │   ├── pages/          # Páginas da aplicação
│   │   ├── assets/         # Imagens e recursos
│   │   └── App.jsx         # Componente principal
│   └── package.json        # Dependências do frontend
└── README.md               # Documentação
```

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou pnpm

### 1. Clone o repositório
```bash
git clone <url-do-repositorio>
cd FTSAuto
```

### 2. Instalar dependências do Backend
```bash
cd backend
npm install
```

### 3. Instalar dependências do Frontend
```bash
cd ../frontend
npm install
# ou
pnpm install
```

### 4. Executar o Backend
```bash
cd backend
npm run dev
```
O servidor estará rodando em `http://localhost:3001`

### 5. Executar o Frontend
```bash
cd frontend
npm run dev --host
# ou
pnpm run dev --host
```
A aplicação estará disponível em `http://localhost:5173`

## 📋 Funcionalidades

### 🏠 Página Inicial
- Hero section com slider de carros em destaque
- Seção de características da empresa
- Estatísticas da empresa
- Call-to-action para explorar carros

### 🚗 Página de Carros
- Listagem completa de veículos disponíveis
- Filtros por marca, categoria e condição (novo/usado)
- Cards informativos com especificações técnicas
- Integração com API para dados dinâmicos

### 🏢 Página de Lojas
- Informações das 3 lojas (São Paulo, Rio de Janeiro, Brasília)
- Dados de contato, horários e especialidades
- Informações sobre gerentes e serviços oferecidos

### ℹ️ Página Sobre
- História da empresa e marcos importantes
- Missão, visão e valores
- Informações da equipe
- Certificações e parcerias

### 📞 Página de Contato
- Formulário de contato funcional
- Informações de contato completas
- Departamentos especializados
- Redes sociais
- Horários de funcionamento

## 🎨 Design e Animações

O projeto utiliza um design moderno e elegante com:

- **Paleta de cores**: Preto, dourado e branco para transmitir luxo
- **Animações suaves**: Implementadas com Framer Motion
- **Responsividade**: Design adaptável para desktop e mobile
- **Efeitos visuais**: Hover effects, gradientes e transições
- **Tipografia**: Hierarquia clara e legibilidade otimizada

## 🔌 API Endpoints

### Carros
- `GET /api/carros` - Lista todos os carros
- `GET /api/carros/:id` - Busca carro por ID
- `GET /api/carros/categoria/:categoria` - Filtra por categoria
- `GET /api/carros/marca/:marca` - Filtra por marca

### Lojas
- `GET /api/lojas` - Lista todas as lojas
- `GET /api/lojas/:id` - Busca loja por ID
- `GET /api/lojas/cidade/:cidade` - Filtra por cidade

### Sobre
- `GET /api/sobre` - Informações da empresa
- `GET /api/sobre/empresa` - Dados básicos
- `GET /api/sobre/historia` - História da empresa
- `GET /api/sobre/equipe` - Informações da equipe

### Contato
- `GET /api/contato` - Informações de contato
- `POST /api/contato/mensagem` - Enviar mensagem

## 🎯 Características Técnicas

### Performance
- Lazy loading de componentes
- Otimização de imagens
- Minificação de código
- Cache de requisições

### Acessibilidade
- Navegação por teclado
- Contraste adequado
- Textos alternativos
- Estrutura semântica

### SEO
- Meta tags otimizadas
- Estrutura de URLs amigável
- Conteúdo estruturado
- Performance otimizada

## 🔧 Scripts Disponíveis

### Backend
```bash
npm start          # Inicia o servidor em produção
npm run dev        # Inicia o servidor em desenvolvimento
```

### Frontend
```bash
npm run dev        # Inicia o servidor de desenvolvimento
npm run build      # Gera build de produção
npm run preview    # Visualiza o build de produção
```

## 🌟 Destaques do Projeto

1. **Arquitetura Moderna**: Separação clara entre frontend e backend
2. **Design Responsivo**: Funciona perfeitamente em todos os dispositivos
3. **Animações Fluidas**: Experiência de usuário premium
4. **API RESTful**: Backend bem estruturado e documentado
5. **Código Limpo**: Organização e boas práticas de desenvolvimento
6. **Performance**: Otimizado para carregamento rápido

## 📱 Responsividade

O projeto foi desenvolvido com foco em responsividade, garantindo uma experiência consistente em:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎨 Paleta de Cores

- **Primária**: #000000 (Preto)
- **Secundária**: #FBBF24 (Dourado)
- **Accent**: #F59E0B (Dourado escuro)
- **Background**: #FFFFFF (Branco)
- **Text**: #1F2937 (Cinza escuro)

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais como parte de um trabalho acadêmico.

## 🤝 Contribuição

Este é um projeto acadêmico desenvolvido pelos integrantes listados acima. Para sugestões ou melhorias, entre em contato com a equipe.

---

**FTSAuto** - Excelência em Carros de Luxo 🚗✨

