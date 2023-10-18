import React from 'react';
import { clearTodos } from '../actions/todoActions';
import store from '../store';

const handleEllipsisClick = () => {
  // Clear any data or perform other clear actions
  // Update state variables as needed to clear data

  // Reset the state
  store.dispatch(clearTodos());
};

const TodoList = () => (
  <span className="ellipsis" onClick={handleEllipsisClick} title="Clear All Todos">
    …
  </span>
);

export default TodoList;
