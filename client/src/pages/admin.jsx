import React,{useEffect,useState} from "react";
import './admin.css'
import NavBar from "../components/navBar";

function Admin() {
    const handleSubmit = () => {
        // Add functionality here
        alert("Form submitted!");
    };

    const [crewjson, setcrew] = useState(null);
    
    useEffect(()=>{
        const fetchCrew = async () =>{
            try{
                let response = await fetch('http://localhost:8000/crew')
                const data = await response.json()
                setcrew(data)
                console.log(data);
            }catch(error){
                console.log(error)
            }
        }

        fetchCrew()
    },[])
    

    


    return (
        <div>
            <div className="admin-container">
                <div className="left-sidebar">
                    <div className="form-group">
                        <label htmlFor="crew-id">Select the Crew ID</label>
                        <select id="crew-id" name="crew-id" required>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </div>
                <div className="form-container">
                    <h2>Upload CREW Details</h2>
                    <div>
                        <div className="form-group">

                            <label htmlFor="name">Name</label>
                            <select id="role" name="role" required>
                                {crewjson?crewjson.map((data,index)=>(
                                    <option key={index} value={data.crew_name}>{data.crew_name}</option>
                                )
                                ):<h1>s</h1>}
                            </select>

                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone no</label>
                            <input type="text" id="phone" name="phone" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="role">Select Role</label>
                            <select id="role" name="role" required>
                                <option value="pilot">Pilot</option>
                                <option value="co-pilot">Co-Pilot</option>
                                <option value="flight-attendant">Flight Attendant</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="flight-no">Flight No:</label>
                            <input type="text" id="flight-no" name="flight-no" required />
                        </div>
                        <button type="submit" onClick={handleSubmit}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;
