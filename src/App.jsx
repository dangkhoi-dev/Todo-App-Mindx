import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';
import Tabs from './Components/Tabs';

function App() {
  const location = useLocation();
  const [todos, setTodos] = useState([
    { id: 1, text: 'Do coding challenges', active: true },
    { id: 2, text: 'Do coding challenges', active: true },
    { id: 3, text: 'Do-coding-challenges', active: false },
  ]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(), 
      text: text,
      active: true,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, active: !todo.active } : todo
      )
    );
  };

  const deleteCompleted = () => {
    setTodos(todos.filter(todo => todo.active));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  const hasCompletedTodos = todos.some(todo => !todo.active);

  return (
    <div className="todo-app">
      <h1 className="title">#todo</h1>

      <Tabs />
      
      {/* Chỉ hiển thị form Add khi không ở tab 'Completed' */}
      {location.pathname !== '/completed' && <TodoForm addTodo={addTodo} />}

      <Routes>
        <Route path="/*" element={<TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} deleteCompleted={deleteCompleted} hasCompletedTodos={hasCompletedTodos} />} />
        <Route path="/active" element={<TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} deleteCompleted={deleteCompleted} hasCompletedTodos={hasCompletedTodos} />} />
        <Route path="/completed" element={<TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} deleteCompleted={deleteCompleted} hasCompletedTodos={hasCompletedTodos} />} />
      </Routes>
    </div>
  );
}

export default App;