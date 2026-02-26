# API Procedimentos de Estética (AV1)

API simples em Node.js com Express para gerenciar procedimentos de estética.

Feito por Emilly Lima - Aluna do ensino médio

Como executar

1. Instale dependências:

   npm install

2. Rode o servidor:

   npm run dev

Endpoints

- GET / - retorna mensagem de status (200) e dados do autor
- GET /procedimentos - lista todos os procedimentos (200)
- GET /procedimentos/:id - retorna procedimento por id (200) ou 404 se não existir
- POST /procedimentos - cria novo procedimento (201) ou 400 em caso de validação
- DELETE /procedimentos/:id - remove procedimento (200) ou 404 se não existir
- GET /sobre - informações do aluno

Exemplos (curl)

- Listar:

  curl -i http://localhost:3000/procedimentos

- Criar:

  curl -i -X POST http://localhost:3000/procedimentos \
    -H "Content-Type: application/json" \
    -d '{"nome":"Peeling","area":"Rosto","materiais":["Peeling químico"],"valor":150}'

Repositório

https://github.com/emylimasilva/AV1---Desenvolvimento-de-uma-API-em-Node.js-emillylima

Critérios atendidos

- Node com ES Modules
- Express instalado e usado
- Rotas GET, POST e DELETE implementadas
- Validação básica no POST
- Dados em memória
- Uso adequado de status HTTP

