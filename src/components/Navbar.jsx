import React from "react";
import {NavLink} from 'react-router-dom';
import "../index.css";

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink className="nav-link active" to='/'>
            Active
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/'>
            Link
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/'>
            Link
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link disabled"
            to='/'
            tabindex="-1"
            aria-disabled="true"
          >
            Carol
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
