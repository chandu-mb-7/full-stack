import React, { useState } from "react";
import "./HomeLoanPage.css";

const HomeLoanPage = () => {
  const [activeTab, setActiveTab] = useState("lowest");
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    propertyFinalized: "",
    consent: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="home-loan-page">
      {/* ===== HERO SECTION ===== */}
      <section className="loan-hero-section">
        <div className="loan-hero-container">
          <div className="loan-hero-content">
            <h1 className="loan-hero-title">
              Avail Doorstep Assistance For Your Home Loan
            </h1>
            <p className="loan-hero-subtitle">
              Fastest Sanction in 7 days from 15+ Banks
            </p>

            {/* Bank Offers Carousel */}
            <div className="bank-offers">
              <div className="bank-offer-card">
                <div className="bank-logo">🏦 SBI</div>
                <div className="offer-content">
                  <h3>Lowest interest rates guaranteed</h3>
                  <ul>
                    <li>Fully Digital Process</li>
                    <li>Quickest Sanction across all banks</li>
                  </ul>
                </div>
              </div>

              <div className="bank-offer-card quick-disbursal">
                <h3>Quick Disbursal</h3>
                <p>Get disbursal on priority for being a NoBroker privileged customer.</p>
              </div>
            </div>

            {/* Free Sale Agreement */}
            <div className="free-sale-agreement">
              <div className="agreement-icon">📄</div>
              <div className="agreement-text">
                <h4>Free Sale Agreement Draft</h4>
                <p>On applying through NoBroker</p>
                <p className="price">
                  <span className="original">₹5000</span> <span className="free">FREE</span>
                </p>
              </div>
              <button className="check-now-btn">Check Now!</button>
            </div>
          </div>

          {/* Eligibility Form */}
          <div className="eligibility-form-container">
            <div className="eligibility-form">
              <div className="form-header">
                <h3>Check Your Eligibility Instantly</h3>
                <img src="https://via.placeholder.com/100x30?text=Experian" alt="Experian" className="experian-logo" />
              </div>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Mobile Number *</label>
                  <div className="mobile-input">
                    <select className="country-code">
                      <option>+91</option>
                    </select>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      placeholder="7204088955"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Property Finalized ? *</label>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="propertyFinalized"
                        value="yes"
                        onChange={handleInputChange}
                      />
                      Yes
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="propertyFinalized"
                        value="no"
                        onChange={handleInputChange}
                      />
                      No
                    </label>
                  </div>
                </div>

                <div className="form-group consent-group">
                  <label className="consent-label">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleInputChange}
                    />
                    <span>
                      You hereby consent to NoBroker being appointed as your authorized
                      representative to receive your credit information from Experian for
                      the purpose of evaluating your profile towards eligibility to avail
                      personal/home loan, etc.
                      <a href="#" className="terms-link">T&C apply</a>
                    </span>
                  </label>
                </div>

                <button type="submit" className="check-eligibility-btn">
                  Check Eligibility
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT HOME LOAN SECTION ===== */}
      <section className="about-loan-section">
        <div className="container">
          <h2 className="section-title">NoBroker Home Loan: Low Rates, High Approvals, Zero Hassle</h2>
          <p className="section-description">
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

          <div className="loan-journey">
            <h3>Your <span className="highlight">Loan Journey</span> starts here</h3>
            <div className="journey-video">
              <div className="video-placeholder">
                <div className="video-thumbnail">
                  📱 NOBROKER.COM HOME LOANS
                  <div className="play-button">▶</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LOAN STEPS SECTION ===== */}
      <section className="loan-steps-section">
        <div className="container">
          <h2>Confused on which bank to choose for your Home Loan ?</h2>
          <p>Get Free Home Loan disbursed in 3 easy steps</p>

          <div className="steps-grid">
            <div className="step-card">
              <div className="step-icon">📝</div>
              <h3>Fill Details</h3>
              <p>Provide your contact details and Check Loan Amount Eligibility.</p>
            </div>

            <div className="step-card">
              <div className="step-icon">💰</div>
              <h3>Max Funding</h3>
              <p>Get Upto 90% of property's value as home loan from the Bank of your choice.</p>
            </div>

            <div className="step-card">
              <div className="step-icon">🚫</div>
              <h3>No Hidden Charges</h3>
              <p>Get Home Loan Services from NoBroker without paying any fees.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BANKING PARTNERS SECTION ===== */}
      <section className="banking-partners-section">
        <div className="container">
          <h2>Our Banking Partners</h2>

          <div className="partner-tabs">
            <button
              className={activeTab === "lowest" ? "tab-btn active" : "tab-btn"}
              onClick={() => setActiveTab("lowest")}
            >
              Lowest Interest
            </button>
            <button
              className={activeTab === "tenure" ? "tab-btn active" : "tab-btn"}
              onClick={() => setActiveTab("tenure")}
            >
              Max Tenure
            </button>
            <button
              className={activeTab === "funding" ? "tab-btn active" : "tab-btn"}
              onClick={() => setActiveTab("funding")}
            >
              Max Funding
            </button>
          </div>

          <div className="banks-grid">
            {[
              { name: "Indian Bank", rate: "7.4% Onwards", tenure: "30 Years" },
              { name: "Bank of Baroda Regular", rate: "7.45% Onwards", tenure: "30 Years" },
              { name: "SBI Regular Home Loan", rate: "7.5% Onwards", tenure: "25 Years" },
              { name: "HDFC Regular Home Loan", rate: "7.6% Onwards", tenure: "30 Years" },
              { name: "Bajaj Regular Home Loan", rate: "7.6% Onwards", tenure: "30 Years" },
              { name: "Godrej Finance Regular", rate: "7.7% Onwards", tenure: "30 Years" },
              { name: "Axis Regular Home Loan", rate: "7.6% Onwards", tenure: "30 Years" },
              { name: "ICICI Regular Home Loan", rate: "7.65% Onwards", tenure: "30 Years" },
              { name: "Bank of Maharashtra", rate: "7.35% Onwards", tenure: "30 Years" },
              { name: "Kotak Home Loan", rate: "7.75% Onwards", tenure: "25 Years" },
            ].map((bank, index) => (
              <div key={index} className="bank-card">
                <div className="bank-logo-placeholder">🏦</div>
                <div className="bank-details">
                  <h4>{bank.name}</h4>
                  <p>Interest Rate: <strong>{bank.rate}</strong></p>
                  <p>Max Tenure: <strong>{bank.tenure}</strong></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EMI CALCULATOR ===== */}
      <section className="emi-section">
        <div className="container">
          <div className="emi-box">
            <div className="emi-details">
              <div className="emi-item">
                <span>Monthly EMI</span>
                <h3>₹ 25,845</h3>
              </div>
              <div className="emi-item">
                <span>Principal Amount</span>
                <h3>₹ 30,00,000</h3>
              </div>
            </div>
            <div className="emi-details">
              <div className="emi-item">
                <span>Total Interest</span>
                <h3>₹ 32,02,832</h3>
              </div>
              <div className="emi-item">
                <span>Total Amount</span>
                <h3>₹ 62,02,832</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CUSTOMER STORIES ===== */}
      <section className="testimonials-section">
        <div className="container">
          <h2>Customer Stories</h2>
          <div className="testimonials-slider">
            <div className="testimonial-card">
              <div className="testimonial-avatar">A</div>
              <div className="testimonial-content">
                <h4>Amit Singh</h4>
                <div className="rating">⭐⭐⭐⭐⭐</div>
                <p>
                  The loan approval process for resale properties requires multiple legal
                  verifications and other challenges. It was only due to my NB Loan Expert's
                  promptness and excellent work that saved us from a potential nightmare
                  of a process.
                </p>
                <span className="loan-type">Home Loan</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY USE NOBROKER ===== */}
      <section className="why-nobroker-section">
        <div className="container">
          <h2>Why Use NoBroker for Home Loans?</h2>
          <p className="section-description">
            Selecting the ideal loan bank can save you lakhs of money. When you finance with NoBroker, you
            don't have to visit any branches, nor rely on partial advice; we do it for you.
          </p>

          <div className="features-grid">
            <div className="feature-item">
              <h3>Lowest Rates Across Banks</h3>
              <p>
                We track the current rates of SBI (8.50%), Bank of Baroda (8.40%), HDFC (8.75%), Axis (8.75%), and LIC
                Housing (8.50%), among others, in real-time. A variation of even 0.25% could potentially save you up
                to ₹5-10 lakh if you keep the loan for 20 years.
              </p>
            </div>

            <div className="feature-item">
              <h3>Quick Sanction & Disbursal</h3>
              <p>
                Get your loan approved in 7 working days or less with our streamlined digital process.
              </p>
            </div>

            <div className="feature-item">
              <h3>Doorstep Assistance and Loan Experts</h3>
              <p>
                Whether it is filling out the application forms or validating property papers, your dedicated NoBroker
                loan expert will hand-hold you at every step.
              </p>
            </div>

            <div className="feature-item">
              <h3>Wide Tie-ups</h3>
              <p>
                We work with the largest lenders from across India, including public sector banks, private banks,
                NBFCs, and housing finance companies, so that you can find home loans in India in one place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TYPES OF HOME LOANS ===== */}
      <section className="loan-types-section">
        <div className="container">
          <h2>Types of Home Loans in India</h2>
          <p>Every person has a different housing need. NoBroker will help you choose the identified type based on your housing needs:</p>

          <ul className="loan-types-list">
            <li><strong>Home Purchase Loan</strong> – To purchase a ready-to-move-in house or a flat</li>
            <li><strong>Home Construction Loan</strong> – To construct a new house for you or your family on a piece of land you own</li>
            <li><strong>Home Renovation Loan</strong> – To finance repairs, upgrades or remodelling of your home</li>
            <li><strong>Home Extension Loan</strong> – To extend a room, a balcony, or an extra floor to an existing property</li>
            <li><strong>Balance Transfer Loan</strong> – To transfer your loan to another bank at a cheaper rate</li>
            <li><strong>Plot + Construction loan</strong> – To buy an empty plot or land and subsequently construct on it as one loan</li>
          </ul>

          <p>
            Each product has unique features, and NoBroker Access will help you choose the right loan product
            that best suits your needs, while ensuring that your cost of credit is kept to a minimum through EMI.
          </p>
        </div>
      </section>

      {/* ===== ELIGIBILITY CRITERIA ===== */}
      <section className="eligibility-section">
        <div className="container">
          <h2>Home Loan Eligibility Criteria in India</h2>
          <p>Banks evaluate borrowers based on:</p>

          <ul className="eligibility-list">
            <li>Age – 21-70 years</li>
            <li>Income – Salaried: ₹25,000+ monthly | Self-employed: 3 years business continuity</li>
          </ul>

          <h3>For Salaried</h3>
          <table className="docs-table">
            <thead>
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
                <td>Address proof</td>
                <td>Aadhaar, utility bills</td>
              </tr>
              <tr>
                <td>Income proof</td>
                <td>Last 3-6 salary slips, Form 16, bank statements</td>
              </tr>
              <tr>
                <td>Employment proof</td>
                <td>Appointment letter, employee ID</td>
              </tr>
              <tr>
                <td>Property papers</td>
                <td>Sale deed, tax receipts, and approved plan</td>
              </tr>
            </tbody>
          </table>

          <h3>For Self-Employed</h3>
          <table className="docs-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Documents Accepted</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>KYC + Address Proof</td>
                <td>Aadhaar Card, PAN Card, Passport, Voter ID, Utility Bills</td>
              </tr>
              <tr>
                <td>Income Proof</td>
                <td>2-3 Years ITR, Profit & Loss Account, Balance Sheet</td>
              </tr>
              <tr>
                <td>Bank Statements</td>
                <td>Last 6-12 months for business account</td>
              </tr>
              <tr>
                <td>Business Proof</td>
                <td>Business registration, GST returns, statements, salary slips or overseas income proof</td>
              </tr>
              <tr>
                <td>NRIs</td>
                <td>Passport, visa, work permit, overseas bank statements, salary slips or overseas income proof</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== INTEREST RATES TABLE ===== */}
      <section className="interest-rates-section">
        <div className="container">
          <h2>Best Home Loan Interest Rates in India (2025)</h2>
          <p>Here's a snapshot of current rates, processing fees & tenure:</p>

          <table className="rates-table">
            <thead>
              <tr>
                <th>Bank/Institution</th>
                <th>Interest Rate (p.a.)</th>
                <th>Processing Fee</th>
                <th>Tenure</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>SBI</td>
                <td>8.50% – 9.65%</td>
                <td>0.35% (min ₹2,000)</td>
                <td>Up to 30 yrs</td>
              </tr>
              <tr>
                <td>Bank of Baroda</td>
                <td>8.40% onwards</td>
                <td>0.50%</td>
                <td>Up to 30 yrs</td>
              </tr>
              <tr>
                <td>HDFC Bank</td>
                <td>8.75% onwards</td>
                <td>0.50% or ₹3,000–5,000</td>
                <td>Up to 30 yrs</td>
              </tr>
              <tr>
                <td>ICICI Bank</td>
                <td>8.70% onwards</td>
                <td>0.50% – 2%</td>
                <td>Up to 30 yrs</td>
              </tr>
              <tr>
                <td>Axis Bank</td>
                <td>8.75% onwards</td>
                <td>0.50%</td>
                <td>Up to 30 yrs</td>
              </tr>
              <tr>
                <td>LIC Housing Finance</td>
                <td>8.50% – 9.25%</td>
                <td>0.25% – 0.50%</td>
                <td>Up to 30 yrs</td>
              </tr>
              <tr>
                <td>PNB</td>
                <td>8.55% onwards</td>
                <td>0.35% – 0.50%</td>
                <td>Up to 30 yrs</td>
              </tr>
              <tr>
                <td>Bank of Maharashtra</td>
                <td>8.60% onwards</td>
                <td>0.50%</td>
                <td>Up to 30 yrs</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== MORE ABOUT HOME LOAN ===== */}
      <section className="more-about-section">
        <div className="container">
          <h2>More About Home Loan</h2>

          <div className="more-tabs">
            <button className="more-tab active">Home Loan</button>
            <button className="more-tab">Balance Transfer</button>
            <button className="more-tab">Compare Interest Rates</button>
          </div>

          <h3>City</h3>
          <div className="city-links">
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
              "Home Loan in Delhi",
            ].map((city, index) => (
              <a key={index} href="#" className="city-link">
                {city}
              </a>
            ))}
          </div>

          <h3>Bank</h3>
          <div className="bank-links">
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
            ].map((bank, index) => (
              <a key={index} href="#" className="bank-link">
                {bank}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="loan-footer">
        <div className="container">
          <div className="footer-links">
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Testimonials</a>
            <a href="#">Sitemap</a>
            <a href="#">FAQs</a>
          </div>

          <div className="app-download">
            <div className="download-badge">
              <span>Get it on</span>
              <strong>Google Play</strong>
            </div>
            <div className="download-badge">
              <span>Download on the</span>
              <strong>App Store</strong>
            </div>
          </div>

          <div className="social-links">
            <a href="#">📘</a>
            <a href="#">🐦</a>
            <a href="#">📷</a>
            <a href="#">💼</a>
            <a href="#">▶️</a>
          </div>

          <p className="copyright">© 2013-25 NoBroker Technologies Solutions Pvt. Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomeLoanPage;