import React from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from '../actions/todoActions';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

// Define the Todo component, which represents the main application.
const Todo = ({ todos, addTodo, toggleTodo }) => (
  <div>
    {/* Render the TodoList component with the list of todos and toggleTodo action */}
    <TodoList todos={todos} toggleTodo={toggleTodo} />
    
    {/* Render the TodoInput component with the addTodo action */}
    <TodoInput addTodo={addTodo} />
  </div>
);

// Define the mapStateToProps function to connect the state to the Todo component.
const mapStateToProps = (state) => ({
  todos: state.todos,
});

// Define the mapDispatchToProps object to connect actions to the Todo component.
const mapDispatchToProps = {
  addTodo,
  toggleTodo,
};

// Connect the Todo component to the Redux store using mapStateToProps and mapDispatchToProps.
export default connect(mapStateToProps, mapDispatchToProps)(Todo);
