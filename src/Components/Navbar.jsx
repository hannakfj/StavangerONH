import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const HEADER_HEIGHT = 80;

function Navbar() {
  const navigate = useNavigate();

  const handleNavigation = (id) => {
    navigate('/', { state: { scrollToId: id, offset: HEADER_HEIGHT } });
  };

  return (
    <div className='nav_menu' id='nav-menu'>
      <ul className='nav-list'>
        <li className='nav-item'>
          <button className="nav-link" onClick={() => handleNavigation('treatments')}>Behandlingstilbud</button>
        </li>
        <li className='nav-item'>
          <button className="nav-link" onClick={() => handleNavigation('referral')}>Henvisning</button>
        </li>
        <li className='nav-item'>
          <button className="nav-link" onClick={() => handleNavigation('employees')}>Ansatte</button>
        </li>
        <li className='nav-item'>
          <button className="nav-link" onClick={() => handleNavigation('contact')}>Kontakt oss</button>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
