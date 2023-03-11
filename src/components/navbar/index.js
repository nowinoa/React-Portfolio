import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

function Navbar() {
    return (
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 kllk">
      <li className="nav-item">
        <NavLink 
          to="/"
          end
          aria-current="page"
          className={({isActive}) => 
            isActive ? 'nav-link active' : 'nav-link'} 
          >Home</NavLink>
      </li>
      <li className="nav-item">
      <NavLink 
          to="/projects"
          end
          className={({isActive}) => 
            isActive ? 'nav-link active' : 'nav-link'} 
        >Projects</NavLink>
      </li>
      <li className="nav-item">
      <NavLink 
          to="/contact"
          end
          className={({isActive}) => 
            isActive ? 'nav-link active' : 'nav-link'} 
      >Contact</NavLink>
      </li>
    </ul>
    );
  }

export default Navbar;