import { v4 as generateId } from "uuid";

export function addTodo(text) {
  return {
    type: "",
    payload: {
      id: generateId(),
      text,
    },
  };
}
