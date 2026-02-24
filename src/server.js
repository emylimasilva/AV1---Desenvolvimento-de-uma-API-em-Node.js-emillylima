import express from 'express';

const app = express();
const PORTA = process.env.PORT || 3000;

app.use(express.json());

// Array em memória - procedimentos e produtos
const procedimentos = [
  { id: 1, categoria: 'Rosto', nome: 'Limpeza de Pele', duracaoMin: 60 },
  { id: 2, categoria: 'Cílios', nome: 'Extensão de Cílios', duracaoMin: 90 }
];

const produtos = [
  { id: 1, tipo: 'Lábios', nome: 'Balm Hidratante' },
  { id: 2, tipo: 'Sobrancelhas', nome: 'Gel Modelador' }
];

// Rotas procedimentos
app.get('/procedimentos', (req, res) => {
  res.status(200).json(procedimentos);
});

app.post('/procedimentos', (req, res) => {
  const { categoria, nome, duracaoMin } = req.body;

  if (!categoria || typeof categoria !== 'string' || categoria.trim() === '') {
    return res.status(400).json({ erro: 'Categoria é obrigatória e deve ser uma string.' });
  }
  if (!nome || typeof nome !== 'string' || nome.trim() === '') {
    return res.status(400).json({ erro: 'Nome é obrigatório e deve ser uma string.' });
  }
  if (duracaoMin !== undefined && (typeof duracaoMin !== 'number' || duracaoMin <= 0)) {
    return res.status(400).json({ erro: 'duracaoMin, se fornecido, deve ser um número positivo.' });
  }

  const novo = {
    id: procedimentos.length > 0 ? procedimentos[procedimentos.length - 1].id + 1 : 1,
    categoria: categoria.trim(),
    nome: nome.trim(),
    duracaoMin: duracaoMin ?? 30
  };

  procedimentos.push(novo);
  res.status(201).json(novo);
});

// Rotas produtos
app.get('/produtos', (req, res) => {
  res.status(200).json(produtos);
});

app.post('/produtos', (req, res) => {
  const { tipo, nome } = req.body;

  if (!tipo || typeof tipo !== 'string' || tipo.trim() === '') {
    return res.status(400).json({ erro: 'Tipo é obrigatório e deve ser uma string.' });
  }
  if (!nome || typeof nome !== 'string' || nome.trim() === '') {
    return res.status(400).json({ erro: 'Nome é obrigatório e deve ser uma string.' });
  }

  const novo = {
    id: produtos.length > 0 ? produtos[produtos.length - 1].id + 1 : 1,
    tipo: tipo.trim(),
    nome: nome.trim()
  };

  produtos.push(novo);
  res.status(201).json(novo);
});

// Health check
app.get('/', (req, res) => {
  res.send('API Estética rodando');
});

// Iniciar servidor
app.listen(PORTA, () => {
  console.log(`Servidor rodando na porta ${PORTA}`);
});
