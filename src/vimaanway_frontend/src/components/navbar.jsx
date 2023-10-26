import React from 'react';
import '../styles/navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="vimaanway"><div className="logo">Vimaan<span className="title-span">Way</span></div></a>      
      <ul className="nav-links">
        <li><a href="/travelGuide">Travel guide</a></li>
        <span className="partition">|</span>
        <li><a href="#">Enquire</a></li>
      </ul>
      <button className="nav-button">Get ticket</button>
    </nav>
  );
}

export default Navbar;
