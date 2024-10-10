import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

  /* from disable link after click */
const Navbar = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const closeMenu = () => {
    setIsChecked(false);
  };

  return (
    <nav>
      <div className="logo">
        <h2>Adarsh Chaudhary</h2>
      </div>

      <input type="checkbox" id="click" checked={isChecked} onChange={handleCheckboxChange} />
      <label htmlFor="click" className="menu-btn">
        <i className="fa-solid fa-bars"></i>
      </label>

      <ul className={isChecked ? "nav-links active" : "nav-links"}>
        <li>
          <Link to="/" className="nav-link" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/games" className="nav-link" onClick={closeMenu}>
            Register
          </Link>
        </li>
        <li>
          <Link to="/sponsors" className="nav-link" onClick={closeMenu}>
            Sponsors
          </Link>
        </li>
        <li>
          <Link to="/our-team" className="nav-link" onClick={closeMenu}>
            Our Team
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;