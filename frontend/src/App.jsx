import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import SaleAgreementPage from "./components/SaleAgreementPage";
import HomeLoanPage from "./components/HomeLoanPage";

import OwnerForm from "./components/OwnerForm";
import PropertyDetails from "./components/PropertyDetails";
import HomePage from "./components/HomePage";
import RentalAgreementPage from "./rental/RentalAgreementPage";
import Service from "./components/Service";
import RentService from "./components/RentService";
import ServicePage from "./components/ServicePage";
import RentPage from "./components/RentPage";
import HomeInteriorsPage from "./interiors/HomeInteriorsPage";
import AvoidContent from "./components/AvoidContent";
import CitySelectorModal from "./components/CitySelectorModal";
import PropertyLegalService from "./components/PropertyLegalServices";
import NoBrokerForNRIs from "./components/NoBrokerForNRIs";

function AppContent() {
  const location = useLocation();

  // ✅ City modal control
  const [isCityModalOpen, setIsCityModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState(
    localStorage.getItem("selectedCity") || ""
  );

  const handleOpenCityModal = () => {
    setIsCityModalOpen(true);
  };

  const handleCloseCityModal = () => {
    setIsCityModalOpen(false);
  };

  const handleCitySelect = (cityName) => {
    console.log("Selected city:", cityName);
    setSelectedCity(cityName);
    localStorage.setItem("selectedCity", cityName);
    setIsCityModalOpen(false);
  };

  return (
    <>
      {/* Navbar always visible */}
      <Navbar />

      {/* City selector modal */}
      <CitySelectorModal
        isOpen={isCityModalOpen}
        onClose={handleCloseCityModal}
        onCitySelect={handleCitySelect}
      />

      <Routes>
        {/* --- Main Pages --- */}
        <Route path="/" element={<HomePage />} />
        <Route path="/owner" element={<OwnerForm />} />
        <Route path="/property-details" element={<PropertyDetails />} />

        {/* --- Buy / Rent --- */}
        <Route
          path="/buy"
          element={<Service onOpenCityModal={handleOpenCityModal} />}
        />
        <Route path="/rent" element={<RentService />} />
        <Route path="/commercial" element={<RentService />} />

        {/* --- Service Related Pages --- */}
        <Route
          path="/service-page"
          element={<ServicePage onOpenCityModal={handleOpenCityModal} />}
        />
        <Route path="/rent-page" element={<RentPage />} />

        {/* --- Specialized Pages --- */}
        <Route path="/rental-agreement" element={<RentalAgreementPage />} />
        <Route path="/home-interiors" element={<HomeInteriorsPage />} />
        <Route path="/avoid-brokers" element={<AvoidContent />} />

        {/* --- Extra Service Pages --- */}
        <Route path="/sale-agreement" element={<SaleAgreementPage />} />
        <Route path="/home-loan" element={<HomeLoanPage />} />
        <Route path="/property-legal" element={<PropertyLegalService />} />
        <Route path="/nri-services" element={<NoBrokerForNRIs />} />
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
