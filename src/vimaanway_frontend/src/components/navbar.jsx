import React from 'react';
import '../styles/navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Vimaan<span className="title-span">Way</span></div>
      <ul className="nav-links">
        <li><a href="/travelGuide">Travel guide</a></li>
        <span className="partition">|</span>
        <li><a href="#">Enquire</a></li>
      </ul>
      <button className="nav-button">Book ticket</button>
    </nav>
  );
}

export default Navbar;
