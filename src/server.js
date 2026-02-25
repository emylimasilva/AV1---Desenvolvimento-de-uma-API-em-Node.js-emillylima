import express from "express";
import { listarTarefas, adicionarTarefa } from "./dados.js";

const app = express();
const PORTA = 3000;

app.use(express.json());

app.get("/tarefas", (req, res) => {
  const tarefas = listarTarefas();
  return res.status(200).json(tarefas);
});

app.post("/tarefas", (req, res) => {
  const { titulo } = req.body;

  if (!titulo || typeof titulo !== "string" || titulo.trim() === "") {
    return res.status(400).json({ erro: "Título é obrigatório e deve ser uma string não vazia." });
  }

  const nova = adicionarTarefa(titulo);
  console.log(`Tarefa criada: "${nova.titulo}" (id: ${nova.id})`);
  return res.status(201).json(nova);
});

app.get("/", (req, res) => {
  res.status(200).json({ mensagem: "API Estética rodando. Use /tarefas para listar e criar." });
});

app.listen(PORTA, () => {
  console.log(`Servidor rodando na porta ${PORTA} - Acesse http://localhost:${PORTA}`);
});
