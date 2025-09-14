import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';

function TodoItem({ todo, toggleComplete, deleteTodo }) {
  const location = useLocation();
  const isCompletedPage = location.pathname === '/completed';

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={!todo.active}
        onChange={() => toggleComplete(todo.id)}
      />
      <span className={!todo.active ? 'completed' : ''}>
        {todo.text}
      </span>
      {isCompletedPage && (
        <button 
          onClick={() => deleteTodo(todo.id)} 
          className="delete-item-btn"
          title="Delete this task"
        >
          <FaTrash />
        </button>
      )}
    </div>
  );
}

export default TodoItem;