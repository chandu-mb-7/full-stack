import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import SaleAgreementPage from "./components/SaleAgreementPage";
import HomeLoanPage from "./components/HomeLoanPage"; // ✅ Add this import
import AvoidBroker from "./data/avoidBroker";
import OwnerForm from "./components/OwnerForm";
import PropertyDetails from "./components/PropertyDetails";
import HomePage from "./components/HomePage";
import RentalAgreementPage from "./rental/RentalAgreementPage";
import Service from "./components/service";        
import RentService from "./components/RentService";
import ServicePage from "./components/ServicePage";
import RentPage from "./components/RentPage";
import CitySelectorModal from "./components/CitySelectorModal"; 
import PropertyLegalService from "./components/PropertyLegalServices";
import NoBrokerForNRIs from "./components/NoBrokerForNRIs";


function AppContent() {
  const location = useLocation();
  
  // ✅ State to control City Modal
  const [isCityModalOpen, setIsCityModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState(
    localStorage.getItem("selectedCity") || ""
  );

  // ✅ Function to open City Modal
  const handleOpenCityModal = () => {
    setIsCityModalOpen(true);
  };

  // ✅ Function to close City Modal
  const handleCloseCityModal = () => {
    setIsCityModalOpen(false);
  };

  // ✅ Function to handle city selection
  const handleCitySelect = (cityName) => {
    console.log("Selected city:", cityName);
    setSelectedCity(cityName);
    localStorage.setItem("selectedCity", cityName); // Save to localStorage
    setIsCityModalOpen(false); // Close modal after selection
    
    // Optional: Navigate to builder projects page or do something else
    // window.location.href = `/builder-projects?city=${cityName}`;
  };

  return (
    <>
      <Navbar /> {/* Always visible */}
      
      {/* ✅ Your existing City Modal */}
      <CitySelectorModal
        isOpen={isCityModalOpen}
        onClose={handleCloseCityModal}
        onCitySelect={handleCitySelect}
      />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rental-agreement" element={<RentalAgreementPage />} />
        <Route path="/owner" element={<OwnerForm />} />
        <Route path="/property-details" element={<PropertyDetails />} />
        
        {/* ✅ Pass onOpenCityModal to routes that need it */}
        <Route 
          path="/buy" 
          element={<Service onOpenCityModal={handleOpenCityModal} />} 
        />
        <Route path="/rent" element={<RentService />} />
        <Route path="/commercial" element={<RentService />} />
        <Route 
          path="/service-page" 
          element={<ServicePage onOpenCityModal={handleOpenCityModal} />} 
        />
        <Route path="/rent-page" element={<RentPage />} />
        <Route path="/avoid-brokers" element={<AvoidBroker />} />
        <Route path="/sale-agreement" element={<SaleAgreementPage />} />
          <Route path="/home-loan" element={<HomeLoanPage />} />
          <Route path="/property-legal" element={<PropertyLegalService/>} />
          <Route path="/nri-services" element={<NoBrokerForNRIs/>} />
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