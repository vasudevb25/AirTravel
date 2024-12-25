import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './checkout.css'

function FlightSearchResults() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark">
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
              <li className="nav-item"><a className="nav-link" href="#  ">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <div className="container">
          <h1>Flight Search Results</h1>
          <p>Your search results based on the selected criteria.</p>
        </div>
      </div>

      {/* Flight Search Results Section */}
      <div className="container my-5">
        <div className="flight-list">
          <h2 className="mb-4">Available Flights</h2>

          {/* Flight Card 1 */}
          <div className="flight-card">
            <div className="flight-details">
              <div>
                <strong>Flight No</strong><br />AI202
              </div>
              <div>
                <strong>Departure</strong><br />10:00 AM
              </div>
              <div>
                <strong>Arrival</strong><br />12:30 PM
              </div>
            </div>
            <div className="flight-details">
              <div>
                <strong>From</strong><br />Indira Gandhi International Airport (DEL)
              </div>
              <div>
                <strong>To</strong><br />Chhatrapati Shivaji Maharaj International Airport (BOM)
              </div>
              <div>
                <strong>Price</strong><br />₹8,500
              </div>
            </div>
            <button className="btn btn-primary w-100">Book Now</button>
          </div>

          {/* Flight Card 2 */}
          <div className="flight-card">
            <div className="flight-details">
              <div>
                <strong>Flight No</strong><br />AI210
              </div>
              <div>
                <strong>Departure</strong><br />2:00 PM
              </div>
              <div>
                <strong>Arrival</strong><br />4:30 PM
              </div>
            </div>
            <div className="flight-details">
              <div>
                <strong>From</strong><br />Chennai International Airport (MAA)
              </div>
              <div>
                <strong>To</strong><br />Dubai International Airport (DXB)
              </div>
              <div>
                <strong>Price</strong><br />₹15,200
              </div>
            </div>
            <button className="btn btn-primary w-100">Book Now</button>
          </div>

          {/* Flight Card 3 */}
          <div className="flight-card">
            <div className="flight-details">
              <div>
                <strong>Flight No</strong><br />AI305
              </div>
              <div>
                <strong>Departure</strong><br />6:00 PM
              </div>
              <div>
                <strong>Arrival</strong><br />8:30 PM
              </div>
            </div>
            <div className="flight-details">
              <div>
                <strong>From</strong><br />Rajiv Gandhi International Airport (HYD)
              </div>
              <div>
                <strong>To</strong><br />London Heathrow Airport (LHR)
              </div>
              <div>
                <strong>Price</strong><br />₹25,000
              </div>
            </div>
            <button className="btn btn-primary w-100">Book Now</button>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default FlightSearchResults;
