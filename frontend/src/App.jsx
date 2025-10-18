import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import OwnerForm from "./components/OwnerForm";
import PropertyDetails from "./components/PropertyDetails";
import HomePage from "./components/HomePage";
import RentalAgreementPage from "./rental/RentalAgreementPage";
import Service from "./components/service";
import RentService from "./components/RentService";
import ServicePage from "./components/ServicePage";
import RentPage from "./components/RentPage";
import HomeInteriorsPage from "./interiors/HomeInteriorsPage"; // ✅ <-- ADD THIS

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
        <Route path="/buy" element={<Service />} />
        <Route path="/rent" element={<RentService />} />
        <Route path="/commercial" element={<RentService />} />
        <Route path="/service-page" element={<ServicePage />} />
        <Route path="/rent-page" element={<RentPage />} />
        <Route path="/interiors" element={<HomeInteriorsPage />} /> {/* ✅ FIXED */}
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
