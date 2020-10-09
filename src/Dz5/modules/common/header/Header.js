import React from 'react';
import './Header.css';
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="app-header">
      <div className="title">My Header</div>
      <nav className="nav">
        <ul>
          <li>
            <NavLink exact activeClassName='active'  to="/">Home</NavLink>
          </li>
          <li>
            <NavLink exact activeClassName='active' to="/about">About</NavLink>
          </li>
          <li>
            <NavLink exact activeClassName='active'  to="/users">Users</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
