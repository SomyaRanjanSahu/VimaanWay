import React, { useState, useEffect } from "react";
import { vimaanway_backend } from "../../../declarations/vimaanway_backend";
import "../styles/flightDetails.css";
import TicketBookingModal from "./ticketBooking";

function FlightDetails() {
  const [showList, setShowList] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState("");

  useEffect(() => {
    async function fetchPlaneList() {
      const planeList = await vimaanway_backend.getFlights();
      setShowList(planeList);
    }
    fetchPlaneList();
  }, []);

  // Function to show the modal when "Book Ticket" is clicked
  const handleBookTicketClick = (flight) => {
    setSelectedFlight(flight);
    setModalVisible(true);
  };

  return (
    <div id="flightDetails-container">
      <div>
        <h1>Available Flights :</h1>
      </div>
      <div className="detail-lists">
        <ol>
          {showList.map((item, index) => (
            <li key={index}>
              ✈️ {item}
              <button
                className="book-ticket-button"
                onClick={() => handleBookTicketClick(item)} // Passing the flight data to the function
              >
                Book Ticket
              </button>
            </li>
          ))}
        </ol>
      </div>

      {/* Rendering the modal when isModalVisible is true */}
      {isModalVisible && (
        <TicketBookingModal
          onClose={() => setModalVisible(false)}
          selectedFlight={selectedFlight}
        />
      )}
    </div>
  );
}

export default FlightDetails;
