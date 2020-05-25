import React from "react";
import {NavLink} from 'react-router-dom';
import "../index.css";

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink className="nav-link active" to='/'>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/works'>
            Works
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/about'>
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to='/storytime'
          >
            StoryTime
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
