import React from "react";
import { useState,useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // For interactive Bootstrap components
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';
import './airports.css';
import NavBar from "../components/navBar";
function ViewAirports() {
      const [airportJson,setAirport]=useState(null)
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch("http://localhost:8000/airport");
            const data = await response.json();
            console.log(airportJson)
            setAirport(data);
          } catch (error) {
            console.error("Error fetching airport data:", error);
          }
        };
    
        fetchData();
      }, []);
    if(airportJson!=null){
        return (
            
            <div>
            <NavBar/>
            {/* Airports List Section */}
            <div className="container my-5">
                <div className="airport-list">
                    <h2 className="mb-4">Available Airports</h2>
                    <div className="airport-tiles">
                    {/* Airport Tiles */}
                    {airportJson.map((airport, index) => (
                        <div className="airport-tile" key={index}>
                        <div className="airport-name">{airport.airport_name}</div>
                        <div className="airport-location">{airport.district}</div>
                        <Link className="more-details" to={"/checkout/?airportid="+airport.airport_id}>Book</Link>
                        <div className="flashcard">
                            <p>
                            <strong>District:</strong> {airport.district || "N/A"}
                            </p>
                            <p>
                            <strong>State:</strong> {airport.state || "N/A"}
                            </p>    
                            <p>
                            <strong>Area:</strong> {airport.area || "N/A"}
                            </p>
                            <p>
                            <strong>Terminals:</strong> {airport.number_of_terminals || "N/A"}
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
}
export default ViewAirports;
