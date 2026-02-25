// dados.js
// Array em memória com tarefas iniciais e funções simples para manipulação.
// Mantemos tudo em memória conforme requisito da AV1 (sem banco de dados).
// Comentários explicam escolhas de forma direta, para parecer mais 'humano'.

const tarefas = [
  { id: 1, titulo: "Estudar Node", concluida: false },
  { id: 2, titulo: "Fazer telas no Figma", concluida: true }
];

// Retorna o array de tarefas (não faz cópia profunda por simplicidade).
export function listarTarefas() {
  return tarefas;
}

// Adiciona uma tarefa com id incremental e retorna o objeto criado.
// A geração de id usa o maior id atual + 1 — simples e suficiente para este exercício.
export function adicionarTarefa(titulo) {
  const novoId = tarefas.length ? Math.max(...tarefas.map(t => t.id)) + 1 : 1;
  const nova = { id: novoId, titulo: titulo.trim(), concluida: false };
  tarefas.push(nova);
  return nova;
}

export default tarefas;
