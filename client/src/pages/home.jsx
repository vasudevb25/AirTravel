import React, { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './home.css';
import { useNavigate } from "react-router-dom";
import NavBar from "../components/navBar";

function Home() {
  const [from, setFrom] = useState("Select Airport");
  const [to, setTo] = useState("Select Airport");
  const [departure, setDeparture] = useState(""); 
  const [fromid,setFromId]=useState(0)
  const [departureid,setDepartureid]=useState(0)
  const [passengers, setPassengers] = useState(1); 
  const [seatclass,setClass]=useState("Economy")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
  const [isDropdownOpenTo,setIsDropdownOpenTo]=useState(false);
  const [airportJson,setAirport]=useState(null)
  const navigate=useNavigate()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/airport");
        const data = await response.json();
        setAirport(data);
        console.log(airportJson)
      } catch (error) {
        console.error("Error fetching airport data:", error);
      }
    };

    fetchData();
  }, []);
  

  const handleSelect = (type, airport,id) => {
    if (type === "from") {
      setFrom(airport)
      setFromId(id)
      setIsDropdownOpen(false)
      console.log(departureid)
    } else if (type === "to") {
      setTo(airport);
      setIsDropdownOpenTo(false)
      setDepartureid(id)
    };
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    
  };
  const toggleDropdownTo=()=>{
    setIsDropdownOpenTo(!isDropdownOpenTo)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!from || !to || !departure || passengers <= 0) {
      alert("Please fill all fields correctly. Number of passengers should be at least 1.");
    }
    else if(from==to){
      alert("Destination Cant Be Same As Starting Airport")
    }
    else {
      alert("Form submitted successfully!");
      navigate("/checkout?airportid="+departureid+"&airportfromid="+fromid+"&seatsclass="+seatclass+"&tickets="+passengers)
    }
  };
  if(airportJson!=null){
    console.log(airportJson)
    return (
      <div>
       <NavBar/>
        {/* Flight Search Section */}
        <div className="container my-5">
          <div className="form-section">  
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
                        {airportJson.map((airport) => (
                          
                          <li key={airport.airport_id}>
                            <button
                              className="dropdown-item"
                              onClick={() => handleSelect("from", airport.airport_name,airport.airport_id)}
                            >
                              {airport.district}
                              <br />
                              {airport.airport_district}
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
                      onClick={toggleDropdownTo}
                    >
                      {to}
                    </button>
                    {isDropdownOpenTo && (
                      <ul className="dropdown-menu show" aria-labelledby="toDropdown">
                        {airportJson.map((airport) => (
                          <li key={airport.airport_id}>
                            <button
                              className="dropdown-item"
                              onClick={() => handleSelect("to", airport.airport_name,airport.airport_id)}
                            >
                              {airport.district}
                              <br />
                              {airport.airport_district}
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
                  <select onChange={(e)=>setClass(e.target.value)} className="form-control" id="class" name="class">
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
}

export default Home;
