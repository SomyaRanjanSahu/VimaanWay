import React, { useState, useEffect } from 'react';
import '../styles/flightSearch.css';
import { useNavigate } from 'react-router-dom';
import { vimaanway_backend } from '../../../declarations/vimaanway_backend';

const FlightSearchForm = () => {
    //getting today's date
    const today = new Date().toISOString().split('T')[0];

    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [departDate, setDepartDate] = useState(today);
    const [returnDate, setReturnDate] = useState(today);
    const [travellers, setTravelers] = useState(1);
    const [travelCategory, setTravelCategory] = useState('');
    const [fareTypes, setFareTypes] = useState('');

    // Origin dropdown suggestions
    const [originSuggestions, setOriginSuggestions] = useState([]);
    const [isOriginDropdownOpen, setOriginDropdownOpen] = useState(false);

    // Destination dropdown suggestions
    const [destinationSuggestions, setDestinationSuggestions] = useState([]);
    const [isDestinationDropdownOpen, setDestinationDropdownOpen] = useState(false);

    // No origin airport found
    const [noOriginAirFn, setNoOriginAirFn] = useState(false);

    // No destination airport found
    const [noDestAirFn, setNoDestAirFn] = useState(false);

    useEffect(() => {
        const airports = ['Bangalore', 'Bhubaneswar', 'Chennai', 'Delhi', 'Hyderabad', 'Kolkata', 'Mumbai'];

        const filteredOriginSuggestions = airports.filter(airports => airports.toLowerCase().includes(origin.toLowerCase()));
        const filteredDestinationSuggestions = airports.filter(airports => airports.toLowerCase().includes(destination.toLowerCase()));

        if (filteredOriginSuggestions.length === 0) {
            setNoOriginAirFn(true);
        } else {
            setNoOriginAirFn(false);
        }

        if (filteredDestinationSuggestions.length === 0) {
            setNoDestAirFn(true);
        } else {
            setNoDestAirFn(false);
        }
        setOriginSuggestions(filteredOriginSuggestions);
        setDestinationSuggestions(filteredDestinationSuggestions);

    }, [origin, destination]);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Creating an array of promises for the asynchronous operations
        const promises = [];

        promises.push(vimaanway_backend.setOrigin(origin));
        promises.push(vimaanway_backend.setDestination(destination));
        promises.push(vimaanway_backend.setDepartDate(departDate));
        promises.push(vimaanway_backend.setReturnDate(returnDate));
        promises.push(vimaanway_backend.setTravellers(parseInt(travellers)));
        promises.push(vimaanway_backend.setTripType(fareTypes));

        // Waiting for all promises to complete
        await Promise.all(promises);

        // Checking if the required fields were filled
        if (origin == destination) {
            alert("Origin and destination cannot be the same!");
        }
        else if (origin && destination && fareTypes && !noOriginAirFn && !noDestAirFn) {
            navigate("./search");
        }
        else {
            alert("Please fill all the required fields!");
        }
    };


    return (
        <div className="flight-search-form">
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td className="required-field">
                                Trip type →
                            </td>
                            <td>
                                <label className="td-background radio-background1">
                                    <input
                                        type="radio"
                                        value="One Way"
                                        name="fareTypes"
                                        onChange={(e) => setFareTypes(e.target.value)}
                                    />
                                    &nbsp;&nbsp;One Way
                                </label>
                                <label className="td-background radio-background2">
                                    <input
                                        type="radio"
                                        value="Two Way"
                                        name="fareTypes"
                                        onChange={(e) => setFareTypes(e.target.value)}
                                    />
                                    &nbsp;&nbsp;Two Way
                                </label>
                            </td>

                        </tr>
                        <tr>
                            <td className="left-data">
                                <label htmlFor="" className="required-field">From :</label>
                                <div style={{ position: 'relative' }}>
                                    <input
                                        type="text"
                                        placeholder="Origin"
                                        value={origin}
                                        onChange={(e) => {
                                            setOrigin(e.target.value);
                                            setOriginDropdownOpen(true);
                                        }}
                                        onFocus={() => setOriginDropdownOpen(true)}
                                    />
                                    {origin && isOriginDropdownOpen && (originSuggestions.length > 0 || noOriginAirFn) && (
                                        <div style={{ position: 'absolute', top: '100%', left: 0, zIndex: 1, backgroundColor: '#f7efeb', border: '2px solid #333', width: '200px', borderRadius: '10px' }}>
                                            {noOriginAirFn ? (<p style={{ padding: '8px' }} >No Airport Found </p>) : (
                                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                                    {originSuggestions.map((item, index) => (
                                                        <li
                                                            key={index}
                                                            onClick={() => {
                                                                setOrigin(item);
                                                                setOriginDropdownOpen(false);
                                                            }}
                                                            style={{ padding: '8px', cursor: 'pointer', }}
                                                            onMouseEnter={(e) => {
                                                                e.target.style.backgroundColor = '#d6c1b8'; // Change to your desired hover color
                                                            }}
                                                            onMouseLeave={(e) => {
                                                                e.target.style.backgroundColor = '#f7efeb'; // Revert to the original color on mouse leave
                                                            }}
                                                        >
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </td>
                            <td className="left-data">
                                <label htmlFor="" className="required-field">To :</label>
                                <div style={{ position: 'relative' }}>
                                    <input
                                        type="text"
                                        placeholder="Destination"
                                        value={destination}
                                        onChange={(e) => {
                                            setDestination(e.target.value);
                                            setDestinationDropdownOpen(true);
                                        }}
                                        onFocus={() => setDestinationDropdownOpen(true)}
                                    />
                                    {destination && isDestinationDropdownOpen && (destinationSuggestions.length > 0 || noDestAirFn) && (
                                        <div style={{ position: 'absolute', top: '100%', left: 0, zIndex: 1, backgroundColor: '#f7efeb', border: '2px solid #333', width: '200px', borderRadius: '10px' }}>
                                            {noDestAirFn ? (<p style={{ padding: '8px' }} >No Airport Found </p>) : (
                                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                                    {destinationSuggestions.map((item, index) => (
                                                        <li
                                                            key={index}
                                                            onClick={() => {
                                                                setDestination(item);
                                                                setDestinationDropdownOpen(false);
                                                            }}
                                                            style={{ padding: '8px', cursor: 'pointer', }}
                                                            onMouseEnter={(e) => {
                                                                e.target.style.backgroundColor = '#d6c1b8'; // Change to your desired hover color
                                                            }}
                                                            onMouseLeave={(e) => {
                                                                e.target.style.backgroundColor = '#f7efeb'; // Revert to the original color on mouse leave
                                                            }}
                                                        >
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="left-data">
                                <label htmlFor="">Depart Date :</label>
                                <input
                                    type="date"
                                    placeholder="Depart Date"
                                    value={departDate}
                                    min={today}
                                    onChange={(e) => setDepartDate(e.target.value)}
                                />
                            </td>
                            <td className="left-data">
                                {fareTypes === 'Two Way' && (
                                    <label htmlFor="returnDate">Return Date :</label>
                                )}
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
                            <td className="left-data">
                                <label htmlFor="">Travellers :</label>
                                <input
                                    type="number"
                                    placeholder="Travellers"
                                    name="num" min="1" max="400"
                                    value={travellers}
                                    onChange={(e) => setTravelers(e.target.value)}
                                />
                            </td>
                            <td className="left-data">
                                <label htmlFor="">Travel category :</label>
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
                                <label className="td-background checkbox-label checkbox-label1">
                                    <input type="radio" name="travelCategory" /> &nbsp;&nbsp;Regular&nbsp;&nbsp;&nbsp;&nbsp;
                                </label>
                                <label className="td-background checkbox-label">
                                    <input type="radio" name="travelCategory" /> &nbsp;&nbsp;Armed Forces&nbsp;&nbsp;&nbsp;&nbsp;
                                </label>
                                <label className="td-background checkbox-label">
                                    <input type="radio" name="travelCategory" /> &nbsp;&nbsp;Student&nbsp;&nbsp;&nbsp;&nbsp;
                                </label>
                                <label className="td-background checkbox-label">
                                    <input type="radio" name="travelCategory" /> &nbsp;&nbsp;Senior Citizen&nbsp;&nbsp;&nbsp;&nbsp;
                                </label>
                                <label className="td-background checkbox-label checkbox-label4">
                                    <input type="radio" name="travelCategory" /> &nbsp;&nbsp;Doctor & Nurse &nbsp;&nbsp;&nbsp;&nbsp;
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
