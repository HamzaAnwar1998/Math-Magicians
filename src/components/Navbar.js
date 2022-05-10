/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Icon } from 'react-icons-kit';
import { menu } from 'react-icons-kit/feather/menu';
import './css/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className={toggle ? 'navbox expanded' : 'navbox'}>
      <div className="leftside">
        <h1>Math Magicians</h1>
      </div>
      <ul className={toggle ? 'rightside expanded' : 'rightside'}>
        <li className="links">
          <Link className="link" to="/">Home</Link>
        </li>
        <li className="links">
          <Link className="link" to="/calculator">Calculator</Link>
        </li>
        <li className="links">
          <Link className="link" to="/quote">Quote</Link>
        </li>
      </ul>
      <button type="button" className="toggle" onClick={handleToggle}>
        <Icon icon={menu} size={24} />
      </button>
    </nav>
  );
};

export default Navbar;
