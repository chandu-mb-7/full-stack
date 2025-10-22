

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import experianLogo from "../assets/experian_logo.svg";


import { FaPhoneAlt, FaMapMarkerAlt, FaUserCircle } from "react-icons/fa";



const NoBrokerForNRIs = () => {
  const isLoggedIn = true;
  const userName = "Chandu";


  const toggleReadMore = () => setExpanded(!expanded);
  const [expanded, setExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState("tenure");

  // 🔹 EMI Tabs
  const [activeTabs, setActiveTabs] = useState("emi");


  // 🔹 EMI State
  const [loanAmount, setLoanAmount] = useState(3000000);
  const [interestRate, setInterestRate] = useState(8.4);
  const [loanTenure, setLoanTenure] = useState(20);

  // 🔹 Eligibility State
  const [monthlyIncome, setMonthlyIncome] = useState(100000);
  const [otherEmi, setOtherEmi] = useState(0);

  // ✅ EMI Formula
  const monthlyRate = interestRate / 12 / 100;
  const months = loanTenure * 12;
  const emi =
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);
  const totalAmount = emi * months;
  const totalInterest = totalAmount - loanAmount;

  // ✅ Eligibility Calculation
  // Assuming 50% of income available for EMI after other EMIs
  const availableIncome = monthlyIncome * 0.5 - otherEmi;
  const eligibleLoan =
    (availableIncome *
      (Math.pow(1 + monthlyRate, months) - 1)) /
    (monthlyRate * Math.pow(1 + monthlyRate, months));

  const formatRupees = (num) =>
    "₹ " + num.toLocaleString("en-IN", { maximumFractionDigits: 0 });

  const banks = [
    {
      name: "Indian Bank",
      rate: "7.4% Onwards",
      tenure: "30 Years",
      logo: "https://storage.googleapis.com/uniview-cdn-galaxy/univw-cloud/indian_bank.jpeg",
    },
    {
      name: "Bank of Baroda Regular Home Loan",
      rate: "7.45% Onwards",
      tenure: "30 Years",
      logo: "https://hood-cdn.nobrokerhood.com/hood-static-contents/uniview/bob.svg",
    },
    {
      name: "SBI Regular Home Loan",
      rate: "7.5% Onwards",
      tenure: "25 Years",
      logo: "https://hood-cdn.nobrokerhood.com/hood-static-contents/uniview/sbi.svg",
    },
    {
      name: "HDFC Regular Home Loan",
      rate: "7.6% Onwards",
      tenure: "30 Years",
      logo: "https://hood-cdn.nobrokerhood.com/hood-static-contents/uniview/hdfc.svg",
    },
    {
      name: "Bajaj Regular Home Loan - Resale",
      rate: "7.6% Onwards",
      tenure: "30 Years",
      logo: "https://hood-cdn.nobrokerhood.com/hood-static-contents/uniview/hdfc.svg",
    },
    {
      name: "Godrej Finance Regular Home Loan",
      rate: "7.7% Onwards",
      tenure: "30 Years",
      logo: "https://hood-cdn.nobrokerhood.com/hood-static-contents/uniview/godrej_logo.svg",
    },
    {
      name: "Axis Regular Home Loan",
      rate: "7.6% Onwards",
      tenure: "30 Years",
      logo: "https://hood-cdn.nobrokerhood.com/hood-static-contents/uniview/axis.svg",
    },
    {
      name: "ICICI Regular Home Loan",
      rate: "7.65% Onwards",
      tenure: "30 Years",
      logo: "https://hood-cdn.nobrokerhood.com/hood-static-contents/uniview/icici.svg",
    },
    {
      name: "Bank of Maharashtra",
      rate: "7.35% Onwards",
      tenure: "30 Years",
      logo: "https://cdn.univw.ai/univw-cloud/bom.png",
    },
    {
      name: "Kotak Home Loan - with Insurance",
      rate: "7.75% Onwards",
      tenure: "25 Years",
      logo: "https://hood-cdn.nobrokerhood.com/hood-static-contents/uniview/kotak.svg",
    },
  ];

  // bank order for each tab
  const getRandomBanks = () => [...banks].sort(() => 0.5 - Math.random());

  const displayedBanks =
    activeTab === "lowest"
      ? getRandomBanks().slice(0, 6)
      : activeTab === "funding"
        ? getRandomBanks().slice(4, 10)
        : banks;




  return (


    <div className="position-relative">

      <div>
        <nav
          className="navbar navbar-light bg-white shadow-sm fixed-top py-2"
          style={{ zIndex: 2000 }}
        >
          <div className="container-fluid d-flex justify-content-between align-items-center px-4">
            {/* ===== Left: Logo ===== */}
            <div className="d-flex align-items-center">
              <img
                src="https://assets.nobroker.in/static/img/logos/nb_logo_new_trans.svg"
                alt="NoBroker Logo"
                style={{ height: "32px" }}
              />
            </div>

            {/* ===== Right: Buttons + Profile ===== */}
            <div className="d-flex align-items-center gap-3">
              {/* Phone */}
              <button
                className="btn btn-outline-success d-flex align-items-center px-3 py-1"
                style={{
                  borderRadius: "8px",
                  fontWeight: "500",
                  color: "#00838f",
                  borderColor: "#00838f",
                }}
              >
                <FaPhoneAlt className="me-2" />
                +918045643485
              </button>

              {/* City */}
              <button
                className="btn btn-outline-success d-flex align-items-center px-3 py-1"
                style={{
                  borderRadius: "8px",
                  fontWeight: "500",
                  color: "#00838f",
                  borderColor: "#00838f",
                }}
              >
                <FaMapMarkerAlt className="me-2" />
                Bangalore
              </button>

              {/* Profile / Login */}
              {isLoggedIn ? (
                <div className="d-flex align-items-center ms-2">
                  <FaUserCircle
                    size={22}
                    className="me-2 text-secondary"
                    style={{ cursor: "pointer" }}
                  />
                  <span className="fw-semibold text-dark">{userName}</span>
                  <span className="ms-1 text-muted" style={{ fontSize: "0.8rem" }}>
                    ▼
                  </span>
                </div>
              ) : (
                <button
                  className="btn btn-outline-success px-3 py-1"
                  style={{
                    borderRadius: "8px",
                    fontWeight: "500",
                    color: "#00838f",
                    borderColor: "#00838f",
                  }}
                >
                  Login / Signup
                </button>
              )}
            </div>
          </div>
        </nav>
      </div>

      {/* 🔹 Hero Section */}

      <div
        className="position-relative text-white container-fluid hero-section"
        style={{
          background: "radial-gradient(circle at center, #1e1b4b 0%, #1b1644 100%)",
          minHeight: "600px",
          marginTop: "70px",
          width: "70%",
          overflow: "hidden",


        }}
      >


        {/* Content container */}
        <div className="container position-relative" style={{ zIndex: 2, paddingTop: "90px" }}>
          <div className="row align-items-start" style={{ minHeight: "100%" }}>

            <div className="col-lg-7 text-start">

              {/* Left Content */}
              <h2 className="fw-bold mb-3">
                Avail Doorstep Assistance For Your Home Loan
              </h2>
              <p className="mb-5 text-light">Fastest Sanction in 7 days from 15+ Banks</p>

              {/* Scrollable Banner Row */}
              <div
                className="d-flex overflow-auto pb-2"
                style={{
                  gap: "20px",
                  scrollBehavior: "smooth",
                  WebkitOverflowScrolling: "touch",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
                onWheel={(e) => e.currentTarget.scrollBy({ left: e.deltaY, behavior: "smooth" })}
              >
                <style>  {`  .d-flex::-webkit-scrollbar {  display: none; }   `}
                </style>

                {/* Banner 1 */}
                <div
                  className="card border-0 shadow-sm flex-shrink-0"
                  style={{
                    width: "560px",
                    height: "200px",
                    borderRadius: "10px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="https://assets.nobroker.in/nob-interior/home_loan_cx_banner_1.webp"
                    alt="Banner 1"
                    className="img-fluid w-100 h-100"
                    style={{ objectFit: "fill" }}
                  />
                </div>

                {/* Banner 2 */}
                <div
                  className="card border-0 shadow-sm flex-shrink-0"
                  style={{
                    width: "560px",
                    height: "200px",
                    borderRadius: "10px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="https://assets.nobroker.in/nob-interior/home_loan_cx_banner_2.webp"
                    alt="Banner 2"
                    className="img-fluid w-100 h-100"
                    style={{ objectFit: "fill" }}
                  />
                </div>
                {/* Banner 2 */}
                <div
                  className="card border-0 shadow-sm flex-shrink-0"
                  style={{
                    width: "560px",
                    height: "200px",
                    borderRadius: "10px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src=" https://assets.nobroker.in/nob-interior/home_loan_cx_banner_3.webp  "
                    alt="Banner 2"
                    className="img-fluid w-100 h-100"
                    style={{ objectFit: "fill" }}
                  />
                </div>

              </div>



              {/* --- Free Sale Agreement Box --- */}

              <div className="card shadow-sm border-0 p-3 d-flex align-items-center justify-content-between free-sale-card flex-row">
                <div className="d-flex align-items-center">
                  <div className="border-start border-success border-4 rounded-start me-3 ps-3">
                    <img
                      src="https://assets.nobroker.in/hs-new/public/LegalServices/upload_draft.svg"
                      alt="Agreement Icon"
                      style={{ height: "45px", width: "45px" }}
                    />
                  </div>

                  <div>
                    <p className="fw-semibold mb-1">Free Sale Agreement Draft</p>
                    <p className="text-muted mb-1" style={{ fontSize: "0.9rem" }}>
                      On applying through NoBroker
                    </p>
                    <p className="mb-1">
                      <span className="text-muted text-decoration-line-through me-1">₹5000</span>
                      <span className="text-success fw-bold">FREE</span>
                    </p>
                  </div>
                </div>

                <button className="btn btn-check-now fw-semibold btn-success">
                  Check Now! <span className="ms-1">»»</span>
                </button>

              </div>



            </div>



            {/* Right side form  */}

            <div className="col-lg-5 position-fixed">
              <div
                className="position-fixed "
                style={{ top: "130px", width: "600px", left: "55%", zIndex: 5 }}
              >

                <div className="card eligibility-card p-4 shadow-sm border-0   ">

                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="fw-bold m-0">Check Your Eligibility Instantly</h5>
                    <img
                      src={experianLogo}
                      alt="Experian"
                      className="experian-logo"
                      style={{ height: "100px", width: "100px" }}
                    />
                  </div>




                  <form>
                    <div className="mb-3">
                      <label className="form-label">Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Eg. Mahesh Kumar"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Mobile Number *</label>
                      <div className="input-group">
                        <span className="input-group-text">+91</span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Eg. 1231231234"
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label">
                        Property Finalized? *
                      </label>
                      <div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="finalized"
                            id="yes"
                          />
                          <label className="form-check-label" htmlFor="yes">
                            Yes
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="finalized"
                            id="no"
                          />
                          <label className="form-check-label" htmlFor="no">
                            No
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="form-check small mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="consent"
                        defaultChecked
                      />
                      <label className="form-check-label text-muted" htmlFor="consent">
                        I consent to NoBroker being appointed as your authorized representative
                        to receive your credit info from Experian.{" "}
                        <a href="#" className="text-decoration-none">
                          T&C apply
                        </a>
                      </label>
                    </div>

                    <button type="button" className="btn btn-danger w-100 py-2 fw-bold">
                      Check Eligibility
                    </button>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>




      {/* 🔹 Below content with shadow boxes */}



      <div className="container my-5">

        <div className="col-lg-7 col-md-9 col-sm-12">
          <div className="p-4 bg-white shadow-sm rounded-4 mb-4">
            <p className="section-description">
              NoBroker Home Loan: Low Rates, High Approvals, Zero Hassle
              Obtaining a home loan is easier now than before. NoBroker Home Loans gives you a digital-first,
              transparent, and hassle-free experience for today's Indian home buyer. Traditional banks may have
              hidden fees and long processes. NoBroker has competitive interest rates (starting from 8.2% p.a.) with
              no brokerage and no hidden fees.
            </p>
            <p className="section-description">
              The entire process is completely online. You can check your eligibility instantly, submit your documents
              digitally, and get approval in as little as 7 working days. You have flexible salaried and self-employed
              options, and you can finance up to 90% of the property value with doorstep documentation support.
              You save time and money with NoBroker, allowing you to get into your home faster, smarter, and
              simpler than ever before.
            </p>
          </div>




          {/* 🔹 Property Management Section */}
          <div className="container my-5">
            <div className=" bg-white shadow-sm rounded-3  overflow-hidden">
              {/* Main Image */}
              <div className="text-center mb-4 card p-3 border-0 shadow-sm">
                <h3 className="fw-bold mb-3">
                  Your <span className="text-primary">Loan Journey</span> starts here
                </h3>
                <video
                  className="w-100 rounded"
                  src="https://images.nobroker.in/uniview/interiors/misc/hl_cx_page_2.mp4"
                  controls
                  style={{
                    maxHeight: "400px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>





          {/* ===== LOAN STEPS SECTION ===== */}
          <div className="container my-5">
            <div className="bg-white shadow-sm rounded-4 p-5 text-center">
              <h2 className="fw-bold mb-3">
                <span className="text-danger">Confused</span> on which bank to choose for your Home Loan?
              </h2>
              <p className="text-muted mb-5">
                Get Free Home Loan disbursed in 3 easy steps
              </p>

              {/* Steps Row */}
              <div className="row justify-content-center align-items-start position-relative">
                {/* Dotted Line Connector */}
                <div
                  className="position-absolute"
                  style={{
                    top: "50px",
                    left: "10%",

                    borderTop: "2px dotted #ccc",
                    zIndex: 1,
                  }}
                ></div>

                {/* Step 1 */}
                <div className="col-12 col-md-4 d-flex flex-column align-items-center mb-4 mb-md-0 position-relative">
                  <div
                    className="rounded-circle bg-light d-flex align-items-center justify-content-center shadow-sm mb-3"
                    style={{
                      width: "100px",
                      height: "100px",
                      zIndex: 2,
                    }}
                  >
                    <img
                      src="https://assets.nobroker.in/nb-new/public/HomeLoan/fill_details.png"
                      alt="Fill Details"
                      style={{ width: "60px", height: "60px" }}
                    />
                  </div>
                  <h5 className="fw-bold mt-2">Fill Details</h5>
                  <p className="text-muted small px-3">
                    Provide your contact details and check Loan Amount Eligibility.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="col-12 col-md-4 d-flex flex-column align-items-center mb-4 mb-md-0 position-relative">
                  <div
                    className="rounded-circle bg-light d-flex align-items-center justify-content-center shadow-sm mb-3"
                    style={{
                      width: "100px",
                      height: "100px",
                      zIndex: 2,
                    }}
                  >
                    <img
                      src="https://assets.nobroker.in/nb-new/public/HomeLoan/max_funding.png"
                      alt="Max Funding"
                      style={{ width: "60px", height: "60px" }}
                    />
                  </div>
                  <h5 className="fw-bold mt-2">Max Funding</h5>
                  <p className="text-muted small px-3">
                    Get up to 90% of property’s value as home loan from the bank of your choice.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="col-12 col-md-4 d-flex flex-column align-items-center position-relative">
                  <div
                    className="rounded-circle bg-light d-flex align-items-center justify-content-center shadow-sm mb-3"
                    style={{
                      width: "100px",
                      height: "100px",
                      zIndex: 2,
                    }}
                  >
                    <img
                      src="https://assets.nobroker.in/nb-new/public/HomeLoan/no_hidden.png"
                      alt="No Hidden Charges"
                      style={{ width: "60px", height: "60px" }}
                    />
                  </div>
                  <h5 className="fw-bold mt-2">No Hidden Charges</h5>
                  <p className="text-muted small px-3">
                    Get Home Loan services from NoBroker without paying any fees.
                  </p>
                </div>
              </div>
            </div>
          </div>









          {/* 🔹 Banking Partners */}

          <div className="container my-5">
            <div className=" bg-white shadow-sm rounded-4">

              <div className="container">
                <h3 className="fw-bold mb-4">Our Banking Partners</h3>

                {/* Tabs */}
                <div className="d-flex gap-2 mb-4 flex-wrap">
                  <button
                    className={`btn ${activeTab === "lowest"
                      ? "btn-primary text-white"
                      : "btn-outline-secondary"
                      } rounded-pill px-4 py-2`}
                    onClick={() => setActiveTab("lowest")}
                  >
                    Lowest Interest
                  </button>
                  <button
                    className={`btn ${activeTab === "tenure"
                      ? "btn-primary text-white"
                      : "btn-outline-secondary"
                      } rounded-pill px-4 py-2`}
                    onClick={() => setActiveTab("tenure")}
                  >
                    Max Tenure
                  </button>
                  <button
                    className={`btn ${activeTab === "funding"
                      ? "btn-primary text-white"
                      : "btn-outline-secondary"
                      } rounded-pill px-4 py-2`}
                    onClick={() => setActiveTab("funding")}
                  >
                    Max Funding
                  </button>
                </div>

                <hr className="mb-4" />

                {/* Banks Grid */}
                <div className="row g-3">
                  {displayedBanks.map((bank, index) => (
                    <div key={index} className="col-12 col-md-6">
                      <div
                        className="d-flex align-items-center justify-content-between border rounded-3 p-3 shadow-sm bg-white"
                        style={{ borderColor: "#ccc" }}
                      >
                        <div className="d-flex align-items-center">
                          <img
                            src={bank.logo}
                            alt={bank.name}
                            className="me-3"
                            style={{
                              width: "80px",
                              height: "50px",
                              objectFit: "contain",
                            }}
                          />
                          <div className="text-start">
                            <h6 className="fw-bold mb-1">{bank.name}</h6>
                            <p className="mb-0 text-muted small">
                              Interest Rate:{" "}
                              <span className="fw-semibold text-dark">
                                {bank.rate}
                              </span>
                            </p>
                            <p className="mb-0 text-muted small">
                              Max Tenure:{" "}
                              <span className="fw-semibold text-dark">
                                {bank.tenure}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>




            {/* ===== EMI CALCULATOR ===== */}

            <div className="container my-5">
              <div className=" bg-white shadow-sm rounded-4  overflow-hidden">



                <div className="container bg-white shadow-sm rounded-4 p-4">

                  {/* ===== Tabs ===== */}
                  <ul className="nav nav-pills mb-4 rounded-4 shadow-sm bg-light p-2">
                    <li className="nav-item flex-fill">
                      <button
                        className={`nav-link w-100 fw-semibold ${activeTabs === "emi" ? "active" : ""
                          }`}
                        onClick={() => setActiveTabs("emi")}
                        style={{
                          borderRadius: "10px",
                          backgroundColor:
                            activeTabs === "emi" ? "#5a4ce2" : "transparent",
                          color: activeTabs === "emi" ? "#fff" : "#000",
                          boxShadow:
                            activeTabs === "emi"
                              ? "0px 2px 5px rgba(0,0,0,0.15)"
                              : "none",
                        }}
                      >
                        EMI Calculator
                      </button>
                    </li>
                    <li className="nav-item flex-fill">
                      <button
                        className={`nav-link w-100 fw-semibold ${activeTabs === "eligibility" ? "active" : ""
                          }`}
                        onClick={() => setActiveTabs("eligibility")}
                        style={{
                          borderRadius: "10px",
                          backgroundColor:
                            activeTabs === "eligibility" ? "#5a4ce2" : "transparent",
                          color: activeTabs === "eligibility" ? "#fff" : "#000",
                          boxShadow:
                            activeTabs === "eligibility"
                              ? "0px 2px 5px rgba(0,0,0,0.15)"
                              : "none",
                        }}
                      >
                        Eligibility Calculator
                      </button>
                    </li>
                  </ul>

                  {/* ===== EMI CALCULATOR ===== */}
                  {activeTabs === "emi" && (
                    <div>
                      {/* Loan Amount */}
                      <div className="mb-4">
                        <label className="fw-semibold mb-2">Loan Amount</label>
                        <div className="input-group">
                          <span className="input-group-text bg-light">₹</span>
                          <input
                            type="text"
                            className="form-control"
                            value={loanAmount.toLocaleString("en-IN")}
                            readOnly
                          />
                        </div>
                        <input
                          type="range"
                          className="form-range mt-2"
                          min="100000"
                          max="10000000"
                          step="50000"
                          value={loanAmount}
                          onChange={(e) => setLoanAmount(Number(e.target.value))}
                          style={{ accentColor: "#5a4ce2" }}
                        />
                      </div>

                      {/* Interest */}
                      <div className="mb-4">
                        <label className="fw-semibold mb-2">
                          Rate of Interest (P.A)
                        </label>
                        <div className="input-group">
                          <span className="input-group-text bg-light">%</span>
                          <input
                            type="text"
                            className="form-control"
                            value={interestRate}
                            readOnly
                          />
                        </div>
                        <input
                          type="range"
                          className="form-range mt-2"
                          min="5"
                          max="15"
                          step="0.1"
                          value={interestRate}
                          onChange={(e) => setInterestRate(Number(e.target.value))}
                          style={{ accentColor: "#5a4ce2" }}
                        />
                      </div>

                      {/* Tenure */}
                      <div className="mb-4">
                        <label className="fw-semibold mb-2">Loan Tenure</label>
                        <div className="input-group">
                          <span className="input-group-text bg-light">Yr</span>
                          <input
                            type="text"
                            className="form-control"
                            value={loanTenure}
                            readOnly
                          />
                        </div>
                        <input
                          type="range"
                          className="form-range mt-2"
                          min="1"
                          max="30"
                          value={loanTenure}
                          onChange={(e) => setLoanTenure(Number(e.target.value))}
                          style={{ accentColor: "#5a4ce2" }}
                        />
                      </div>

                      {/* Results */}
                      <div className="bg-light p-4 rounded-3 d-flex flex-wrap justify-content-between mt-4">
                        <div>
                          <p className="text-muted mb-1 small">Monthly EMI</p>
                          <h4 className="fw-bold text-primary">
                            {formatRupees(Math.round(emi))}
                          </h4>
                          <p className="text-muted mb-1 small">Total Interest</p>
                          <h5 className="fw-bold text-primary">
                            {formatRupees(Math.round(totalInterest))}
                          </h5>
                        </div>

                        <div className="text-end">
                          <p className="text-muted mb-1 small">Principal Amount</p>
                          <h4 className="fw-bold text-primary">
                            {formatRupees(loanAmount)}
                          </h4>
                          <p className="text-muted mb-1 small">Total Amount</p>
                          <h5 className="fw-bold text-primary">
                            {formatRupees(Math.round(totalAmount))}
                          </h5>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ===== ELIGIBILITY CALCULATOR ===== */}
                  {activeTabs === "eligibility" && (
                    <div>
                      {/* Loan Amount */}
                      <div className="mb-4">
                        <label className="fw-semibold mb-2">Loan Amount</label>
                        <div className="input-group">
                          <span className="input-group-text bg-light">₹</span>
                          <input
                            type="text"
                            className="form-control"
                            value={loanAmount.toLocaleString("en-IN")}
                            readOnly
                          />
                        </div>
                        <input
                          type="range"
                          className="form-range mt-2"
                          min="100000"
                          max="10000000"
                          step="50000"
                          value={loanAmount}
                          onChange={(e) => setLoanAmount(Number(e.target.value))}
                          style={{ accentColor: "#5a4ce2" }}
                        />
                      </div>

                      {/* Monthly Income */}
                      <div className="mb-4">
                        <label className="fw-semibold mb-2">Monthly Income</label>
                        <div className="input-group">
                          <span className="input-group-text bg-light">₹</span>
                          <input
                            type="text"
                            className="form-control"
                            value={monthlyIncome.toLocaleString("en-IN")}
                            readOnly
                          />
                        </div>
                        <input
                          type="range"
                          className="form-range mt-2"
                          min="10000"
                          max="500000"
                          step="5000"
                          value={monthlyIncome}
                          onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                          style={{ accentColor: "#5a4ce2" }}
                        />
                      </div>

                      {/* Other EMI */}
                      <div className="mb-4">
                        <label className="fw-semibold mb-2">Other EMI</label>
                        <div className="input-group">
                          <span className="input-group-text bg-light">₹</span>
                          <input
                            type="text"
                            className="form-control"
                            value={otherEmi.toLocaleString("en-IN")}
                            readOnly
                          />
                        </div>
                        <input
                          type="range"
                          className="form-range mt-2"
                          min="0"
                          max="200000"
                          step="1000"
                          value={otherEmi}
                          onChange={(e) => setOtherEmi(Number(e.target.value))}
                          style={{ accentColor: "#5a4ce2" }}
                        />
                      </div>

                      {/* Interest */}
                      <div className="mb-4">
                        <label className="fw-semibold mb-2">
                          Rate of Interest (P.A)
                        </label>
                        <div className="input-group">
                          <span className="input-group-text bg-light">%</span>
                          <input
                            type="text"
                            className="form-control"
                            value={interestRate}
                            readOnly
                          />
                        </div>
                        <input
                          type="range"
                          className="form-range mt-2"
                          min="5"
                          max="15"
                          step="0.1"
                          value={interestRate}
                          onChange={(e) => setInterestRate(Number(e.target.value))}
                          style={{ accentColor: "#5a4ce2" }}
                        />
                      </div>

                      {/* Tenure */}
                      <div className="mb-4">
                        <label className="fw-semibold mb-2">Loan Tenure</label>
                        <div className="input-group">
                          <span className="input-group-text bg-light">Yr</span>
                          <input
                            type="text"
                            className="form-control"
                            value={loanTenure}
                            readOnly
                          />
                        </div>
                        <input
                          type="range"
                          className="form-range mt-2"
                          min="1"
                          max="30"
                          value={loanTenure}
                          onChange={(e) => setLoanTenure(Number(e.target.value))}
                          style={{ accentColor: "#5a4ce2" }}
                        />
                      </div>

                      {/* Results */}
                      <div className="bg-light p-4 rounded-3 d-flex flex-wrap justify-content-between mt-4">
                        <div>
                          <p className="text-muted mb-1 small">Estimated EMI</p>
                          <h4 className="fw-bold text-primary">
                            {formatRupees(Math.round(emi))}
                          </h4>
                        </div>

                        <div className="text-end">
                          <p className="text-muted mb-1 small">Eligible Loan Amount</p>
                          <h4 className="fw-bold text-primary">
                            {formatRupees(Math.round(eligibleLoan))}
                          </h4>
                        </div>
                      </div>
                    </div>
                  )}
                </div>



              </div>
            </div>


            {/* custumer review  */}

            <div
              className="container my-4 p-4 shadow"
              style={{
                borderRadius: "15px",
                overflowX: "auto",
                whiteSpace: "nowrap",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <style>
                {`
      /* Hide outer horizontal scrollbar */
      .container::-webkit-scrollbar { display: none; }

      /* Smooth upward scrolling for long text */
      @keyframes verticalScroll {
        0% { transform: translateY(100%); }
        100% { transform: translateY(-100%); }
      }

     .scroll-text {
  height: 80px;        /* fixed height */
  overflow-y: auto;    /* vertical scroll */
  overflow-x: hidden;  /* hide horizontal */
  position: relative;
  padding-left: 10px;  /* leave space for the vertical bar */
  
}

/* Optional: hide scrollbar visually for cleaner look */
.scroll-text::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}

/* Remove the animation */
.scroll-text p {
  position: relative;
  margin: 0;
  white-space: normal;
  line-height: 1.4;
}

    `}
              </style>

              <h3 className="fw-bold mb-4 text-left">Testimonials</h3>

              <div
                className="d-flex justify-content-center flex-nowrap"
                style={{ gap: "20px" }}
              >
                {/* 🧍‍♂️ Testimonial 1 */}
                <div
                  className="card shadow-sm p-2 d-flex flex-column"
                  style={{
                    width: "300px",
                    borderRadius: "15px",
                    border: "none",
                    flexShrink: 0,
                    fontSize: "0.7rem",
                  }}
                >
                  <div className="d-flex align-items-center mb-2">
                    <img
                      src="https://www.nobroker.in/blog/wp-content/uploads/2024/09/Brajesh-Kumar122.jpg"
                      alt="Brajesh Kumar"
                      className="rounded-circle me-3"
                      style={{
                        width: "55px",
                        height: "55px",
                        objectFit: "cover",
                      }}
                    />
                    <div>
                      <h6 className="fw-semibold mb-0">
                        BRAJESH KUMAR <span className="text-success">✔</span>
                      </h6>
                      <small className="text-muted">🇬🇧 UK</small>
                      <div className="text-warning mt-1">
                        ⭐️⭐️⭐️⭐️⭐️{" "}
                        <small className="fw-semibold text-secondary">5.0</small>
                      </div>
                    </div>
                  </div>

                  <div className="scroll-text text-muted">
                    <p>
                      NoBroker is truly a genie in the bottle when it comes to renting your
                      apartment. Thanks to my relationship manager & field RMs who helped me
                      close the deal. From tenant sourcing to finalizing the rent agreement,
                      everything was handled perfectly and professionally.
                    </p>
                  </div>
                </div>

                {/* 🧍‍♂️ Testimonial 2 */}
                <div
                  className="card shadow-sm p-2 d-flex flex-column"
                  style={{
                    width: "300px",
                    borderRadius: "15px",
                    border: "none",
                    flexShrink: 0,
                    fontSize: "0.7rem",
                  }}
                >
                  <div className="d-flex align-items-center mb-2">
                    <img
                      src="https://www.nobroker.in/blog/wp-content/uploads/2024/09/Naveen-Sahay.jpg"
                      alt="Naveen Sahay"
                      className="rounded-circle me-3"
                      style={{
                        width: "55px",
                        height: "55px",
                        objectFit: "cover",
                      }}
                    />
                    <div>
                      <h6 className="fw-semibold mb-0">
                        NAVEEN SAHAY <span className="text-success">✔</span>
                      </h6>
                      <small className="text-muted">🇺🇸 USA</small>
                      <div className="text-warning mt-1">
                        ⭐️⭐️⭐️⭐️⭐️{" "}
                        <small className="fw-semibold text-secondary">5.0</small>
                      </div>
                    </div>
                  </div>

                  <div className="scroll-text text-muted">
                    <p>
                      Really happy with the service! NoBroker rented out my property in less
                      than a month. The tenants were well screened, and they completed
                      repairs quickly while being very proactive in communication. Always
                      easy to reach and attentive to all my questions.
                    </p>
                  </div>
                </div>

                {/* 🧍‍♂️ Testimonial 3 */}
                <div
                  className="card shadow-sm p-2 d-flex flex-column"
                  style={{
                    width: "300px",
                    borderRadius: "15px",
                    border: "none",
                    flexShrink: 0,
                    fontSize: "0.7rem",
                  }}
                >
                  <div className="d-flex align-items-center mb-2">
                    <img
                      src="https://www.nobroker.in/blog/wp-content/uploads/2024/09/Waman-Rayadurg.jpg"
                      alt="Waman Rayadurg"
                      className="rounded-circle me-3"
                      style={{
                        width: "55px",
                        height: "55px",
                        objectFit: "cover",
                      }}
                    />
                    <div>
                      <h6 className="fw-semibold mb-0">
                        WAMAN RAYADURG <span className="text-success">✔</span>
                      </h6>
                      <small className="text-muted">🇮🇳 INDIA</small>
                      <div className="text-warning mt-1">
                        ⭐️⭐️⭐️⭐️⭐️{" "}
                        <small className="fw-semibold text-secondary">5.0</small>
                      </div>
                    </div>
                  </div>

                  <div className="scroll-text text-muted">
                    <p>
                      The Property Management Team is prompt and efficient. I don’t have to
                      worry as they find tenants quickly, collect rent on time, and handle
                      all documentation with complete professionalism and care. Excellent
                      service overall.
                    </p>
                  </div>
                </div>
              </div>
            </div>










            {/* info section */}




            <div className="container my-5">
              <div className="bg-white shadow-sm rounded-4 overflow-hidden p-4">

                <div className="container">
                  {/* ================= HERO INTRO ================= */}

                  <div className="container">
                    {/* ================= HERO INTRO ================= */}
                    <h4 className="fw-bold mb-3">
                      Home Loans in India: Compare, Apply & Get Approved Online with{" "}
                      NoBroker
                    </h4>
                    <p>
                      Owning a home is a lifelong aspiration for many Indians. And whether
                      it is through purchasing a flat, constructing a new house, or
                      renovating a current property, having a home loan will make it
                      possible. However, with a variety of lenders, schemes, and interest
                      rates, selecting the appropriate house loan finance can be painful.
                    </p>

                    <p>
                      NoBroker Home Loan Services is where you can plug in. We work with
                      leading 15+ banks and NBFCs, including SBI, HDFC, ICICI, Axis, LIC,
                      PNB, Bank of Baroda, Bajaj Finserv, TATA Capital, and NAVI, to offer:
                    </p>

                    <ul>
                      <li>Lowest home loan interest rates</li>
                      <li>Instant eligibility checks</li>
                      <li>Transparent comparisons across banks</li>
                      <li>100% digital process with assistance from home loan experts</li>
                      <li>Doorstep document collection and faster disbursal</li>
                    </ul>

                    <p className="fw-semibold">
                      Are you ready to fulfil your dream home?
                    </p>

                    {/* ================= WHY NOBROKER ================= */}
                    <h3 className="mt-5 fw-bold">Why Use NoBroker for Home Loans?</h3>
                    <p>
                      Selecting the ideal loan bank can save you lakhs of money. When you
                      finance with NoBroker, you don’t have to visit any branches, nor rely
                      on partial advice; we do it for you.
                    </p>

                    <h5 className="fw-bold">Lowest Rates Across Banks</h5>
                    <p>
                      We track the current rates of SBI (8.50%), Bank of Baroda (8.40%),
                      HDFC (8.75%), Axis (8.75%), and LIC Housing (8.50%), among others, in
                      real-time. A variation of even 0.25% could potentially save you up to
                      ₹5–10 lakh if you keep the loan for 20 years.
                    </p>

                    <h5 className="fw-bold">Quick Sanction & Disbursal</h5>
                    <p>
                      Traditional approvals take weeks. With NoBroker’s digital process,
                      you can get a sanction within 7 days and funds disbursed much faster.
                    </p>

                    <h5 className="fw-bold">Completely Transparent – No hidden charges</h5>
                    <p>
                      NoBroker does not impose service fees, unlike brokers who will direct
                      you to banks for commissions. All bank fees are clearly visible
                      upfront, with no hidden fees or surprises.
                    </p>

                    <h5 className="fw-bold">Doorstep Assistance and Loan Experts</h5>
                    <p>
                      Whether it is filling out the application forms or validating property
                      papers, your dedicated NoBroker loan expert will hand-hold you at
                      every step.
                    </p>

                    <h5 className="fw-bold">Wide Tie-ups</h5>
                    <p>
                      We work with the largest lenders from across India, including public
                      sector banks, private banks, NBFCs, and housing finance companies, so
                      that you can find home loans in India in one place.
                    </p>

                    {/* ================= TYPES OF HOME LOANS ================= */}
                    <h3 className="mt-5 fw-bold">Types of Home Loans in India</h3>
                    <p>
                      Every person has a different housing need. NoBroker will help you
                      choose the identified type based on your housing needs:
                    </p>

                    <ul>
                      <li>
                        <strong>Home Purchase Loan</strong> – To purchase a ready-to-move-in
                        house or a flat.
                      </li>
                      <li>
                        <strong>Home Construction Loan</strong> – To construct a new house
                        on a piece of land you own.
                      </li>
                      <li>
                        <strong>Home Renovation Loan</strong> – To finance repairs,
                        upgrades, or remodelling of your home.
                      </li>
                      <li>
                        <strong>Home Extension Loan</strong> – To extend a room, balcony, or
                        floor.
                      </li>
                      <li>
                        <strong>Balance Transfer Loan</strong> – To transfer your loan to
                        another bank at a cheaper rate.
                      </li>
                      <li>
                        <strong>Plot + Construction Loan</strong> – To buy a plot and build
                        on it with one combined loan.
                      </li>
                    </ul>

                    {/* ================= ELIGIBILITY ================= */}
                    <h3 className="mt-5 fw-bold">Home Loan Eligibility Criteria in India</h3>
                    <ul>
                      <li>Age – 21–70 years</li>
                      <li>
                        Income – Salaried: ₹25,000+ monthly | Self-employed: 3 years
                        business continuity
                      </li>
                      <li>Credit Score – 750+ for best rates</li>
                      <li>Employment Type – Salaried, self-employed, NRIs, govt staff</li>
                      <li>Property Value – Up to 90% of cost financed by banks</li>
                    </ul>

                    {/* ================= DOCUMENTS ================= */}
                    <h4 className="mt-4 fw-bold">Documents Required for Home Loan</h4>

                    <h5 className="mt-3">For Salaried</h5>
                    <p>
                      <strong>KYC:</strong> Aadhaar, PAN, Passport, Voter ID <br />
                      <strong>Address proof:</strong> Aadhaar, utility bills <br />
                      <strong>Income proof:</strong> Last 3–6 salary slips, Form 16, bank
                      statements <br />
                      <strong>Employment proof:</strong> Appointment letter, employee ID{" "}
                      <br />
                      <strong>Property papers:</strong> Sale deed, tax receipts, approved
                      plan
                    </p>

                    <h5 className="mt-3">For Self-Employed</h5>
                    <p>
                      <strong>KYC + Address Proof:</strong> Aadhaar, PAN, Passport, Voter
                      ID, Utility Bills <br />
                      <strong>Income Proof:</strong> 2–3 Years ITR, Profit & Loss Account,
                      Balance Sheet <br />
                      <strong>Business Proof:</strong> GST Registration, Shop License,
                      Business Registration Certificate <br />
                      <strong>Property Papers:</strong> Sale Deed, Tax Receipts, Approved
                      Building Plan
                    </p>

                    <h5 className="mt-3">For NRIs</h5>
                    <p>
                      <strong>For NRIs:</strong> Passport + Valid Visa, Overseas Address
                      Proof, NRE/NRO Bank Account Statements, Salary Slips or Overseas
                      Income Proof
                    </p>

                    {/* ================= INTEREST RATES ================= */}
                    <h3 className="mt-5 fw-bold">
                      Best Home Loan Interest Rates in India (2025)
                    </h3>
                    <p>
                      Here’s a snapshot of current rates, processing fees & tenure:
                    </p>

                    <ul className="interest-list">
                      <li>
                        <strong>SBI:</strong> 8.50% – 9.65% | 0.35% (min ₹2,000) | Up to 30
                        yrs
                      </li>
                      <li>
                        <strong>Bank of Baroda:</strong> 8.40% onwards | 0.50% | Up to 30
                        yrs
                      </li>
                      <li>
                        <strong>HDFC Bank:</strong> 8.75% onwards | 0.50% or ₹3,000–5,000 |
                        Up to 30 yrs
                      </li>
                      <li>
                        <strong>ICICI Bank:</strong> 8.70% onwards | 0.50% – 2% | Up to 30
                        yrs
                      </li>
                      <li>
                        <strong>Axis Bank:</strong> 8.75% onwards | 0.50% | Up to 30 yrs
                      </li>
                      <li>
                        <strong>LIC Housing Finance:</strong> 8.50% – 9.25% | 0.25% – 0.50%
                        | Up to 30 yrs
                      </li>
                      <li>
                        <strong>PNB:</strong> 8.55% onwards | 0.35% – 0.50% | Up to 30 yrs
                      </li>
                      <li>
                        <strong>Bank of Maharashtra:</strong> 8.60% onwards | 0.50% | Up to
                        30 yrs
                      </li>
                      <li>
                        <strong>Bajaj Finserv:</strong> 8.85% onwards | Up to 1% | Up to 25
                        yrs
                      </li>
                      <li>
                        <strong>TATA Capital:</strong> 8.90% onwards | 0.50% – 1% | Up to 30
                        yrs
                      </li>
                      <li>
                        <strong>IIFL Finance:</strong> 9.00% onwards | 0.75% – 1% | Up to 20
                        yrs
                      </li>
                      <li>
                        <strong>NAVI:</strong> 8.75% onwards | NIL (app-based) | Up to 25
                        yrs
                      </li>
                    </ul>
                  </div>



                  <h2 className="fw-bold mb-3">
                    Home Loans in India: Compare, Apply & Get Approved Online with{" "}
                    <span className="text-primary">NoBroker</span>
                  </h2>
                  <p className="text-muted">
                    Owning a home is a lifelong aspiration for many Indians. Whether it's
                    purchasing a flat, constructing a house, or renovating your property,
                    a home loan can make it possible. NoBroker helps you compare 15+ top
                    banks like SBI, HDFC, ICICI, Axis, LIC, PNB, Bank of Baroda, Bajaj
                    Finserv, TATA Capital, and NAVI — all in one place.
                  </p>

                  <ul className="styled-list">
                    <li>Lowest home loan interest rates</li>
                    <li>Instant eligibility checks</li>
                    <li>Transparent comparisons across banks</li>
                    <li>100% digital process with expert assistance</li>
                    <li>Doorstep document collection and faster disbursal</li>
                  </ul>

                  <p className="fw-semibold mt-3">
                    Are you ready to fulfil your dream home?
                  </p>

                  {/* ================= WHY NOBROKER ================= */}
                  <h3 className="mt-5 fw-bold">Why Use NoBroker for Home Loans?</h3>
                  <p className="text-muted">
                    Selecting the ideal loan bank can save you lakhs of rupees. With
                    NoBroker, you don’t need to visit branches — we do the hard work for
                    you.
                  </p>



                  {/* ================= TYPES OF HOME LOANS ================= */}
                  <h3 className="mt-5 fw-bold">Types of Home Loans in India</h3>
                  <p className="text-muted">
                    NoBroker helps you identify the best home loan type according to your
                    housing needs:
                  </p>
                  <ul className="styled-list">
                    <li>
                      <strong>Home Purchase Loan</strong> – Buy a ready-to-move-in house
                      or flat.
                    </li>
                    <li>
                      <strong>Home Construction Loan</strong> – Build a house on land you
                      own.
                    </li>
                    <li>
                      <strong>Home Renovation Loan</strong> – Finance repairs or
                      remodelling.
                    </li>
                    <li>
                      <strong>Home Extension Loan</strong> – Add a room, balcony, or extra
                      floor.
                    </li>
                    <li>
                      <strong>Balance Transfer Loan</strong> – Switch to a bank with a
                      cheaper rate.
                    </li>
                    <li>
                      <strong>Plot + Construction Loan</strong> – Buy a plot and build on
                      it with a single loan.
                    </li>
                  </ul>

                  {/* ================= ELIGIBILITY ================= */}
                  <h6 className="mt-5 fw-bold">Home Loan Eligibility Criteria in India</h6>
                  <ul className="styled-list">
                    <li>Age – 21–70 years</li>
                    <li>
                      Income – Salaried: ₹25,000+ monthly | Self-employed: 3 years of
                      business continuity
                    </li>
                    <li>Credit Score – 750+ for best interest rates</li>
                    <li>
                      Property Value – Banks finance up to 90% of the property cost (LTV)
                    </li>
                  </ul>

                  {/* ================= DOCUMENTS ================= */}
                  <h4 className="mt-4 fw-bold">Documents Required</h4>

                  <h5 className="mt-3">For Salaried</h5>
                  <table className="table table-bordered table-striped align-middle">
                    <thead className="table-light">
                      <tr>
                        <th>Category</th>
                        <th>Documents Accepted</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>KYC</td>
                        <td>Aadhaar, PAN, Passport, Voter ID</td>
                      </tr>
                      <tr>
                        <td>Address Proof</td>
                        <td>Aadhaar, utility bills</td>
                      </tr>
                      <tr>
                        <td>Income Proof</td>
                        <td>Last 3–6 salary slips, Form 16, bank statements</td>
                      </tr>
                      <tr>
                        <td>Employment Proof</td>
                        <td>Appointment letter, employee ID</td>
                      </tr>
                      <tr>
                        <td>Property Papers</td>
                        <td>Sale deed, tax receipts, approved building plan</td>
                      </tr>
                    </tbody>
                  </table>

                  <h5 className="mt-4">For Self-Employed</h5>
                  <table className="table table-bordered align-middle">
                    <thead className="table-light">
                      <tr>
                        <th>Category</th>
                        <th>Documents Accepted</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>KYC + Address Proof</td>
                        <td>Aadhaar, PAN, Passport, Voter ID, Utility Bills</td>
                      </tr>
                      <tr>
                        <td>Income Proof</td>
                        <td>2–3 years ITR, Profit & Loss Account, Balance Sheet</td>
                      </tr>
                      <tr>
                        <td>Business Proof</td>
                        <td>
                          GST Registration, Shop License, Business Registration
                          Certificate
                        </td>
                      </tr>
                      <tr>
                        <td>Property Papers</td>
                        <td>Sale Deed, Tax Receipts, Approved Plan</td>
                      </tr>
                    </tbody>
                  </table>

                  <h5 className="mt-4">For NRIs</h5>
                  <table className="table table-bordered align-middle">
                    <tbody>
                      <tr>
                        <td>For NRIs</td>
                        <td>
                          Passport, Valid Visa, Overseas Address Proof, NRE/NRO Bank
                          Statements, Salary Slips or Overseas Income Proof
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  {/* ================= INTEREST RATES ================= */}
                  <h3 className="mt-5 fw-bold">
                    Best Home Loan Interest Rates in India (2025)
                  </h3>
                  <p className="text-muted">
                    Here’s a snapshot of current rates, processing fees & tenure:
                  </p>
                  <div className="table-responsive">
                    <table className="table table-hover table-bordered align-middle">
                      <thead className="table-primary">
                        <tr>
                          <th>Bank/Institution</th>
                          <th>Interest Rate (p.a.)</th>
                          <th>Processing Fee</th>
                          <th>Tenure</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["SBI", "8.50% – 9.65%", "0.35% (min ₹2,000)", "Up to 30 yrs"],
                          ["Bank of Baroda", "8.40% onwards", "0.50%", "Up to 30 yrs"],
                          ["HDFC Bank", "8.75% onwards", "0.50% or ₹3,000–5,000", "Up to 30 yrs"],
                          ["ICICI Bank", "8.70% onwards", "0.50% – 2%", "Up to 30 yrs"],
                          ["Axis Bank", "8.75% onwards", "0.50%", "Up to 30 yrs"],
                          ["LIC Housing", "8.50% – 9.25%", "0.25% – 0.50%", "Up to 30 yrs"],
                          ["PNB", "8.55% onwards", "0.35% – 0.50%", "Up to 30 yrs"],
                          ["Bank of Maharashtra", "8.60% onwards", "0.50%", "Up to 30 yrs"],
                          ["Bajaj Finserv", "8.85% onwards", "Up to 1%", "Up to 25 yrs"],
                          ["TATA Capital", "8.90% onwards", "0.50% – 1%", "Up to 30 yrs"],
                          ["IIFL Finance", "9.00% onwards", "0.75% – 1%", "Up to 20 yrs"],
                          ["NAVI", "8.75% onwards", "NIL (app-based)", "Up to 25 yrs"],
                        ].map((bank, i) => (
                          <tr key={i}>
                            <td>{bank[0]}</td>
                            <td>{bank[1]}</td>
                            <td>{bank[2]}</td>
                            <td>{bank[3]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    <h4>   Conclusion: </h4>

                    <p>

                      NoBroker = Quick, Cheap, No Hassle.</p>
                  </div>
                </div>

              </div>
            </div>





            {/* 🔹 Frequently Asked Questions */}
            <div className="container my-5">
              <div className="card shadow-sm p-3">
                <h2 className="fw-bold mb-4 text-center">Frequently Asked Questions</h2>

                {[
                  {
                    question:
                      "What do you understand by a home loan, and how does it work?",
                    answer:
                      "A home loan is a secured loan taken to buy, build, or renovate a property, and it is repaid in EMIs over a duration of 10–30 years. Applying online through NoBroker, you can obtain a home loan without complications."
                  },
                  {
                    question: "What is the best way of finding home loans in India?",
                    answer:
                      "NoBroker enables you to compare lenders, obtain the best home loans in India, and find the right bank as per your eligibility and financial strength."
                  },
                  {
                    question: "Are NRIs eligible to take a home loan in India?",
                    answer:
                      "Indeed. Through NoBroker, NRIs can access home loans from 20+ trusted lenders with flexible terms, transparent processing, and repatriation provisions."
                  },
                  {
                    question: "How do I apply for a home loan?",
                    answer:
                      "To apply for a home loan, you require identity and address proof, bank statements, IT returns, and property documents. You can apply easily online through NoBroker."
                  },
                  {
                    question: "Does NoBroker have any hidden costs as far as a home loan is concerned?",
                    answer:
                      "NoBroker does not charge any brokerage or hidden fee. However, lenders may levy minimal processing charges, which NoBroker helps reduce through pre-approved offers and negotiated rates."
                  }
                ].map((faq, index) => {
                  const [open, setOpen] = React.useState(false);
                  return (
                    <div key={index}>
                      <div
                        className="d-flex justify-content-between align-items-center py-2"
                        style={{ cursor: "pointer" }}
                        onClick={() => setOpen(!open)}
                      >
                        <h5 className="mb-0">{faq.question}</h5>
                        <span style={{ fontSize: "1.5rem", color: "#5a4ce2" }}>
                          {open ? "−" : "+"}
                        </span>
                      </div>
                      {open && (
                        <div className="p-2">
                          <p className="mb-0 text-muted">{faq.answer}</p>
                        </div>
                      )}
                      {index < 4 && <hr />}
                    </div>
                  );
                })}

              </div>
            </div>





            {/* 🔹 More about us */}




            <div className="container my-5">
              <div className="bg-white shadow-sm rounded-4 overflow-hidden p-4">

                <div className="container">
                  <h3 className="fw-bold mb-4">More About Home Loan</h3>

                  {/* Tabs */}
                  <div className="bg-light p-3 rounded d-flex flex-wrap gap-2 mb-4">
                    {["Home Loan", "Balance Transfer", "Compare Interest Rates"].map(
                      (item, i) => (
                        <div key={i} className="p-2 bg-white border rounded flex-shrink-0">
                          {item}
                        </div>
                      )
                    )}
                  </div>

                  {/* City Links */}
                  <h5 className="fw-bold mb-2">City</h5>
                  <div className="bg-light p-3 rounded d-flex flex-wrap gap-2 mb-4">
                    {[
                      "Home Loan in Guwahati",
                      "Home Loan in Indore",
                      "Home Loan in Coimbatore",
                      "Home Loan in Bangalore",
                      "Home Loan in Dehradun",
                      "Home Loan in Ahmedabad",
                      "Home Loan in Cochin",
                      "Home Loan in Mumbai",
                      "Home Loan in Jaipur",
                      "Home Loan in Kolkata",
                      "Home Loan in Jammu & Kashmir",
                      "Home Loan in Chennai",
                      "Home Loan in Hyderabad",
                      "Home Loan in Delhi"
                    ].map((item, i) => (
                      <div key={i} className="p-2 bg-white border rounded flex-shrink-0">
                        {item}
                      </div>
                    ))}
                  </div>

                  {/* Bank Links */}
                  <h5 className="fw-bold mb-2">Bank</h5>
                  <div className="bg-light p-3 rounded d-flex flex-wrap gap-2 mb-4">
                    {[
                      "Union bank",
                      "Punjab national bank",
                      "Kotak mahindra bank",
                      "IDBI",
                      "Axis Bank",
                      "HDFC Bank",
                      "Central bank of india",
                      "Canara bank",
                      "Bank of india",
                      "Bank of baroda",
                      "SBI",
                      "Allahabad Bank",
                      "Andhra Bank",
                      "Cosmos Bank",
                      "Corporation Bank",
                      "DBS Bank",
                      "Deutsche Bank",
                      "Karnataka Gramin Bank",
                      "South Indian Bank",
                      "SVC Co-operative Bank",
                      "Syndicate Bank",
                      "RBL Bank",
                      "DBC Bank",
                      "IndusInd Bank",
                      "IOB Bank",
                      "India Shelter Bank",
                      "Karnataka Bank",
                      "Punjab and Sind Bank",
                      "Karur Vysya Bank",
                      "Saraswat Bank",
                      "RBI Bank",
                      "Standard Chartered Bank",
                      "Tamilnad Mercantile Bank",
                      "Bajaj Finance Bank EMI Calculator",
                      "Bandhan Bank EMI Calculator",
                      "Bank Of India EMI Calculator",
                      "Bank Of Maharashtra EMI Calculator",
                      "Bank Of Baroda EMI Calculator",
                      "Canara Bank EMI Calculator",
                      "ICICI Bank EMI Calculator",
                      "IDFC first Bank EMI Calculator",
                      "Central Bank EMI Calculator",
                      "HDFC Bank EMI Calculator",
                      "Induslnd Bank EMI Calculator",
                      "IOB Bank EMI Calculator",
                      "JK Bank EMI Calculator",
                      "Karnataka Bank EMI Calculator",
                      "Karur Vysya Bank EMI Calculator",
                      "Kotak Bank EMI Calculator"
                    ].map((item, i) => (
                      <div key={i} className="p-2 bg-white border rounded flex-shrink-0">
                        {item}
                      </div>
                    ))}
                  </div>

                  {/* Calculator Links */}
                  <h5 className="fw-bold mb-2">Calculator</h5>
                  <div className="bg-light p-3 rounded d-flex flex-wrap gap-2">
                    {["EMI Calculator", "Eligibility Calculator"].map((item, i) => (
                      <div key={i} className="p-2 bg-white border rounded flex-shrink-0">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>



          </div>
        </div>
      </div>
    </div>

  );
};

export default NoBrokerForNRIs;
