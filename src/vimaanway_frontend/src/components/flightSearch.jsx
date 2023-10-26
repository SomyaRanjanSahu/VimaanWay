import React, { useState } from 'react';
import '../styles/flightSearch.css';
import { useNavigate } from 'react-router-dom';
const FlightSearchForm = () => {
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [departDate, setDepartDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [travelers, setTravelers] = useState('');
    const [travelCategory, setTravelCategory] = useState('');
    const [fareTypes, setFareTypes] = useState({
        oneWay: false,
        twoWay: false,
    });

    const handleFareTypeChange = (fareType) => {
        setFareTypes({ ...fareTypes, [fareType]: !fareTypes[fareType] });
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(origin && destination && departDate) {
            navigate("./search");
        } else {
            alert("fill in the 'Origin' & 'Destination' fields");
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
                                        type="checkbox"
                                        checked={fareTypes.oneWay}
                                        onChange={() => handleFareTypeChange('oneWay')}
                                    />
                                    &nbsp;&nbsp;One Way Trip
                                </label>
                            </td>
                            <td>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={fareTypes.twoWay}
                                        onChange={() => handleFareTypeChange('twoWay')}
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
                                    onChange={(e) => setDepartDate(e.target.value)}
                                />
                            </td>
                            <td className="right-data">
                                <label htmlFor="">Return Date</label>
                                {fareTypes.twoWay && (

                                    <input
                                        type="date"
                                        placeholder="Return Date"
                                        value={returnDate}
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
                                    value={travelers}
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
