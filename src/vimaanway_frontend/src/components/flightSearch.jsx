import React, { useState } from 'react';
import '../styles/flightSearch.css';
import { useNavigate } from 'react-router-dom';
import { vimaanway_backend } from '../../../declarations/vimaanway_backend';

const FlightSearchForm = () => {
    //getting today's date
    const today = new Date().toISOString().split('T')[0];

    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [departDate, setDepartDate] = useState(today);
    const [returnDate, setReturnDate] = useState('');
    const [travellers, setTravelers] = useState(1);
    const [travelCategory, setTravelCategory] = useState('');
    const [fareTypes, setFareTypes] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Creating an array of promises for the asynchronous operations
        const promises = [];

        if (origin && destination && departDate) {
            promises.push(vimaanway_backend.setOrigin(origin));
            promises.push(vimaanway_backend.setDestination(destination));
            promises.push(vimaanway_backend.setDepartDate(departDate));
            promises.push(vimaanway_backend.setReturnDate(returnDate));
            promises.push(vimaanway_backend.setTravellers(parseInt(travellers)));
            promises.push(vimaanway_backend.setTripType(fareTypes));
        }

        // Waiting for all promises to complete
        await Promise.all(promises);

        // Checking if the required fields were filled
        if (origin && destination && departDate) {
            navigate("./search");
        } else {
            alert("Fill in the 'Origin' & 'Destination' fields");
        }
    };


    return (
        <div className="flight-search-form">
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label>
                                    <input
                                        type="radio"
                                        value="One Way"
                                        name="fareTypes"
                                        onChange={(e) => setFareTypes(e.target.value)}
                                    />
                                    &nbsp;&nbsp;One Way Trip
                                </label>
                            </td>
                            <td>
                                <label>
                                    <input
                                        type="radio"
                                        value="Two Way"
                                        name="fareTypes"
                                        onChange={(e) => setFareTypes(e.target.value)}
                                    />
                                    &nbsp;&nbsp;Two Way Trip
                                </label>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <input
                                    type="text"
                                    placeholder="Origin"
                                    value={origin}
                                    onChange={(e) => setOrigin(e.target.value)}
                                />
                            </td>
                            <td className="right-data">
                                <input
                                    type="text"
                                    placeholder="Destination"
                                    value={destination}
                                    onChange={(e) => setDestination(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="left-data">
                                <label htmlFor="">Depart Date</label>
                                <input
                                    type="date"
                                    placeholder="Depart Date"
                                    value={departDate}
                                    min={today}
                                    onChange={(e) => setDepartDate(e.target.value)}
                                />
                            </td>
                            <td className="right-data">
                                <label htmlFor="">Return Date</label>
                                {fareTypes === 'Two Way' && (

                                    <input
                                        type="date"
                                        placeholder="Return Date"
                                        value={returnDate}
                                        min={departDate}
                                        onChange={(e) => setReturnDate(e.target.value)}
                                    />
                                )}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    type="number"
                                    placeholder="Travellers"
                                    name="num" min="1" max="400"
                                    value={travellers}
                                    onChange={(e) => setTravelers(e.target.value)}
                                />
                            </td>
                            <td className="right-data">
                                <select
                                    value={travelCategory}
                                    placeholder="Travel Category"
                                    onChange={(e) => setTravelCategory(e.target.value)}
                                >
                                    <option value="economy">Economy</option>
                                    <option value="business">Premium economy</option>
                                    <option value="business">Business</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <label>
                                    <input type="checkbox" /> &nbsp;&nbsp;Regular&nbsp;&nbsp;&nbsp;&nbsp;
                                </label>
                                <label>
                                    <input type="checkbox" /> &nbsp;&nbsp;Armed Forces&nbsp;&nbsp;&nbsp;&nbsp;
                                </label>
                                <label>
                                    <input type="checkbox" /> &nbsp;&nbsp;Student&nbsp;&nbsp;&nbsp;&nbsp;
                                </label>
                                <label>
                                    <input type="checkbox" /> &nbsp;&nbsp;Senior Citizen&nbsp;&nbsp;&nbsp;&nbsp;
                                </label>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit" onClick={handleSubmit}>Search Flights </button>
            </form>
        </div>
    );
};

export default FlightSearchForm;
