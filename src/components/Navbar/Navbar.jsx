import React from 'react';
import './navbar.css';
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className='navbar-container'>
      <ul>
        <li><Link className='nav-link' to="/">Home</Link></li>
        <li><Link className='nav-link' to="/todos">ToDo</Link></li>
        <li><Link className='nav-link' to="/login">Login</Link></li>
      </ul>
    </div>
  );
}
