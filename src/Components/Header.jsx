import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../Assets/images/logo.png'; 
import Navbar from './Navbar';

const HEADER_HEIGHT = 80; 

function Header() {
  const navigate = useNavigate();

  const handleNavigation = (id) => {
    navigate('/', { state: { scrollToId: id, offset: HEADER_HEIGHT } });
  };

  return (
    <nav className="navbar">
      <div className='top-bar'>
        <button id="logo "className="nav-link" onClick={() => handleNavigation('main')}>
          <img className='logo1' src={logo} alt="logo" />
        </button>
        <Navbar />
      </div>
    </nav>
  );
}

export default Header;
