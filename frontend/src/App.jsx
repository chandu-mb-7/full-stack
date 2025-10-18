


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

// Components
import Navbar from "./components/Navbar";
import OwnerForm from "./components/OwnerForm";
import PropertyDetails from "./components/PropertyDetails";
import Service from "./components/service";        
import RentService from "./components/RentService";
import ServicePage from "./components/ServicePage";
import RentPage from "./components/RentPage";     
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<LandingPage />} />

        {/* Buy & Rent */}
        <Route path="/buy" element={<Service/>} />
        <Route path="/rent" element={<RentService />} />
         <Route path="/commercial" element={<RentService/>} />

        {/* Owner & Property */}
        <Route path="/owner" element={<OwnerForm />} />
        <Route path="/property-details" element={<PropertyDetails />} />

        {/* Generic service details */}
        <Route path="/service-page" element={<ServicePage />} />
        <Route path="/rent-page" element={<RentPage />} />

       
        {/* login and singup */}
        <Route path="/login" element={<h1>Login Page</h1>} />
        <Route path="/signup" element={<h1>Signup Page</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
