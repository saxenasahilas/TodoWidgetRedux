import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Todo from './components/Todo';
import ClearTodos from './components/Cleartodos';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="todo-container">
          <p class="todo-title">Todo</p>
            <select className="date-dropdown" >
              <option> Today </option>
            </select>
            <ClearTodos />
          <Todo />
        </div>
      </div>
    </Provider>
  );
}

export default App;
