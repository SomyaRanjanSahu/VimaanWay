import React from 'react';
import '../styles/displayTicket.css';

function DisplayTicket() {
  return (
    <div className="displayTicket-container">
      <table id="flight-displayTicket">
        <tbody id="displayTicket-tableBody">
          <tr>
            <td className="left-column"><h2>E-Ticket</h2> Booking id : 21070280 <br /> Booked on : 28/10/2023</td>
            <td className="right-column"><h3 id="ticket-company">Vimaan<span id="ticket-company-span">Way</span></h3></td>
          </tr>
          <tr>
            <td colSpan='2'><hr /></td>
          </tr>
          <tr>
            <td className="left-column" colSpan="2"><p id="ticket-instruction">Any kind of explosive, infectious, flammable, toxic, corrosive or radioactive substances/materials are 'Dangerous Goods' &
              are prohibited from being carried in any hand baggage or check-in baggage. Kindly check the airline guidelines to ensure
              safe travel.</p></td>
          </tr>
          <tr>
            <td colSpan='2'><hr /></td>
          </tr>
          <tr>
            <td className="left-column"><h3>Flight from:</h3> Delhi</td>
            <td className="right-column"><h3>Flight to:</h3> Hyderabad</td>
          </tr>
          <tr>
            <td colSpan='2'><hr /></td>
          </tr>
          <tr>
            <td className="left-column"><h2> Air Asia (I5-712)</h2> Delhi, 08:20 <br /> 30/10/2023 <br /> Delhi airport, Termial 1</td>
            <td className="right-column"> <br />10:55, Hyderabad <br /> 30/10/2023 <br /> Hyderabad airport, Terminal 2</td>
          </tr>
          <tr>
            <td colSpan='2'><hr /></td>
          </tr>
          <tr>
            <td className="left-column"><h3>Traveller:</h3> Mr. Somya Ranjan Sahu 💺10F</td>
            <td className="right-column"><img className="displayTicket-image" src="qr.jpg" alt="" /></td>
          </tr>
          <tr>
            <td colSpan='2'><hr /></td>
          </tr>
          <tr>
            <td className="left-column">Baggage Allowance (per person)</td>
            <td className="right-column">Hand Baggage: 1 piece x 7 kg / person <br /> Check-in Baggage: 1 piece x 5 kg / person</td>
          </tr>
          <tr>
            <td colSpan='2'><hr /></td>
          </tr>
          <tr>
            <td className="left-column">Cancellation Fee (per person)</td>
            <td className="right-column">Airline Fee: 2-96 hrs ₹3,500 / person <br /> VimaanWay Fee: ₹299 / person</td>
          </tr>
          <tr>
            <h4 className="left-column">Important</h4>
            <ul className="left-column">
              <li>Displayed Airline cancellation fee is indicative. Cancellation charges may differ at the time of
                cancellation & will be charged as per actual.</li>
              <li> Convenience fee is non-refundable. Any cashback availed will be adjusted in final refund amount.</li>
            </ul>
          </tr>
          <tr>
            <td colSpan='2'><hr /></td>
          </tr>
          <tr>
            <td className="left-column">Reschedule Fee (per person)</td>
            <td className="right-column">Airline Fee: 2-96 hrs ₹3,250 <br /> VimaanWay Fee: ₹250</td>
          </tr>
          <tr>
            <h4 className="left-column">Important</h4>
            <ul className="left-column">
              <li>Customer will also have to bear the fare difference between the old and the new booking, if any.</li>
              <li>Airlines don't allow addition or removal of last name. However, they may allow corrections in spellings
                involving 1-2 characters. Please contact us to find out if modification is possible for your ticket.</li>
              <li>Please contact our customer care at 0120 4880880 to reschedule your booking.</li>
              <li>Airline fee shown is indicative, please check with the airline for the actual fare.</li>
            </ul>
          </tr>
          <tr>
            <td colSpan='2'><hr /></td>
          </tr>
          <tr>
            <td colSpan='2' style={{ color: '#464444' }} > VimaanWay pvt. ltd. , Jalandhar, Punjab - 144411, India </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DisplayTicket;
