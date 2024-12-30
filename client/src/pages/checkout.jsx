import React from 'react';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './checkout.css'
import { useState,useEffect } from 'react';
import NavBar from '../components/navBar';

function FlightSearchResults() {
  const [flightsJson,setFlights]=useState(null)
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const airtoid = queryParams.get('airportid');
  const fromid=queryParams.get("airportfromid")
  const seatclass=queryParams.get("seatsclass")
  console.log(seatclass)
  const tickets=queryParams.get("tickets")
  console.log(airtoid,fromid)
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response
        if(fromid==null){
          response = await fetch(`http://localhost:8000/flights?search=${encodeURIComponent(airtoid)}`);
         }
        else{
          response = await fetch(`http://localhost:8000/flights?search=${encodeURIComponent(airtoid)}&from=${encodeURIComponent(fromid)}&seatclass=${encodeURIComponent(seatclass)}&tickets=${encodeURIComponent(tickets)}`);
        }
        const data = await response.json();
        setFlights(data);
      } catch (error) {
        console.error("Error fetching airport data:", error);
      }
    };

    fetchData();
  }, []);
  if(flightsJson!=null){
  return (
      <div>
        <NavBar/>
        <div className="container my-5">
          <div className="flight-list">
            <h2 className="mb-4">Available Flights</h2>
            {flightsJson.length? flightsJson.map(data=>
            <div key={data.flight_id} className="flight-card">
              <div className="flight-details">
                <div>
                  <strong>Flight No</strong><br />{data.flight_no}
                </div>
                <div>
                  <strong>Departure</strong><br />{data.dep_time}
                </div>
                <div>
                  <strong>Arrival</strong><br />{data.arr_time}
                </div>
              </div>
              <div className="flight-details">
                <div>
                  <strong>From</strong><br />{data.source}
                </div>
                <div>
                  <strong>To</strong><br />{data.destination}
                </div>
              </div>
              <button className="btn btn-primary w-100">Book Now</button>
            </div>
              ):<h4>No Flights Found</h4>}
            </div>
        </div>
      </div>
    );
  }
}
export default FlightSearchResults;
