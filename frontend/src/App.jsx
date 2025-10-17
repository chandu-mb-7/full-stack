import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import OwnerForm from "./components/OwnerForm";
import PropertyDetails from "./components/PropertyDetails";
import HomePage from "./components/HomePage";
import RentalAgreementPage from "./rental/RentalAgreementPage";

function AppContent() {
  const location = useLocation();

  return (
    <>
      <Navbar /> {/* Always visible */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rental-agreement" element={<RentalAgreementPage />} />
        <Route path="/owner" element={<OwnerForm />} />
        <Route path="/property-details" element={<PropertyDetails />} />
        <Route path="/buy" element={<h1>Buy Page</h1>} />
        <Route path="/rent" element={<h1>Rent Page</h1>} />
        <Route path="/commercial" element={<h1>Commercial Page</h1>} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
