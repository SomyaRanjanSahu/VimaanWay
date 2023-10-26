import React, { useState, useEffect } from "react";
import { vimaanway_backend } from "../../../declarations/vimaanway_backend";
import "../styles/flightDetails.css";

function FlightDetails() {
  const [showList, setShowList] = useState([]);

  useEffect(() => {
    async function fetchPlaneList() {
      const planeList = await vimaanway_backend.getFlights();
      setShowList(planeList);
    }
    fetchPlaneList();
  }, []);

  return (
    <div id="flightDetails-container">
      <div>
        <h1>Available Flights ✈️</h1>
      </div>
      <div className="detail-lists">
        <ol>
          {showList.map((item, index) => (
            <li key={index}>{item}
            <button className="book-ticket-button">Book Ticket</button></li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default FlightDetails;