import React, { useState, useEffect } from "react";
import "./Enquire.css";
import { Container, Form, Button, InputGroup } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import CitySelectorModal from "../components/CitySelectorModal";

const Enquire = () => {
    const storedCity = localStorage.getItem("selectedCity");
    const [selectedCity, setSelectedCity] = useState(storedCity || "");
    const [showCityModal, setShowCityModal] = useState(false);

    // Auto-open city modal on first load
    useEffect(() => {
        if (!storedCity) {
            const timer = setTimeout(() => {
                setShowCityModal(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [storedCity]);

    // Save city when selected (modal or dropdown)
    const handleCitySelect = (city) => {
        setSelectedCity(city);
        localStorage.setItem("selectedCity", city);
        setShowCityModal(false);
    };

    // Sync across browser tabs
    useEffect(() => {
        const handleStorageChange = () => {
            const city = localStorage.getItem("selectedCity") || "";
            setSelectedCity(city);
        };
        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, []);

    return (
        <div className="rental-page-container">
            {/* City Selector Modal */}
            <CitySelectorModal
                isOpen={showCityModal}
                onClose={() => setShowCityModal(false)}
                onCitySelect={handleCitySelect}
            />

            <div className="hero-section position-relative">
                {/* Header Section */}
                <div className="top-bar d-flex justify-content-between align-items-center px-4 py-3">
                    <div className="logo">
                        <img
                            src="/images/nobroker-logo.png"
                            alt="NoBroker"
                            className="img-fluid nobroker-logo"
                        />
                    </div>

                    {/* City Selector */}
                    <div className="d-flex align-items-center gap-3">
                        <select
                            className="form-select city-select"
                            value={selectedCity}                      // ✅ controlled value
                            onChange={(e) => handleCitySelect(e.target.value)}  // ✅ update state
                        >
                            <option value="">Select City</option>
                            <option value="Bangalore">Bangalore</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Pune">Pune</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Hyderabad">Hyderabad</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Noida">Noida</option>
                            <option value="Gurgaon">Gurgaon</option>
                        </select>

                        <FaUserCircle className="user-icon" />
                    </div>
                </div>

                {/* Hero Content */}
                <Container fluid className="hero-content text-center text-white">
                    <h2 className="fw-bold title">
                        Properties For Investment in{" "}
                        {selectedCity || "Bangalore"} {/* ✅ Dynamic title */}
                    </h2>
                    <div className="d-flex justify-content-center gap-4 stats my-3">
                        <span>5,200+ Projects</span>
                        <span>1,700+ Developers</span>
                        <span>9,000+ Customers</span>
                    </div>

                    {/* Search Section */}
                    <div className="search-bar d-flex justify-content-center align-items-center mt-4 flex-wrap">
                        <Form.Select className="search-select">
                            <option>📍 Location - Select Locality</option>
                        </Form.Select>
                        <Form.Select className="search-select">
                            <option>🕒 Possession - Select Time</option>
                        </Form.Select>
                        <Button className="search-btn">
                            <IoIosSearch size={20} /> Search
                        </Button>
                    </div>
                </Container>

                {/* Offer Section */}
                <div className="offer-section py-4 px-3 d-flex flex-wrap justify-content-center align-items-center gap-4">
                    <div className="offer-left text-center text-md-start">
                        <h3>
                            Buy your <span className="highlight">dream home</span>
                        </h3>
                        <p>with us & enjoy benefits</p>
                    </div>

                    <div className="offer-image text-center">
                        <div className="offer-card">
                            <p className="fw-bold m-0">Get Benefit worth</p>
                            <h2 className="fw-bold text-danger">₹2 Lacs*</h2>
                            <img
                                src="/images/family.png"
                                alt="Family"
                                className="img-fluid family-img"
                            />
                        </div>
                    </div>

                    <div className="offer-right text-center text-md-start">
                        <h5>
                            Get personalized assistance from our experts for{" "}
                            <span className="text-danger fw-bold">FREE</span>
                        </h5>
                        <div className="tags mt-2">
                            <span>Market Knowledge</span> | <span>Negotiation</span> |{" "}
                            <span>Legal Support</span> | <span>Key Insights</span>
                        </div>

                        <div className="connect-form d-flex flex-wrap align-items-center gap-2 mt-3">
                            <Form.Control type="text" placeholder="Akshay" className="form-input" />
                            <InputGroup className="form-input">
                                <InputGroup.Text>🇮🇳 +91</InputGroup.Text>
                                <Form.Control type="text" placeholder="7996655473" />
                            </InputGroup>
                            <Button className="connect-btn">Connect</Button>
                        </div>
                    </div>
                </div>

                {/* Floating Button */}
                <Button className="shorts-btn">⚡ Shorts</Button>
            </div>
        </div>
    );
};

export default Enquire;
