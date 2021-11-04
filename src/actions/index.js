import { v4 as generateId } from "uuid";

export const ADD_TODO = "ADD_TODO";

export function addTodo(text) {
  return {
    type: ADD_TODO,
    payload: {
      id: generateId(),
      text,
    },
  };
}
