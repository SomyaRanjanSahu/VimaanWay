import React from 'react';
import '../styles/home.css';
import Navbar from '../components/navbar';
import FlightSearchForm from '../components/flightSearch';

function Home() {
  return (
    <div id="container">
      <Navbar />
      <div id="content">
        <div id="tagline">
          <h1>The right way, <span>Vimaan</span> Way</h1>
          <p>Every Journey Begins with a Single Step, or in Our Case, a Single Click - Book Your Flight Today and Begin Your Adventure with Us!</p>
        </div>
        <div id="image">
          <img src="plane.png" alt="Image" />
        </div>
      </div>
      <FlightSearchForm />
    </div>
  );
}

export default Home;