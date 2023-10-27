import React, { useEffect, useState } from 'react';
import '../styles/searchFlights.css';
import Navbar from '../components/navbar';
import FlightDetails from '../components/flightDetails';
import { vimaanway_backend } from '../../../declarations/vimaanway_backend';

function Search() {
  const [originValue, setOriginValue] = useState('');
  const [destinationValue, setDestinationValue] = useState('');
  const [departDateValue, setDepartDateValue] = useState('');
  const [returnDateValue, setReturnDateValue] = useState('');
  const [tripTypeValue, setTripTypeValue] = useState('');
  const [travelersValue, setTravelersValue] = useState();

  useEffect(() => {
    // Inside the useEffect, updating the state variables
    const fetchData = async () => {
      setOriginValue(await vimaanway_backend.printOrigin());
      setDestinationValue(await vimaanway_backend.printDestination());
      setDepartDateValue(await vimaanway_backend.printDepartDate());
      setReturnDateValue(await vimaanway_backend.printReturnDate());
      setTripTypeValue(await vimaanway_backend.printTripType());
      setTravelersValue((await vimaanway_backend.printTravellers()).toString());
    };

    fetchData();
  }, []);

  return (
    <div id="search-container">
      <Navbar />

      <div id="searchFlight-content">
        <table>
          <tbody>
            <tr>
              <td> <b>Origin place :</b> <br />{originValue}</td>
              <td> <b>Destination :</b> <br />{destinationValue}</td>
              <td> <b>Depart Date :</b> <br /> {departDateValue}</td>
              <td> <b>Return Date :</b> <br /> {tripTypeValue === 'Two Way' ? returnDateValue : 'NA'}</td>
            </tr>
            <tr>
              <td colSpan="2"><b>People travelling :</b> {travelersValue}</td>
              <td colSpan="2"><b>Trip type :</b> {tripTypeValue}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <FlightDetails />
    </div>
  );
}

export default Search;
