import React from 'react';
import '../styles/getTicket.css';
import Navbar from '../components/navbar';

function FlightTicket() {
    return (
        <div id="getTicket-container">
            <Navbar />
            <div id="getImage-container">
                <div id="getImage-img">
                    <img src="ticket.png" alt="" classname="get-img" />
                </div>
                <div id="getImage-box">
                    <h2 className="getImage-heading">Check your <span>ticket</span> now</h2>
                    <input type="number" name="ticketNumber" id="" placeholder="Enter ticket number" />
                    <button type="submit">Get ticket </button>
                </div>
            </div>
            <h2 className="getTicket-h2">Here is your ticket ⬇️</h2>
        </div>

    );
}

export default FlightTicket;