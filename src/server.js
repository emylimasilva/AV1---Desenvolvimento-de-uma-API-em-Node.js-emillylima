import express from "express";
import { listarProcedimentos, buscarProcedimento, adicionarProcedimento, removerProcedimento } from "./dados.js";

const app = express();
const PORTA = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).json({
    mensagem: "API Procedimentos de Estética funcionando",
    autor: "Emilly Lima",
    github: "https://github.com/emylimasilva/AV1---Desenvolvimento-de-uma-API-em-Node.js-emillylima"
  });
});

app.get("/procedimentos", (req, res) => {
  return res.status(200).json(listarProcedimentos());
});

app.get("/procedimentos/:id", (req, res) => {
  const id = Number(req.params.id);
  const procedimento = buscarProcedimento(id);

  if (!procedimento) {
    return res.status(404).json({ erro: "Procedimento não encontrado." });
  }

  return res.status(200).json(procedimento);
});

app.post("/procedimentos", (req, res) => {
  const { nome, area, materiais, valor } = req.body;

  if (!nome || typeof nome !== "string" || nome.trim() === "") {
    return res.status(400).json({ erro: "Nome é obrigatório." });
  }

  if (!area || typeof area !== "string" || area.trim() === "") {
    return res.status(400).json({ erro: "Área é obrigatória." });
  }

  if (valor == null || typeof valor !== "number" || valor <= 0) {
    return res.status(400).json({ erro: "Valor deve ser um número maior que zero." });
  }

  const novo = adicionarProcedimento({ nome, area, materiais, valor });
  return res.status(201).json(novo);
});

app.delete("/procedimentos/:id", (req, res) => {
  const id = Number(req.params.id);
  const ok = removerProcedimento(id);

  if (!ok) {
    return res.status(404).json({ erro: "Procedimento não encontrado." });
  }

  return res.status(200).json({ mensagem: "Procedimento removido com sucesso." });
});

app.get('/sobre', (req, res) => {
  return res.status(200).json({
    nome: 'Emilly Lima',
    descricao: 'Aluno do ensino médio - trabalho AV1',
    github: 'https://github.com/emylimasilva/AV1---Desenvolvimento-de-uma-API-em-Node.js-emillylima'
  });
});

app.listen(PORTA, () => {
  console.log(`Servidor rodando na porta ${PORTA} - Desenvolvido por Emilly Lima (https://github.com/emylimasilva)`);
});