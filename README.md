# API Estética (AV1) 

API simples em Node.js com Express para a primeira parte da AV1.

O objetivo é demonstrar conceitos básicos: projeto Node, ES Modules, Express, rotas GET/POST e manipulação de dados em memória.

Como executar

1. Instale dependências:

   npm install

2. Rode o servidor em modo desenvolvimento:

   npm run dev

   ou

   npm start

EndPoints

- GET / - retorna mensagem simples com status da API
- GET /tarefas - lista todas as tarefas (status 200)
- POST /tarefas - cria nova tarefa. Exemplo de corpo JSON:

  {
    "titulo": "Minha nova tarefa"
  }

Validações

- POST /tarefas exige o campo 'titulo' como string não vazia. Em caso de falta ou valor inválido, retorna 400 com JSON de erro.

O que aprendi

- Como inicializar um projeto Node com ES Modules
- Uso básico do Express (app, rotas, middleware express.json)
- Manipular arrays em memória e validar entrada do cliente

Observações

- Os dados ficam em memória: reiniciar o servidor reseta o array.
- Próxima etapa (AV2) vai evoluir essa API; por isso mantive o código simples e bem separado.


Exemplos de uso (curl)

- Listar tarefas (GET):

  curl -i http://localhost:3000/tarefas

- Criar tarefa (POST):

  curl -i -X POST http://localhost:3000/tarefas \
    -H "Content-Type: application/json" \
    -d '{"titulo": "Estudar para AV1"}'

Sugestões de commits

Use commits pequenos e descritivos. Exemplos:

- "inicial: criar estrutura do projeto"
- "adicionar: implementar GET /tarefas"
- "adicionar: implementar POST /tarefas e validação"
- "documentacao: adicionar README com instrucoes de execucao"

Boas práticas ao commitar:

- Faça commits por mudança lógica (não agrupe várias tarefas diferentes em um único commit).
- Use mensagens curtas e no imperativo, explicando a mudança.

