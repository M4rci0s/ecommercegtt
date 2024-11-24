E-Commerce Dashboard
Este projeto é uma aplicação web para gerenciamento de um e-commerce. Ele inclui funcionalidades de autenticação de usuários, exibição de catálogo de produtos, gerenciamento de estoque para administradores, carrinho de compras e checkout.

Índice
Recursos
Tecnologias Utilizadas
Configuração do Projeto
Estrutura do Projeto
Funcionalidades
Autenticação e Cadastro de Usuários
Catálogo de Produtos e Pesquisa
Carrinho de Compras e Checkout
Gerenciamento de Produtos (Admin)
Como Contribuir
Licença
Recursos
Autenticação: Registro, login e controle de acesso via JWT.
Gestão de Produtos: Administradores podem adicionar, editar e excluir produtos.
Carrinho de Compras: Adição, remoção e revisão de itens no checkout.
Filtros e Pesquisa: Pesquisa por nome e descrição, filtros por categoria e faixa de preço.
Design Responsivo: Interface moderna e responsiva.
Tecnologias Utilizadas
Front-End
HTML5 e CSS3: Estrutura e estilos.
JavaScript: Manipulação dinâmica e interatividade.
Back-End
Node.js e Express.js: Para APIs e lógica de autenticação.
MongoDB: Banco de dados para armazenar usuários, produtos e pedidos.
Outras Tecnologias
JWT: Para autenticação segura.
Bcrypt: Para criptografia de senhas.
Fetch API: Para comunicação com o back-end.
Configuração do Projeto
Pré-requisitos
Certifique-se de que você tem o seguinte instalado:

Node.js (v14 ou superior)
MongoDB
Passo a Passo
Clone o repositório:

bash
Copiar código
git clone https://github.com/seu-usuario/e-commerce-dashboard.git
cd e-commerce-dashboard
Instale as dependências do back-end:

bash
Copiar código
cd backend
npm install
Configure as variáveis de ambiente no arquivo .env:

env
Copiar código
PORT=5000
JWT_SECRET=sua_chave_secreta
MONGO_URI=sua_conexao_mongodb
Inicie o servidor:

bash
Copiar código
npm start
Abra o front-end:

Navegue para a pasta do front-end e abra o arquivo index.html no navegador ou configure um servidor local para servir os arquivos.
Estrutura do Projeto
bash
Copiar código
e-commerce-dashboard/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
├── frontend/
│   ├── index.html
│   ├── styles.css
│   └── script.js
└── README.md
Funcionalidades
Autenticação e Cadastro de Usuários
Cadastro de usuários com roles: Cliente ou Administrador.
Login e logout com autenticação via JWT.
Controle de acesso com middleware no back-end.
Catálogo de Produtos e Pesquisa
Exibição de produtos com nome, descrição, preço e disponibilidade.
Filtros por categoria e faixa de preço.
Campo de pesquisa com busca dinâmica por nome ou descrição.
Carrinho de Compras e Checkout
Adicionar e remover itens do carrinho.
Revisar itens antes de finalizar a compra.
Registro de pedidos associados ao usuário autenticado.
Gerenciamento de Produtos (Admin)
Administradores podem:
Adicionar novos produtos.
Atualizar informações de produtos existentes.
Gerenciar o estoque.
Como Contribuir
Faça um fork do repositório.
Crie um branch para sua feature:
bash
Copiar código
git checkout -b minha-feature
Faça commit das suas alterações:
bash
Copiar código
git commit -m "Adicionei nova funcionalidade"
Envie para o branch:
bash
Copiar código
git push origin minha-feature
Abra um Pull Request.
