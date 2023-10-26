import React from 'react';
import '../styles/searchFlights.css';
import Navbar from '../components/navbar';
import FlightDetails from '../components/flightDetails';

function Search() {
  return (
    <div id="search-container">
      <Navbar />

      <div id="searchFlight-content">
        <form action="">
          <table>
            <tbody>
              <tr>
                <td>Origin place : Delhi (DEL)</td>
                <td>Destination : Bhubaneswar (BBI)</td>
                <td>Depart Date : 12/05/2023</td>
                <td>Return Date : 01/03/2024</td>
              </tr>
              <tr>
                <td colspan="2">Trip type : Two Way</td>
                <td colspan="2">Fare type : Student</td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
      
      < FlightDetails />      

    </div>
  );
}

export default Search;