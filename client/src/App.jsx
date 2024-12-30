import React from 'react'

import {Routes,Route} from "react-router-dom"
import Home from './pages/home.jsx'
import ViewAirports from './pages/airports.jsx'
import FlightSearchResults from './pages/checkout.jsx'
import Loginpage from './pages/login.jsx'

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Loginpage />} />
      <Route path="/airport" element={<ViewAirports />} />
      <Route path="/checkout" element={<FlightSearchResults />} />
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  )
}

export default App
