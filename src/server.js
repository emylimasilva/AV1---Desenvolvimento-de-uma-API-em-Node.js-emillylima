import express from "express";

const app = express();
const PORTA = 3000;

app.use(express.json());

const procedimentos = [
  {
    id: 1,
    nome: "Limpeza de Pele",
    area: "Rosto",
    materiais: ["Gel de limpeza", "Máscara facial", "Extrator"],
    valor: 120
  },
  {
    id: 2,
    nome: "Preenchimento Labial",
    area: "Lábios",
    materiais: ["Ácido hialurônico", "Anestésico tópico"],
    valor: 900
  },
  {
    id: 3,
    nome: "Extensão de Cílios",
    area: "Cílios",
    materiais: ["Fios sintéticos", "Cola específica"],
    valor: 250
  },
  {
    id: 4,
    nome: "Design de Sobrancelhas",
    area: "Sobrancelhas",
    materiais: ["Pinça", "Linha", "Henna"],
    valor: 80
  }
];


app.get("/procedimentos", (req, res) => {
  res.status(200).json(procedimentos);
});
app.post("/procedimentos", (req, res) => {
  const { nome, area, materiais, valor } = req.body;

  if (!nome || nome.trim() === "") {
    return res.status(400).json({ erro: "Nome é obrigatório." });
  }

  if (!area || area.trim() === "") {
    return res.status(400).json({ erro: "Área é obrigatória." });
  }

  if (!valor || valor <= 0) {
    return res.status(400).json({ erro: "Valor deve ser maior que zero." });
  }

  const novoProcedimento = {
    id: procedimentos.length + 1,
    nome,
    area,
    materiais: materiais || [],
    valor
  };

  procedimentos.push(novoProcedimento);

  res.status(201).json(novoProcedimento);
});

app.listen(PORTA, () => {
  console.log(`Servidor rodando na porta ${PORTA}`);
});