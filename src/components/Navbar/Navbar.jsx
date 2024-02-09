import React, {useContext} from 'react';
import './navbar.css';
import { Link } from "react-router-dom";
import { UserContext } from '../../main';

export default function Navbar() {
  const {state, actions} = useContext(UserContext);
  return (
    <div className='navbar-container'>
      <ul>
        <li><Link className='nav-link' to="/">Home</Link></li>
        <li><Link className='nav-link' to="/todos">ToDo</Link></li>
        <li><Link className='nav-link' to="/login">{state.user ? "User" : "Login"}</Link></li>
      </ul>
    </div>
  );
}
