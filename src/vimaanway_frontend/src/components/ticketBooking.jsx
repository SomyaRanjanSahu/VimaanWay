import React, { useState } from "react";
import "../styles/ticketBooking.css";

function TicketBookingModal({ onClose, selectedFlight }) {
    const [passengerName, setPassengerName] = useState("");
    const [passengerAge, setPassengerAge] = useState("");
    const [selectedSeat, setSelectedSeat] = useState("");
    const seatOptions = [
        "W-1A", "M-1B", "A-1C", "A-1D", "M-1E", "W-1F",
        "W-2A", "M-2B", "A-2C", "A-2D", "M-2E", "W-2F",
        "W-3A", "M-3B", "A-3C", "A-3D", "M-3E", "W-3F",
        "W-4A", "M-4B", "A-4C", "A-4D", "M-4E", "W-4F",
        "W-5A", "M-5B", "A-5C", "A-5D", "M-5E", "W-5F",
        "W-6A", "M-6B", "A-6C", "A-6D", "M-6E", "W-6F",
        "W-7A", "M-7B", "A-7C", "A-7D", "M-7E", "W-7F",
        "W-8A", "M-8B", "A-8C", "A-8D", "M-8E", "W-8F",
        "W-9A", "M-9B", "A-9C", "A-9D", "M-9E", "W-9F",
        "W-10A", "M-10B", "A-10C", "A-10D", "M-10E", "W-10F",
        "E-11A", "M-11B", "A-11C", "A-11D", "M-11E", "E-11F",
        "W-12A", "M-12B", "A-12C", "A-12D", "M-12E", "W-12F",
    ];

    const handleConfirm = () => {

        if (passengerName && passengerAge) {
            onClose();
        } else {
            alert("Please fill all the required fields!");
        }

    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Book Ticket</h2>
                <label><b>Flight Details:</b>  <br /> <br /> 🛩️ <span className="modal-flight-span">{selectedFlight}</span> </label>
                <label className="modal-label required-field">Traveller Name:</label>
                <input
                    type="text"
                    value={passengerName}
                    placeholder="Enter name"
                    onChange={(e) => setPassengerName(e.target.value)}
                />
                <label className="modal-label required-field">Traveller Age:</label>
                <input
                    type="number"
                    value={passengerAge}
                    placeholder="Enter age"
                    min="2" max="100"
                    onChange={(e) => setPassengerAge(e.target.value)}
                />
                <label className="modal-label">Select Seat:</label>
                <select
                    value={selectedSeat}
                    onChange={(e) => setSelectedSeat(e.target.value)}
                >
                    {seatOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                <div className="modal-buttons">
                    <button onClick={onClose}>Cancel</button>
                    <button onClick={handleConfirm}>Confirm</button>
                </div>
            </div>
        </div>
    );
}

export default TicketBookingModal;
