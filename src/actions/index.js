import { v4 as generateId } from "uuid";

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export function addTodo(text) {
  return {
    type: ADD_TODO,
    payload: {
      id: generateId(),
      text,
      checked: false,
    },
  };
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    payload: id,
  };
}
