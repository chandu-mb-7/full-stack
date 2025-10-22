import React, { useState } from "react";
import "./BusinessAssist.css";

import SellOrRent from "../assets/SellOrRent.png";
import GooglePlay from "../assets/GooglePay.png";
import Apple from "../assets/Apple.svg";
import { flatsForSale } from "./data/flatsForSaleData";
import { pgHostels } from "./data/pgHostelData";
import { flatmates } from "./data/flatmatesData";
import { miscellaneous } from "./data/miscellaneousData";
import { commercial } from "./data/commercialData";
import { newProjects } from "./data/newProjectsData";
import { independentHouses } from "./data/independentHousesData";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";



const BusinessAssist = () => {
  const [activeTab, setActiveTab] = useState("flatsForSale");

  const getTabData = () => {
    switch (activeTab) {
      case "flatsForSale":
        return flatsForSale;
      case "pgHostels":
        return pgHostels;
      case "flatmates":
        return flatmates;
      case "miscellaneous":
        return miscellaneous;
      case "commercial":
        return commercial;
      case "newProjects":
        return newProjects;
      case "independentHouses":
        return independentHouses;
      default:
        return [];
    }
  };



  const renderContent = () => {
    const data = getTabData();
    return (
      <div className="menu-grid">
        {data.map((city, index) => (
          <div key={index} className="menu-column">
            <h4 className="menu-city-title">{city.city}</h4>
            <ul>
              {city.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };

  const buyServices = [
    "Property Legal Services", "Interiors", "Sale Agreement", "NoBroker For NRI's", "New Builder Project",
    "Home Loan EMI Calculator", "Home Loan Balance Transfer", "Home Loan Eligibility Calculator", "Apply Home Loan",
    "Compare Home Loan Interest", "Property Buyers Forum", "Property Buyers Guide", "Property Seller Guide",
    "Home Loan Guide", "Home Loan Queries", "Home Renovation Guide", "Home Renovation Queries", "Interior Design Tips",
    "Interior Design Queries", "NRI RealEstate Guide", "NRI RealEstate Queries", "Realestate Vastu Guide",
    "Personal Loan Guide", "Personal Loan Queries", "Bill Payment Guide", "Realestate Legal Guide",
    "Realestate Legal Queries", "e-AASTHI BBMP", "Due Diligence Service"
  ];

  const rentServices = [
    "Rental Agreement", "Pay Rent", "Refer and Earn", "Packers and Movers", "Property Management in India",
    "Home Services Questions", "Rent Services Questions", "Rent Calculator", "Property Rental Guide", "Landlord Guide",
    "Tenant Guide", "Packers and Movers Guide", "Packers and Movers queries", "Home Services", "Home Services Queries",
    "Painting Services", "Home Painting Guide", "Home Painting Queries", "Cleaning Services", "Kitchen Cleaning Services",
    "Sofa Cleaning Services", "Bathroom Cleaning Services", "Full House Cleaning Services", "Home Cleaning Guide",
    "Home Cleaning Queries", "AC Services", "Carpentry Services", "Carpentry Services Queries", "Electrician Services",
    "Electrician Services Queries", "Plumbing Services", "Plumbing Services Queries", "Lease Agreement", "Notary",
    "Notary Advocate", "Notary Affidavit"
  ];

  return (
    <div className="business-assist-section">
      {/* Header Section */}
      <section className="py-5 assist-header w-100">

        <div className="text-center mb-5">
          <h3 className="heading-line text-center">
            <span className="line"></span>
            <span className="circle"></span>
            <span className="heading-text">
              NoBroker Business Assist Plan For Builders
            </span>
            <span className="circle"></span>
            <span className="line"></span>
          </h3>
        </div>

        {/* Inner content area */}
        <div className="container-fluid px-5 d-flex justify-content-center align-items-center flex-column flex-md-row text-center text-md-start assist-inner">

          <div className="col-12 col-md-5 text-center mb-4 mb-md-0">
            <img
              src={SellOrRent}
              alt="Sell or Rent Illustration"
              className="img-fluid assist-img"
            />
          </div>

          <div className="col-12 col-md-5 assist-gap ">
            <h4 className="assist-subtext mb-4">
              Get in touch with us to Sell or Rent Your Projects
            </h4>

            <button className="btn btn-enquire px-4 py-2 fw-semibold mb-3">
              Enquire Now
            </button>
            <br />
            <small className="text-muted small mb-0">
              For Builder Enquiries:{" "}
              <span className="fw-medium">+91 91080 50400</span>
            </small>
          </div>
        </div>

      </section>




      {/* Stats Section */}
      <section className="text-center py-5 assist-stats">
        <h3 className="heading-line text-center mb-5">
          <span className="line"></span>
          <span className="circle"></span>
          <span className="heading-text">We Make A Difference</span>
          <span className="circle"></span>
          <span className="line"></span>
        </h3>

        <div className="container">
          <div className="row justify-content-center g-5">
            {/* Stat 1 */}
            <div className="col-12 col-md-4">
              <div className="stat-card">
                <div className="stat-circle">
                  <span className="stat-value">₹130 cr+</span>
                </div>
                <p className="stat-text mt-3">Brokerage saved monthly</p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="col-12 col-md-4">
              <div className="stat-card">
                <div className="stat-circle">
                  <span className="stat-value">30 Lakh+</span>
                </div>
                <p className="stat-text mt-3">Customers Connected Monthly</p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="col-12 col-md-4">
              <div className="stat-card">
                <div className="stat-circle">
                  <span className="stat-value">2 Lakh+</span>
                </div>
                <p className="stat-text mt-3">New Listings Monthly</p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* SECTION - 3 */}

      <section className="customer-section py-5">

        {/* Heading */}
        <div className="text-center mb-4">
          <h2 className="section-heading">Our Customers Loves us</h2>
        </div>

        {/* Video */}
        <div className="d-flex justify-content-center mb-5">
          <iframe
            width="560"
            height="320"
            src="https://www.youtube.com/embed/0ChlgxhXVws"
            title="NoBroker Reviews - Why our customers love us?"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="review-video"
          ></iframe>
        </div>


        {/* Reviws */}

        <div
          className="container my-4 p-4  testimonial-scroll-container"
          style={{
            borderRadius: "0px",
            overflowX: "auto",
            whiteSpace: "nowrap",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <style>
            {`
      
     

      /* Smooth vertical scroll for long text */
      .scroll-text {
        height: 80px;
        overflow-y: auto;
        overflow-x: hidden;
        position: relative;
        padding-right: 5px;
      }

      .scroll-text::-webkit-scrollbar {
        width: 0px;
        background: transparent;
      }

      .scroll-text p {
        margin: 0;
        white-space: normal;
        line-height: 1.4;
      }

    
      }
    `}
          </style>

          <div
            className="d-flex justify-content-start flex-nowrap"
            style={{ gap: "20px" }}
          >
            {/*  Shubham */}
            <div
              className="card shadow-sm p-3 d-flex flex-column"
              style={{
                width: "300px",
                borderRadius: "0px",
                border: "none",
                flexShrink: 0,
                fontSize: "0.8rem",
              }}
            >
              <div className="d-flex align-items-center mb-2">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Shubham Raibhandar"
                  className="rounded-circle me-3"
                  style={{
                    width: "55px",
                    height: "55px",
                    objectFit: "cover",
                  }}
                />
                <div>
                  <h6 className="fw-semibold mb-0">Shubham Raibhandar</h6>
                  <div className="text-success-star mt-1">
                    ⭐️⭐️⭐️⭐️⭐️ <small className="fw-semibold text-secondary">5.0</small>
                  </div>
                </div>
              </div>
              <h6 className="fw-semibold mb-1">Helps us to find good properties</h6>
              <div className="scroll-text text-muted">
                <p>
                  "The site really helps us to find good properties in the least amount
                  of time without any headache of brokerage. I was so scared in Pune due
                  to the issues of high deposit as well as brokerage. I was new and had
                  no time. But then I found NoBroker. It is simply a ..."
                </p>
              </div>
            </div>

            {/* Lisa */}
            <div
              className="card shadow-sm p-3 d-flex flex-column"
              style={{
                width: "300px",
                borderRadius: "0px",
                border: "none",
                flexShrink: 0,
                fontSize: "0.8rem",
              }}
            >
              <div className="d-flex align-items-center mb-2">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Lisa Das"
                  className="rounded-circle me-3"
                  style={{
                    width: "55px",
                    height: "55px",
                    objectFit: "cover",
                  }}
                />
                <div>
                  <h6 className="fw-semibold mb-0">Lisa Das</h6>
                  <div className="text-success-star mt-1">
                    ⭐️⭐️⭐️⭐️⭐️ <small className="fw-semibold text-secondary">5.0</small>
                  </div>
                </div>
              </div>
              <h6 className="fw-semibold mb-1">It's a nice experience</h6>
              <div className="scroll-text text-muted">
                <p>
                  "It was a nice experience with Nobroker. They helped me to find a new
                  home to stay as it was difficult for me, as an individual, to find a
                  home with friendly roommates. Thankfully Nobroker helped me to get one
                  with all kind of facilities."
                </p>
              </div>
            </div>

            {/* Kishore */}
            <div
              className="card shadow-sm p-3 d-flex flex-column"
              style={{
                width: "300px",
                borderRadius: "0px",
                border: "none",
                flexShrink: 0,
                fontSize: "0.8rem",
              }}
            >
              <div className="d-flex align-items-center mb-2">
                <img
                  src="https://randomuser.me/api/portraits/men/46.jpg"
                  alt="Kishore"
                  className="rounded-circle me-3"
                  style={{
                    width: "55px",
                    height: "55px",
                    objectFit: "cover",
                  }}
                />
                <div>
                  <h6 className="fw-semibold mb-0">Kishore</h6>
                  <div className="text-success-star mt-1">
                    ⭐️⭐️⭐️⭐️⭐️ <small className="fw-semibold text-secondary">5.0</small>
                  </div>
                </div>
              </div>
              <h6 className="fw-semibold mb-1">Found Great Place to Stay via NoBroker</h6>
              <div className="scroll-text text-muted">
                <p>
                  "NoBroker provides a great place to stay with safe environment. If
                  they show you something about property that is always same as it. No
                  fake pictures."
                </p>
              </div>
            </div>

            {/*  Mohamme Kouse */}
            <div
              className="card shadow-sm p-3 d-flex flex-column"
              style={{
                width: "300px",
                borderRadius: "0px",
                border: "none",
                flexShrink: 0,
                fontSize: "0.8rem",
              }}
            >
              <div className="d-flex align-items-center mb-2">
                <img
                  src="https://randomuser.me/api/portraits/men/67.jpg"
                  alt="Mohamme Kouse"
                  className="rounded-circle me-3"
                  style={{
                    width: "55px",
                    height: "55px",
                    objectFit: "cover",
                  }}
                />
                <div>
                  <h6 className="fw-semibold mb-0">Mohamme Kouse</h6>
                  <div className="text-success-star mt-1">
                    ⭐️⭐️⭐️⭐️⭐️ <small className="fw-semibold text-secondary">5.0</small>
                  </div>
                </div>
              </div>
              <h6 className="fw-semibold mb-1">Good App to Earn Money Online !</h6>
              <div className="scroll-text text-muted">
                <p>
                  "The NoBroker app is very useful for home seekers looking for homes to
                  rent. I have also earned money by using the Click & Earn option. I got
                  a good house and earned ₹21,000 in total. Very happy!"
                </p>
              </div>
            </div>

            {/*  Ayan */}
            <div
              className="card shadow-sm p-3 d-flex flex-column"
              style={{
                width: "300px",
                borderRadius: "0px",
                border: "none",
                flexShrink: 0,
                fontSize: "0.8rem",
              }}
            >
              <div className="d-flex align-items-center mb-2">
                <img
                  src="https://randomuser.me/api/portraits/men/72.jpg"
                  alt="Ayan"
                  className="rounded-circle me-3"
                  style={{
                    width: "55px",
                    height: "55px",
                    objectFit: "cover",
                  }}
                />
                <div>
                  <h6 className="fw-semibold mb-0">Ayan</h6>
                  <div className="text-success-star mt-1">
                    ⭐️⭐️⭐️⭐️⭐️ <small className="fw-semibold text-secondary">5.0</small>
                  </div>
                </div>
              </div>
              <h6 className="fw-semibold mb-1">Click n Earn is Awesome!</h6>
              <div className="scroll-text text-muted">
                <p>
                  "Wow! I am really amazed. Click n Earn is awesome, I really earn by
                  just clicking pictures of To-Let boards. The processing is very fast.
                  Great concept!"
                </p>
              </div>
            </div>

            {/*  Prabhu Dev */}
            <div
              className="card shadow-sm p-3 d-flex flex-column"
              style={{
                width: "300px",
                borderRadius: "0px",
                border: "none",
                flexShrink: 0,
                fontSize: "0.8rem",
              }}
            >
              <div className="d-flex align-items-center mb-2">
                <img
                  src="https://randomuser.me/api/portraits/men/80.jpg"
                  alt="Prabhu Dev"
                  className="rounded-circle me-3"
                  style={{
                    width: "55px",
                    height: "55px",
                    objectFit: "cover",
                  }}
                />
                <div>
                  <h6 className="fw-semibold mb-0">Prabhu Dev</h6>
                  <div className="text-success-star mt-1">
                    ⭐️⭐️⭐️⭐️⭐️ <small className="fw-semibold text-secondary">5.0</small>
                  </div>
                </div>
              </div>
              <h6 className="fw-semibold mb-1">Got Genuine and very quick Response</h6>
              <div className="scroll-text text-muted">
                <p>
                  "I have got a genuine and very quick response from the site. I am very
                  happy with service of NoBroker.com owner plans."
                </p>
              </div>
            </div>

            {/*  Balasubramanyam */}
            <div
              className="card shadow-sm p-3 d-flex flex-column"
              style={{
                width: "300px",
                borderRadius: "0px",
                border: "none",
                flexShrink: 0,
                fontSize: "0.8rem",
              }}
            >
              <div className="d-flex align-items-center mb-2">
                <img
                  src="https://randomuser.me/api/portraits/men/56.jpg"
                  alt="Balasubramanyam"
                  className="rounded-circle me-3"
                  style={{
                    width: "55px",
                    height: "55px",
                    objectFit: "cover",
                  }}
                />
                <div>
                  <h6 className="fw-semibold mb-0">Balasubramanyam K.C.</h6>
                  <div className="text-success-star mt-1">
                    ⭐️⭐️⭐️⭐️⭐️ <small className="fw-semibold text-secondary">5.0</small>
                  </div>
                </div>
              </div>
              <h6 className="fw-semibold mb-1">
                Appreciate Positive and quick responses from RM
              </h6>
              <div className="scroll-text text-muted">
                <p>
                  "RMs of NoBroker team, I really would like to appreciate positive and
                  quick responses from you guys. Thank you for excellent service through
                  paid plans."
                </p>
              </div>
            </div>

            {/*  Tiasha */}
            <div
              className="card shadow-sm p-3 d-flex flex-column"
              style={{
                width: "300px",
                borderRadius: "0px",
                border: "none",
                flexShrink: 0,
                fontSize: "0.8rem",
              }}
            >
              <div className="d-flex align-items-center mb-2">
                <img
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  alt="Tiasha"
                  className="rounded-circle me-3"
                  style={{
                    width: "55px",
                    height: "55px",
                    objectFit: "cover",
                  }}
                />
                <div>
                  <h6 className="fw-semibold mb-0">Tiasha</h6>
                  <div className="text-success-star mt-1">
                    ⭐️⭐️⭐️⭐️⭐️ <small className="fw-semibold text-secondary">5.0</small>
                  </div>
                </div>
              </div>
              <h6 className="fw-semibold mb-1">Best Option</h6>
              <div className="scroll-text text-muted">
                <p>
                  "The service was great and very professional. My RM Sayantan Gupta was
                  efficient and quickly helped me finalize a home in just one visit."
                </p>
              </div>
            </div>

            {/*  Anoop Nair */}
            <div
              className="card shadow-sm p-3 d-flex flex-column"
              style={{
                width: "300px",
                borderRadius: "0px",
                border: "none",
                flexShrink: 0,
                fontSize: "0.8rem",
              }}
            >
              <div className="d-flex align-items-center mb-2">
                <img
                  src="https://randomuser.me/api/portraits/men/55.jpg"
                  alt="Anoop Nair"
                  className="rounded-circle me-3"
                  style={{
                    width: "55px",
                    height: "55px",
                    objectFit: "cover",
                  }}
                />
                <div>
                  <h6 className="fw-semibold mb-0">Anoop Nair</h6>
                  <div className="text-success-star mt-1">
                    ⭐️⭐️⭐️⭐️⭐️ <small className="fw-semibold text-secondary">5.0</small>
                  </div>
                </div>
              </div>
              <h6 className="fw-semibold mb-1">Excellent Service</h6>
              <div className="scroll-text text-muted">
                <p>
                  "Excellent service and an equally involved team. I opted for the Relax
                  plan and got a good deal on my property. Highly recommended app!"
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* More Testimonials link */}
        <div className="text-center mt-5">
          <a href="#" className="more-link">
            More Testimonials
          </a>
        </div>
      </section>

      {/* SECTION-4 */}
      <section
        className="app-section py-5"
        style={{
          backgroundColor: "#ffffff",
        }}
      >
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-center">
          {/* === LEFT IMAGE === */}
          <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
            <img
              src="https://assets.nobroker.in/nb-new/public/Home/homeAppPromotion.png"
              alt="NoBroker App Preview"
              className="img-fluid"
              style={{
                maxWidth: "480px",
                height: "auto",
              }}
            />
          </div>

          {/* === RIGHT TEXT & BUTTONS === */}
          <div className="col-12 col-md-6 text-center text-md-start ps-md-5">
            <h2
              className="fw-semibold mb-3"
              style={{
                color: "#FF4A4A",
                fontSize: "2rem",
              }}
            >
              Find A New Home On The Go
            </h2>
            <br />  <br />
            <p
              className="fw-semibold mb-2"
              style={{
                color: "#000",
                fontSize: "1.1rem",
              }}
            >
              Download our app
            </p>

            <p className="text-muted mb-4" style={{ fontSize: "0.95rem" }}>
              Where convenience is at your fingertip
            </p>

            <br />  <br />

            <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-3">
              <img
                src={GooglePlay}
                alt="Get it on Google Play"
                className="store-btn"
                style={{
                  width: "150px",
                  height: "auto",
                  cursor: "pointer",
                }}
              />
              <img
                src={Apple}
                alt="Download on the App Store"
                className="store-btn"
                style={{
                  width: "135px",
                  height: "auto",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>
        </div>
      </section>


      {/* Section - 4 */}

      <div className="realestate-container">
        <div className="menu-tabs center">
          <span
            className={`tab ${activeTab === "flatsForSale" ? "active" : ""}`}
            onClick={() => setActiveTab("flatsForSale")}
          >
            Properties & Flats for Sale
          </span>
          <span
            className={`tab ${activeTab === "pgHostels" ? "active" : ""}`}
            onClick={() => setActiveTab("pgHostels")}
          >
            PG / Hostels
          </span>
          <span
            className={`tab ${activeTab === "flatmates" ? "active" : ""}`}
            onClick={() => setActiveTab("flatmates")}
          >
            Flatmates
          </span>
          <span
            className={`tab ${activeTab === "miscellaneous" ? "active" : ""}`}
            onClick={() => setActiveTab("miscellaneous")}
          >
            Miscellaneous
          </span>
          <span
            className={`tab ${activeTab === "commercial" ? "active" : ""}`}
            onClick={() => setActiveTab("commercial")}
          >
            Commercial
          </span>
          <span
            className={`tab ${activeTab === "newProjects" ? "active" : ""}`}
            onClick={() => setActiveTab("newProjects")}
          >
            New Projects & Plots
          </span>
          <span
            className={`tab ${activeTab === "independentHouses" ? "active" : ""}`}
            onClick={() => setActiveTab("independentHouses")}
          >
            Independent Houses & Villas
          </span>
        </div>

        <div className="menu-content">{renderContent()}</div>


        <div className="menu-content">
          <div className="menu-inner">{renderContent()}</div>
        </div>
      </div>

      {/* SECTION--FOOTER */}
      <div className="nobroker-section">
        <div className="container-fluid py-5 px-md-5">
          <h4 className="fw-bold mb-4">NoBroker services</h4>

          <div className="row gx-5">
            {/* Buy Section */}
            <div className="col-md-6 mb-5">
              <h6 className="fw-semibold mb-3 text-start">Buy</h6>
              <div className="d-flex flex-wrap gap-2">
                {buyServices.map((service, idx) => (
                  <span key={idx} className="service-chip">
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Rent Section */}
            <div className="col-md-6 mb-5">
              <h6 className="fw-semibold mb-3 text-start">Rent</h6>
              <div className="d-flex flex-wrap gap-2">
                {rentServices.map((service, idx) => (
                  <span key={idx} className="service-chip">
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}





        <div className="cta-section">
          <div className="container d-flex flex-column flex-md-row justify-content-center align-items-stretch px-md-5">
            {/* Left Section */}
            <div className="cta-box d-flex flex-column justify-content-center align-items-center text-center flex-fill">
              <h6 className="fw-semibold mb-1">Find Property</h6>
              <p className="text-muted small mb-2">
                Select from thousands of options, without brokerage.
              </p>
              <button className="btn btn-dark btn-sm mt-2">Find Now</button>
            </div>

            {/* Divider */}
            <div className="divider-wrapper d-none d-md-flex justify-content-center align-items-center">
              <div className="cta-divider"></div>
            </div>

            {/* Right Section */}
            <div className="cta-box d-flex flex-column justify-content-center align-items-center text-center flex-fill">
              <h6 className="fw-semibold mb-1">List Your Property</h6>
              <p className="text-muted small mb-2">
                For Free. Without any brokerage.
              </p>
              <button className="btn btn-dark btn-sm mt-2">Free Posting</button>
            </div>
          </div>
        </div>




        {/* Footer Section */}
        <footer className="footer-section">
          <div className="container text-center">
            {/* Top Footer Links */}
            <div className="footer-top-links d-flex flex-wrap justify-content-center gap-4 mb-4">
              <span>About Us</span>
              <span>Careers</span>
              <span>Terms & Conditions</span>
              <span>Privacy Policy</span>
              <span>Testimonials</span>
              <span>Sitemap</span>
              <span>FAQs</span>
            </div>

            {/* Divider Line */}
            <hr className="footer-divider" />

            {/* App Store Buttons */}
            <div className="d-flex justify-content-center align-items-center gap-4 mb-4">
              <img
                src={GooglePlay}
                alt="Get it on Google Play"
                className="store-btn"
              />
              <img
                src={Apple}
                alt="Download on the App Store"
                className="store-btn"
              />
            </div>

            {/* Social Icons */}
            <div className="d-flex justify-content-center align-items-center gap-4 mb-3">
              <div className="social-circle"><FaFacebookF /></div>
              <div className="social-circle"><FaTwitter /></div>
              <div className="social-circle"><FaInstagram /></div>
              <div className="social-circle"><FaLinkedinIn /></div>
              <div className="social-circle"><FaYoutube /></div>
            </div>

            {/* Copyright */}
            <small className="text-muted">
              © 2025 NoBroker Technologies Solutions Pvt. Ltd.
            </small>
          </div>
        </footer>


      </div>

    </div>
  );
};

export default BusinessAssist;
