import React from 'react'

import {Routes,Route} from "react-router-dom"
import Home from './pages/home.jsx'
import ViewAirports from './pages/airports.jsx'
import FlightSearchResults from './pages/checkout.jsx'
import Loginpage from './pages/login.jsx'
import Admin from './pages/admin.jsx'
import SeatSelection from './pages/seats.jsx'

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Loginpage />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/airport" element={<ViewAirports />} />
      <Route path="/checkout" element={<FlightSearchResults />} />
      <Route path='/seats' element={<SeatSelection/>}/>
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  )
}

export default App
