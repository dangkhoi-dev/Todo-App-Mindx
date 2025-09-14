import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import TodoItem from './ToItem';

function TodoList({ todos, toggleComplete, deleteTodo, deleteCompleted, hasCompletedTodos }) {
  const location = useLocation();

  const filteredTodos = useMemo(() => {
    switch (location.pathname) {
      case '/active':
        return todos.filter(todo => todo.active);
      case '/completed':
        return todos.filter(todo => !todo.active);
      default: 
        return todos;
    }
  }, [todos, location.pathname]);

  const isCompletedPage = location.pathname === '/completed';

  return (
    <div className="todo-list">
      {filteredTodos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
      {isCompletedPage && hasCompletedTodos && (
        <button onClick={deleteCompleted} className="delete-all-btn">
          <FaTrash />
          Delete all
        </button>
      )}
    </div>
  );
}

export default TodoList;