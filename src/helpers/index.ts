export enum TodoState {
  CREATED = "CREATED",
  DONE = "DONE",
  DOING = "DOING",
}

const STATE_MAPPER: Record<TodoState, string> = {
  [TodoState.CREATED]: "Créé",
  [TodoState.DONE]: "Fait",
  [TodoState.DOING]: "En cours",
};

export function stateToLabel(state: TodoState) {
  return STATE_MAPPER[state] || "";
}
