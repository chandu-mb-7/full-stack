import React, { useState, useEffect } from "react";
import { useNavigate,useLocation} from "react-router-dom"; // ✅ navigation hook
import "./AvoidContent.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

import androidDownload from "../assets/android_download.svg";
import iosDownload from "../assets/IOS_download.svg";



const AvoidContent = () => {
  const [selected, setSelected] = useState("About Us");
  const navigate = useNavigate();
const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
useEffect(() => {
  const params = new URLSearchParams(location.search);
  const section = params.get("section");
  if (section && section.toLowerCase() === "tenants") {
    setSelected("Tenants");
  }
}, [location]);

  const menuItems = [
    "About Us",
    "Additional Services",
    "Owners",
    "Listing Using Whatsapp",
    "Tenants",
    "Team",
    "FAQ",
    "Our Blog",
    "Contact Us",
  ];

  const Accordion = ({ title, children }) => {
    const [open, setOpen] = useState(false);
    return (
      <div className="faq-item">
        <div className="faq-header" onClick={() => setOpen(!open)}>
          <h5>{title}</h5>
          <span>{open ? "▲" : "▼"}</span>
        </div>
        {open && <div className="faq-body">{children}</div>}
      </div>
    );
  };

  const aboutContent = (
    <>
      <h2>About Us</h2>
      <p>
        Welcome to NoBroker! <br />
        <br />
        NoBroker is a disruptive real-estate platform that makes it possible to
        buy, sell, or rent a house without paying any brokerage.
      </p>
      <p>
        NoBroker was started because we believed paying heavy brokerage can’t be
        the only way to find a new home. As tenants, we all have been paying
        these fees year after year without seeing any real benefit.
      </p>
      <ul>
        <li>
          <strong>Firstly,</strong> we’ve painstakingly verified each listing so
          you get totally broker-free results.
        </li>
        <li>
          <strong>Secondly,</strong> we ensure maximum information is available
          upfront, so you can shortlist properties without even visiting them.
        </li>
      </ul>
      <p>
        If you’re a landlord interested in posting apartments on NoBroker, email
        us at <a href="mailto:assist@nobroker.in">assist@nobroker.in</a>.
      </p>
      <p>Tenants — happy hunting!</p>
    </>
  );

  const additionalContent = (
    <>
      <h2>Additional Services</h2>
      <p>
        NoBroker provides a one-stop shop for lease agreement registration, bank
        franking, police verification, and society approvals.
      </p>
      <ul>
        <li>Prepare Leave & License draft</li>
        <li>Get it stamped and executed</li>
        <li>Enter details online and book appointment</li>
        <li>Assist in registration completion</li>
      </ul>
      <p>
        To create your rental agreement online in 5 minutes, click{" "}
        <a href="#">here</a>.
      </p>
    </>
  );

  const ownersContent = (
    <>
      <h2>Why you should list with us?</h2>
      <p>
        NoBroker lets you find tenants without any middleman. It’s convenient,
        safe, and saves time and money.
      </p>
      <p>
        In NoBroker’s model, you directly speak to potential tenants and save
        brokerage (15 days to 2 months rent). Listing takes less than 5 minutes.
      </p>
      <p>
        Click on <strong>“Post Your Property”</strong> or email{" "}
        <a href="mailto:assist@nobroker.in">assist@nobroker.in</a>.
      </p>
    </>
  );

  const whatsappContent = (
    <>
      <h2>How to list using Whatsapp?</h2>
      <p>
        Send property details to <strong>+91 8035263382</strong> on WhatsApp and
        we’ll create your login for you! It’s the simplest way to list.
      </p>
    </>
  );

  const tenantsContent = (
    <>
      <h2>Benefits of NoBroker.in</h2>
      <ul>
        <li>
          Verified properties directly from owners — save brokerage of 15 days
          to 2 months’ rent.
        </li>
        <li>
          All information available with photos and surroundings analysis —
          shortlist easily.
        </li>
        <li>
          Transparent listings — no hoarded information, everything open and
          first-come-first-serve.
        </li>
      </ul>
      <p>
        So, forget your old broker and find your dream house with NoBroker.{" "}
        <a href="#">Click here</a> to search for houses.
      </p>
    </>
  );

  const teamContent = (
    <>
      <h2>NoBroker Team</h2>
      <p>
        NoBroker was founded by IIT Bombay & IIM Ahmedabad graduates to solve
        the endemic brokerage problem. When searching for houses, we realized
        everyone faced the same pain — brokers forcing bad houses, charging
        heavy fees, and wasting time.
      </p>
      <p>
        As someone said, <strong>“Necessity is the mother of all inventions.”</strong>{" "}
        We created NoBroker to eliminate brokers and make the market efficient
        and information symmetric.
      </p>
    </>
  );

  const faqContent = (
    <>
      <h2>Frequently Asked Questions</h2>

      <Accordion title="General & Account Related">
        <ul className="faq-list dotted">
          <li>
            <strong>Why do I need a verified account?</strong>
            <br />
            To ensure all users are genuine and eliminate brokers from the
            rental scene.
          </li>
          <li>
            <strong>How long does email verification take?</strong>
            <br />
            Usually a couple of minutes — check your email for the link.
          </li>
          <li>
            <strong>Is it safe to use Facebook or Google login?</strong>
            <br />
            Yes. We never post anything or ask for extra info. It just makes
            login easier.
          </li>
        </ul>
      </Accordion>

      <Accordion title="Owners Related">
        <ul className="faq-list dotted">
          <li>
            <strong>Can I list my property before verification?</strong>
            <br />
            Yes, it will be verified later and made visible to tenants.
          </li>
          <li>
            <strong>How do I list via WhatsApp?</strong>
            <br />
            Send details to <strong>+91 8035263382</strong> on WhatsApp.
          </li>
          <li>
            <strong>My listing got rejected. Why?</strong>
            <br />
            If suspected as broker, it’s rejected. Contact{" "}
            <a href="mailto:assist@nobroker.in">assist@nobroker.in</a> if
            genuine.
          </li>
        </ul>
      </Accordion>

      <Accordion title="Tenant/Seekers Related">
        <ul className="faq-list dotted">
          <li>
            <strong>Why wait for validation to see owner details?</strong>
            <br />
            To ensure only verified tenants contact owners directly.
          </li>
          <li>
            <strong>Can I view houses before verification?</strong>
            <br />
            Yes, but owner contact info will unlock after verification.
          </li>
        </ul>
      </Accordion>

      <Accordion title="NRI Related">
        <ul className="faq-list dotted">
          <li>
            <strong>How can I register as NRI?</strong>
            <br />
            Use any Indian number (active/inactive) with your email.
          </li>
          <li>
            <strong>Will I get a soft copy of rental agreement?</strong>
            <br />
            Yes, it’s emailed once prepared and registered.
          </li>
        </ul>
      </Accordion>
    </>
  );

  const blogContent = (
    <>
      <h2>Our Blog</h2>
      <p>
        Visit the official <strong>NoBroker Blog</strong> to read property
        insights, home buying tips, and the latest real estate trends across
        India.
      </p>
      <a
        href="https://www.nobroker.in/blog/"
        target="_blank"
        rel="noopener noreferrer"
        className="blog-link-btn"
      >
        Go to NoBroker Blog
      </a>
    </>
  );

  const contactContent = (
    <>
      <h2>Contact Us</h2>
      <p>Have questions or need support? Our team is happy to assist you!</p>
      <p>
        📧 Email:{" "}
        <a href="mailto:assist@nobroker.in" className="contact-link">
          assist@nobroker.in
        </a>
        <br />
        📞 Phone: +91 8035263382
        <br />
        📍 Address: 17th Floor, Tower B, IBC Knowledge Park, Bangalore, India
      </p>
      <p>
        Visit{" "}
        <a
          href="https://www.nobroker.in/contactus"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          NoBroker Contact Page
        </a>{" "}
        for more information.
      </p>
    </>
  );

  //Render Function
  const renderContent = () => {
    switch (selected) {
      case "About Us":
        return aboutContent;
      case "Additional Services":
        return additionalContent;
      case "Owners":
        return ownersContent;
      case "Listing Using Whatsapp":
        return whatsappContent;
      case "Tenants":
        return tenantsContent;
      case "Team":
        return teamContent;
      case "FAQ":
        return faqContent;
      case "Our Blog":
        return blogContent;
      case "Contact Us":
        return contactContent;
      default:
        return aboutContent;
    }
  };

  return (
    <>
      <div className="avoid-layout">
        <div className="sidebar-box">
          {menuItems.map((item) => (
            <div
              key={item}
              className={`menu-item ${selected === item ? "active" : ""}`}
              onClick={() => setSelected(item)}
            >
              {item}
            </div>
          ))}
        </div>

        <div className="content-box">
          <div className="content-inner no-scroll">{renderContent()}</div>
        </div>
      </div>

      <div className="avoid-bottom-line"></div>

      <div className="nobroker-services">
        <h2>NoBroker services</h2>
        <div className="services-columns">
       
          <div className="service-column">
            <h4>Buy</h4>
            <div className="tag-list">
              {[
                "Property Legal Services",
                "Interiors",
                "Sale Agreement",
                "NoBroker For NRI's",
                "New Builder Project",
                "Home Loan EMI Calculator",
                "Home Loan Balance Transfer",
                "Home Loan Eligibility Calculator",
                "Apply Home Loan",
                "Compare Home Loan Interest",
                "Property Buyers Forum",
                "Property Buyers Guide",
                "Property Seller Guide",
                "Home Loan Guide",
                "Home Loan Queries",
                "Home Renovation Guide",
                "Home Renovation Queries",
                "Interior Design Tips",
                "Interior Design Queries",
                "NRI RealEstate Guide",
                "NRI RealEstate Queries",
                "Realestate Vastu Guide",
                "Personal Loan Guide",
                "Personal Loan Queries",
                "Bill Payment Guide",
                "Realestate Legal Guide",
                "Realestate Legal Queries",
                "e-Aasthi BBMP",
                "Due Diligence Service",
              ].map((item) => (
                <span key={item} className="service-tag">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="service-column">
            <h4>Rent</h4>
            <div className="tag-list">
              {[
                "Rental Agreement",
                "Pay Rent",
                "Refer and Earn",
                "Packers and Movers",
                "Property Management in India",
                "Home Services Questions",
                "Rent Services Questions",
                "Rent Calculator",
                "Property Rental Guide",
                "Landlord Guide",
                "Tenant Guide",
                "Packers and Movers Guide",
                "Packers and Movers queries",
                "Home Services",
                "Home Services Queries",
                "Painting Services",
                "Home Painting Guide",
                "Home Painting Queries",
                "Cleaning Services",
                "Kitchen Cleaning Services",
                "Sofa Cleaning Services",
                "Bathroom Cleaning Services",
                "Full House Cleaning Services",
                "Home Cleaning Guide",
                "Home Cleaning Queries",
                "AC Services",
                "Carpentry Services",
                "Carpentry Services Queries",
                "Electrician Services",
                "Electrician Services Queries",
                "Plumbing Services",
                "Plumbing Services Queries",
                "Lease Agreement",
                "Notary",
                "Notary Advocate",
                "Notary Affidavit",
              ].map((item) => (
                <span key={item} className="service-tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="find-list-section">
        <div className="find-list-container">
          <div className="find-box">
            <h3>Find Property</h3>
            <p>Select from thousands of options, without brokerage.</p>
            <button
              className="find-btn"
              onClick={() => {
                navigate("/"); 
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Find Now
            </button>
          </div>

          <div className="vertical-divider"></div>

          <div className="find-box">
            <h3>List Your Property</h3>
            <p>For Free. Without any brokerage.</p>
            <button
              className="post-btn"
              onClick={() => {
                navigate("/owner");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Free Posting
            </button>
          </div>
        </div>
       
<footer className="nobroker-footer">
  <div className="footer-links">
    {["About Us", "Careers", "Terms & Conditions", "Privacy Policy", "Testimonials", "Sitemap", "FAQs"].map((item) => (
      <span key={item} className="footer-link">{item}</span>
    ))}
  </div>

  <div className="footer-apps">
  <img src={androidDownload} alt="Google Play" className="app-btn" />
  <img src={iosDownload} alt="App Store" className="app-btn" />
</div>


  <div className="footer-social">
    <div className="icon-circle"><FaFacebookF /></div>
    <div className="icon-circle"><FaTwitter /></div>
    <div className="icon-circle"><FaInstagram /></div>
    <div className="icon-circle"><FaLinkedinIn /></div>
    <div className="icon-circle"><FaYoutube /></div>
  </div>

  <p className="footer-copy">
    © 2013–25 NoBroker Technologies Solutions Pvt. Ltd.
  </p>
</footer>

      </div>
    </>
  );
};

export default AvoidContent;
