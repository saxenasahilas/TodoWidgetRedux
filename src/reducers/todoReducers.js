import * as actions from "../actions/todoActionTypes";

// Load state from localStorage
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('todoState');
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (error) {
    return undefined;
  }
};

// Save state to localStorage
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('todoState', serializedState);
  } catch (error) {
    // Handle any errors while saving
  }
};

// Initialize the Redux store with data from localStorage
const initialState = {
  todos: loadState()?.todos || [],
};

// Reducer to manage the to-do list state
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_TODO:
      const newTodo = { id: Date.now(), text: action.text, completed: false };
      const newTodos = [...state.todos, newTodo];
      saveState({ todos: newTodos });
      return { todos: newTodos };
    case actions.TOGGLE_TODO:
      const updatedTodos = state.todos.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
      saveState({ todos: updatedTodos });
      return { todos: updatedTodos };
    case actions.CLEAR_TODOS:
      saveState({ todos: [] });
      return { todos: [] };
    default:
      return state;
  }
};

export default todoReducer;
