const tarefas = [
  { id: 1, titulo: "Estudar Node", concluida: false },
  { id: 2, titulo: "Fazer telas no Figma", concluida: true }
];

export function listarTarefas() {
  return tarefas;
}

export function adicionarTarefa(titulo) {
  const novoId = tarefas.length ? Math.max(...tarefas.map(t => t.id)) + 1 : 1;
  const nova = { id: novoId, titulo: titulo.trim(), concluida: false };
  tarefas.push(nova);
  return nova;
}

export default tarefas;

export const procedimentos = [
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
    materiais: ["Fios de seda", "Cola para cílios"],
    valor: 200
  },
  {
    id: 4,
    nome: "Design de Sobrancelhas",
    area: "Sobrancelhas",
    materiais: ["Pinça", "Lápis de sobrancelha"],
    valor: 80
  }
];

export function listarProcedimentos() {
  return procedimentos;
}

export function buscarProcedimento(id) {
  return procedimentos.find(p => p.id === id);
}

export function adicionarProcedimento({ nome, area, materiais, valor }) {
  const novoId = procedimentos.length ? Math.max(...procedimentos.map(p => p.id)) + 1 : 1;
  const novoProcedimento = {
    id: novoId,
    nome: nome.trim(),
    area: area.trim(),
    materiais: Array.isArray(materiais) ? materiais : [],
    valor
  };
  procedimentos.push(novoProcedimento);
  return novoProcedimento;
}

export function removerProcedimento(id) {
  const index = procedimentos.findIndex(p => p.id === id);
  if (index === -1) return false;
  procedimentos.splice(index, 1);
  return true;
}
