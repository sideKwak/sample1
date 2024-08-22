import React from 'react';
import './App.css';
import logo from './img/file.png';
import ReactPlayer from 'react-player'; // ReactPlayer 가져오기
import video from './video/test1.mp4';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="HYOSUNG INC Logo" />
        </div>
        <nav className="navbar">
          <ul className="nav-links">
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