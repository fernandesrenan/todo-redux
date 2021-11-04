import { ADD_TODO, TOGGLE_TODO } from "../actions";

function reducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, checked: !todo.checked } : todo
      );
    default:
      return state;
  }
}

export default reducer;
