import React, { useState } from 'react';
import './App.css';
import logo from './img/logoWhite.png';
import ReactPlayer from 'react-player'; // ReactPlayer 가져오기
import video from './video/test1.mp4';
import menuIcon from './img/menu.png'; // 이미지 경로에 맞게 변경

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="HYOSUNG INC Logo" className="logo" />
          <span className="company-name">DH TEXTILE</span>
        </div>
        <nav className="navbar">
          <img
            src={menuIcon}
            alt="Menu Icon"
            className="menu-icon"
            onClick={toggleMenu}
          />
          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <li>Product</li>
            <li>DarkEden</li>
            <li>Softon</li>
          </ul>
        </nav>
      </header>
      <main className="hero">
        <video className='video-bg' autoPlay loop muted>
          <source src={video} type='video/mp4' />
        </video>
        <div className="hero-content">
          <p>Fiber is a versatile material that plays a crucial role in various industries, from textiles to advanced technology</p>
          <p>DarkEden Classic Open Prayer Day 1</p>
          <h2>sample</h2>
        </div>
      </main>
    </div>
  );
}

export default App;