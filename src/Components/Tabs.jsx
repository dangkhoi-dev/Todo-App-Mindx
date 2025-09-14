import React from 'react';
import { NavLink } from 'react-router-dom';

function Tabs() {
  return (
    <div className="tabs-container">
      <nav className="tabs">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>All</NavLink>
        <NavLink to="/active" className={({ isActive }) => (isActive ? 'active' : '')}>Active</NavLink>
        <NavLink to="/completed" className={({ isActive }) => (isActive ? 'active' : '')}>Completed</NavLink>
      </nav>
    </div>
  );
}

export default Tabs;