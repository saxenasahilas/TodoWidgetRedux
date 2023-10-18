import React from 'react';

const TodoList = ({ todos, toggleTodo }) => (
  <div className='task-container'>
    {todos.map((todo) => (
      // Render each todo item with a unique key
      <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
        <input
          type='checkbox'
          checked={todo.completed}
          // Call 'toggleTodo' function with todo ID on checkbox change
          onChange={() => toggleTodo(todo.id)}
        />
        <p className={`task ${todo.completed ? 'task-completed' : ''}`}>
          {todo.text}
        </p>
      </div>
    ))}
  </div>
);

export default TodoList;
