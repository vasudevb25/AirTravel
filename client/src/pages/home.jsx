import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './home.css';

function Home() {
  const [from, setFrom] = useState("Select Airport");
  const [to, setTo] = useState("Select Airport");
  const [departure, setDeparture] = useState(""); // Added state for departure date
  const [passengers, setPassengers] = useState(1); // Added state for passengers
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown open/close

  const airports = [
    { value: "DEL", label: "Indira Gandhi International Airport (DEL)", location: "Delhi" },
    { value: "BOM", label: "Chhatrapati Shivaji Maharaj International Airport (BOM)", location: "Mumbai" },
    { value: "BLR", label: "Kempegowda International Airport (BLR)", location: "Bengaluru" },
    { value: "CCU", label: "Netaji Subhas Chandra Bose International Airport (CCU)", location: "Kolkata" },
    { value: "MAA", label: "Chennai International Airport (MAA)", location: "Chennai" },
    { value: "HYD", label: "Rajiv Gandhi International Airport (HYD)", location: "Hyderabad" },
    { value: "AMD", label: "Sardar Vallabhbhai Patel International Airport (AMD)", location: "Ahmedabad" },
    { value: "IXZ", label: "Port Blair International Airport (IXZ)", location: "Port Blair" },
    { value: "JAI", label: "Jaipur International Airport (JAI)", location: "Jaipur" },
    { value: "COK", label: "Cochin International Airport (COK)", location: "Kochi" },
    { value: "LHR", label: "Heathrow Airport (LHR)", location: "London, UK" },
    { value: "JFK", label: "John F. Kennedy International Airport (JFK)", location: "New York, USA" },
    { value: "DXB", label: "Dubai International Airport (DXB)", location: "Dubai, UAE" },
    { value: "SIN", label: "Changi Airport (SIN)", location: "Singapore" },
    { value: "SYD", label: "Sydney Kingsford Smith Airport (SYD)", location: "Sydney, Australia" },
  ];

  // Function to handle airport selection
  const handleSelect = (type, airport) => {
    if (type === "from") {
      setFrom(airport);
    } else if (type === "to") {
      setTo(airport);
    }
    setIsDropdownOpen(false); // Close dropdown after selecting
  };

  // Function to toggle the dropdown open/close
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    
  };

  // Form submission handler
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!from || !to || !departure || passengers <= 0) {
      alert("Please fill all fields correctly. Number of passengers should be at least 1.");
    } else {
      alert("Form submitted successfully!");
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#e60000' }}>
        <div className="container">
          <a className="navbar-brand" href="/">Airline Booking</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="/airport">Flights</a></li>
              <li className="nav-item"><a className="nav-link" href="/checkout">Checkout</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div
        className="hero"
        style={{
          backgroundImage: `url('amsky.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          height: '25vh',
          color: 'white',
          textAlign: 'center',
          padding: '50px 20px',
        }}
      >
        <div className="container">
          <h1>Welcome to Airline Booking</h1>
          <p>Find and book flights easily with our platform.</p>
        </div>
      </div>

      {/* Flight Search Section */}
      <div className="container my-5">
        <div className="form-section" style={{
          backgroundColor: 'white',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          padding: '30px',
          marginTop: '-60px',
        }}>
          <h2 className="mb-4">Search Flights</h2>
          <form id="flightSearchForm" onSubmit={handleSubmit}>
            {/* First Row: FROM and TO */}
            <div className="form-row d-flex justify-content-between">

              {/* From Dropdown */}
              <div className="col-md-6 mb-3">
                <label htmlFor="fromDropdown" className="form-label">From</label>
                <div className="dropdown">
                  <button
                    className="btn btn-outline-secondary w-100 dropdown-toggle"
                    type="button"
                    id="fromDropdown"
                    onClick={toggleDropdown}
                  >
                    {from}
                  </button>
                  {isDropdownOpen && (
                    <ul className="dropdown-menu show" aria-labelledby="fromDropdown">
                      {airports.map((airport) => (
                        <li key={airport.value}>
                          <button
                            className="dropdown-item"
                            onClick={() => handleSelect("from", `${airport.label}, ${airport.location}`)}
                          >
                            {airport.label}
                            <br />
                            {airport.location}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* To Dropdown */}
              <div className="col-md-6 mb-3">
                <label htmlFor="toDropdown" className="form-label">To</label>
                <div className="dropdown">
                  <button
                    className="btn btn-outline-secondary w-100 dropdown-toggle"
                    type="button"
                    id="toDropdown"
                    onClick={toggleDropdown}
                  >
                    {to}
                  </button>
                  {isDropdownOpen && (
                    <ul className="dropdown-menu show" aria-labelledby="toDropdown">
                      {airports.map((airport) => (
                        <li key={airport.value}>
                          <button
                            className="dropdown-item"
                            onClick={() => handleSelect("to", `${airport.label}, ${airport.location}`)}
                          >
                            {airport.label}
                            <br />
                            {airport.location}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

            </div>

            {/* Second Row: Date, Passengers, Class */}
            <div className="form-row d-flex justify-content-between mt-4">
              <div className="col-md-4 mb-3">
                <label htmlFor="departure" className="form-label">Departure Date</label>
                <input 
                  type="date" 
                  className="form-control" 
                  id="departure" 
                  name="departure" 
                  value={departure}
                  onChange={(e) => setDeparture(e.target.value)}
                />
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor="passengers" className="form-label">No. of Passengers</label>
                <select 
                  className="form-control" 
                  id="passengers" 
                  name="passengers" 
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                >
                  <option value="" disabled>Select number of passengers</option>
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                  ))}
                </select>
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor="class" className="form-label">Class</label>
                <select className="form-control" id="class" name="class">
                  <option value="economy">Economy</option>
                  <option value="business">Business</option>
                  <option value="first">First</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary btn-lg w-100">Search Flight</button>
          </form>
        </div>
      </div>

      
    </div>
  );
}

export default Home;
