import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Search from './pages/searchFlights';
import TravelGuide from './pages/travelGuide';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/travelGuide" element={<TravelGuide />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;