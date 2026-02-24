# av1_emilly

Projeto simples de API Node.js + Express

Como rodar:

1. Instale dependências:

   npm install

2. Rode o servidor:

   npm run dev

Rotas:

- GET / -> health check
- GET /items -> lista itens
- GET /items/:id -> obtém item por id
- POST /items -> cria item { name: string, quantity?: number }

Publicar no GitHub:

1. git init
2. git add .
3. git commit -m "initial commit"
4. git branch -M main
5. crie um repositório no GitHub e copie a URL
6. git remote add origin <URL>
7. git push -u origin main
