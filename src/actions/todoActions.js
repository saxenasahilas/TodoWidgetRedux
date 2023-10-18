import * as actions from "./todoActionTypes"

export const addTodo = (text) => ({
  type: actions.ADD_TODO,
  text,
});
  
export const toggleTodo = (id) => ({
  type: actions.TOGGLE_TODO,
  id,
});

export const clearTodos = () => ({
  type: actions.CLEAR_TODOS
});
  