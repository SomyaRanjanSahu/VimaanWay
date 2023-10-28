import React from 'react';
import { Link } from 'react-router-dom';
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
      <Link to="/getTicket">
        <button className="nav-button">Get ticket</button>
      </Link>
    </nav>
  );
}

export default Navbar;
