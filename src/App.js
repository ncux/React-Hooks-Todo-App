import React, { useState } from 'react';
import './App.css';
import Todo from './Todo';
import TodoForm from './Todo-form';

function App() {

  const [todos, setTodos] = useState([
    { title: 'title one', isDone: false },
    { title: 'title two', isDone: false },
    { title: 'title three', isDone: false },
    { title: 'title four', isDone: false }
  ]);

  const addTodo = title => {
    console.log(title);
    const newTodos = [...todos, {title}];
    setTodos(newTodos);
  };

  const doneWithTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
      <div className="app">
        <TodoForm addTodo={ addTodo } />

        <div className="todo-list">
          { todos.map((todo, index) => (
              <Todo key={ index } index={ index } todo={ todo } doneWithTodo={ doneWithTodo } deleteTodo={ deleteTodo } />
          )) }
        </div>

      </div>
  )
}



export default App;