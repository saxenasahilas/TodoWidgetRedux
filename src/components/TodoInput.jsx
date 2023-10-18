import React, { useState } from 'react';

const TodoInput = ({ addTodo }) => {
  // Initialize state for the newTodo input field
  const [newTodo, setNewTodo] = useState('');

  // Handle adding a new todo item
  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      // Call the 'addTodo' function and reset the input field
      addTodo(newTodo);
      setNewTodo('');
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      // Trigger the 'handleAddTodo' function when Enter key is pressed
      handleAddTodo();
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="New Todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyPress={handleKeyPress} // Call 'handleKeyPress' on keypress event
      />
    </div>
  );
};

export default TodoInput;
