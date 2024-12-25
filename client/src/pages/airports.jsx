import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // For interactive Bootstrap components
import 'font-awesome/css/font-awesome.min.css';
import './airports.css';


function ViewAirports() {

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
      
    return (
        <div>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
            <a className="navbar-brand" href="/">
                AMSKY
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <a className="nav-link" href="/">
                    Home
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/airport">
                    Flights
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/checkout">
                    Checkout
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#contact">
                    Contact Us
                    </a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    
        {/* Hero Section */}
        <div className="hero">
            <div className="container">
            <h1>View Airports</h1>
            <p>Explore the airports available in our booking system.</p>
            </div>
        </div>
    
        {/* Airports List Section */}
        <div className="container my-5">
            <div className="airport-list">
                <h2 className="mb-4">Available Airports</h2>
                <div className="airport-tiles">
                {/* Airport Tiles */}
                {airports.map((airport, index) => (
                    <div className="airport-tile" key={index}>
                    <div className="airport-code">{airport.value}</div>
                    <div className="airport-name">{airport.label}</div>
                    <div className="airport-location">{airport.location}</div>
                    <button className="more-details">More Details</button>
                    <div className="flashcard">
                        <p>
                        <strong>District:</strong> {airport.district || "N/A"}
                        </p>
                        <p>
                        <strong>State:</strong> {airport.state || "N/A"}
                        </p>
                        <p>
                        <strong>Country:</strong> {airport.country || "N/A"}
                        </p>
                        <p>
                        <strong>Area:</strong> {airport.area || "N/A"}
                        </p>
                        <p>
                        <strong>Terminals:</strong> {airport.terminals || "N/A"}
                        </p>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </div>

    
                
    </div>
    );
};
  
export default ViewAirports;
