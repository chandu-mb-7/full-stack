// import React, { useState } from "react";
// import "./HomePage.css";
// import { FiSearch } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";


// const HomePage = () => {
//   const [activeTab, setActiveTab] = useState("rent");
//   const [selectedCity, setSelectedCity] = useState("Bangalore");
//   const navigate = useNavigate();


//   const topCards =
//     activeTab === "buy"
//       ? [
//           {
//             leftImg: "src/assets/HomeInteriorHome.svg",
//             rightImg: "src/assets/guarantee.svg",
//             text: "Home Interiors | 45-Days Guarantee",
//           },
//         ]
//       : [
//           {
//             leftImg: "src/assets/Rental.svg",
//             rightImg: "src/assets/nextday.svg",
//             text: "Rental Agreement | Next Day Delivery",
//           },
//         ];


//   const handleActionClick = (text) => {
//     if (text.includes("Rental Agreement")) {
//       navigate("/rental-agreement");
//     }
//   };

//   return (
//     <div className="home-container">

//       <h1 className="hero-title">
//         World's Largest <span className="nobroker">NoBrokerage</span> Property Site
//       </h1>

//       <div className="action-buttons">
//         {topCards.map((item, idx) => (
//           <div
//             key={idx}
//             className="action-btn"
//             onClick={() => handleActionClick(item.text)}
//           >
//             <img src={item.leftImg} alt="left icon" className="mini-icon" />

//             <span className="btn-text">
//               {item.text.split("|")[0].trim()}{" "}
//               <span className="faded-text">| {item.text.split("|")[1].trim()}</span>
//             </span>

//             <img src={item.rightImg} alt="right icon" className="mini-icon" />
//           </div>
//         ))}
//       </div>

//       <div className="tabs">
//         {["buy", "rent", "commercial"].map((tab) => (
//           <button
//             key={tab}
//             className={`tab ${activeTab === tab ? "active" : ""}`}
//             onClick={() => setActiveTab(tab)}
//           >
//             {tab.charAt(0).toUpperCase() + tab.slice(1)}
//           </button>
//         ))}
//       </div>

//       <div className="search-wrapper">
//         {activeTab === "buy" ? (
//           <div className="search-card centered">
//             <div className="row-top">
//               <select className="dropdown">
//                 <option>{selectedCity}</option>
//               </select>

//               <input
//                 type="text"
//                 placeholder="Search upto 3 localities or landmarks"
//                 className="search-input"
//               />

//               <button className="search-btn">
//                 <FiSearch className="search-icon" />
//                 Search
//               </button>
//             </div>

//             <div className="row-bottom">
//               <div className="radio-group">
//                 <label>
//                   <input type="radio" name="buyType" defaultChecked /> Full House
//                 </label>
//                 <label>
//                   <input type="radio" name="buyType" /> Land/Plot
//                 </label>
//               </div>

//               <div className="filters">
//                 <select>
//                   <option>BHK Type</option>
//                 </select>
//                 <select>
//                   <option>Property Status</option>
//                 </select>
//                 <label className="check-item">
//                   <input type="checkbox" /> New Builder Projects
//                 </label>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div className="search-card centered">
//             <div className="row-top">
//               <select className="dropdown">
//                 <option>{selectedCity}</option>
//               </select>

//               <input
//                 type="text"
//                 placeholder="Search upto 3 localities or landmarks"
//                 className="search-input"
//               />

//               <button className="search-btn">
//                 <FiSearch className="search-icon" />
//                 Search
//               </button>
//             </div>

//             <div className="row-bottom">
//               <div className="radio-group">
//                 <label>
//                   <input type="radio" name="rentType" defaultChecked /> Full House
//                 </label>
//                 <label>
//                   <input type="radio" name="rentType" /> PG/Hostel
//                 </label>
//                 <label>
//                   <input type="radio" name="rentType" /> Flatmates
//                 </label>
//               </div>

//               <div className="filters">
//                 <select>
//                   <option>Independent House</option>
//                   <option>Full House</option>
//                   <option>Apartment</option>
//                 </select>
//                 <select>
//                   <option>BHK Type</option>
//                 </select>
//                 <select>
//                   <option>Availability</option>
//                 </select>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       <div className="owner-section">
//   <p>Are you a Property Owner?</p>
//   <button
//     className="owner-btn"
//     onClick={() => navigate("/owner")}
//   >
//     Post Free Property Ad
//   </button>
// </div>


//       <div className="blue-strip">
//         <p>
//           Do you know how much loan you can get? Get maximum with <b>NoBroker</b>
//         </p>
//         <button className="eligibility-btn">Check Eligibility</button>
//       </div>
//     </div>
//   );
// };




import React, { useState } from "react";
import "./HomePage.css";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import ServicePage from "./ServicePage"; // For Buy
import RentPage from "./RentPage";       // For Rent & Commercial

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("buy");
  const [selectedCity, setSelectedCity] = useState("Bangalore");
  const navigate = useNavigate();

  const tabTopCards = {
    buy: [
      {
        leftImg: "src/assets/HomeInteriorHome.svg",
        rightImg: "src/assets/guarantee.svg",
        text: "Home Interiors | 45-Days Guarantee",
      },
    ],
    rent: [
      {
        leftImg: "src/assets/Rental.svg",
        rightImg: "src/assets/nextday.svg",
        text: "Rental Agreement | Next Day Delivery",
      },
    ],
    commercial: [
      {
        leftImg: "src/assets/commercial.svg",
        rightImg: "src/assets/nextday.svg",
        text: "Commercial Properties | Quick Deals",
      },
    ],
  };

  const handleActionClick = (text) => {
    if (text.includes("Rental Agreement")) {
      navigate("/rental-agreement");
    }
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="home-container">
      <h1 className="hero-title">
        World's Largest <span className="nobroker">NoBrokerage</span> Property Site
      </h1>

      {/* --- Top Cards --- */}
      <div className="action-buttons">
        {tabTopCards[activeTab].map((item, idx) => (
          <div
            key={idx}
            className="action-btn"
            onClick={() => handleActionClick(item.text)}
          >
            <img src={item.leftImg} alt="left" className="mini-icon" />
            <span className="btn-text">
              {item.text.split("|")[0].trim()}{" "}
              <span className="faded-text">| {item.text.split("|")[1].trim()}</span>
            </span>
            <img src={item.rightImg} alt="right" className="mini-icon" />
          </div>
        ))}
      </div>

      {/* --- Tabs --- */}
      <div className="tabs">
        {["buy", "rent", "commercial"].map((tab) => (
          <button
            key={tab}
            className={`tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => handleTabClick(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* --- Search Section --- */}
      <div className="search-card centered">
        <div className="row-top">
          <select className="dropdown">
            <option>{selectedCity}</option>
          </select>
          <input
            type="text"
            placeholder="Search upto 3 localities or landmarks"
            className="search-input"
          />
          <button className="search-btn">
            <FiSearch className="search-icon" /> Search
          </button>
        </div>

        {/* --- Conditional Filters per Tab --- */}
        {activeTab === "buy" && (
          <div className="row-bottom">
            <div className="radio-group">
              <label><input type="radio" name="buyType" defaultChecked /> Full House</label>
              <label><input type="radio" name="buyType" /> Land/Plot</label>
            </div>
            <div className="filters">
              <select><option>BHK Type</option></select>
              <select><option>Property Status</option></select>
              <label className="check-item">
                <input type="checkbox" /> New Builder Projects
              </label>
            </div>
          </div>
        )}

        {activeTab === "rent" && (
          <div className="row-bottom">
            <div className="radio-group">
              <label><input type="radio" name="rentType" defaultChecked /> Full House</label>
              <label><input type="radio" name="rentType" /> PG/Hostel</label>
              <label><input type="radio" name="rentType" /> Flatmates</label>
            </div>
            <div className="filters">
              <select><option>Independent House</option></select>
              <select><option>BHK Type</option></select>
              <select><option>Availability</option></select>
            </div>
          </div>
        )}

        {activeTab === "commercial" && (
          <div className="row-bottom">
            <div className="radio-group">
              <label><input type="radio" name="commercialType" defaultChecked /> Office</label>
              <label><input type="radio" name="commercialType" /> Shop</label>
              <label><input type="radio" name="commercialType" /> Warehouse</label>
            </div>
            <div className="filters">
              <select><option>Property Size</option></select>
              <select><option>Status</option></select>
            </div>
          </div>
        )}
      </div>

      
      

      {/* --- Owner Section --- */}
      <div className="owner-section">
        <p>Are you a Property Owner?</p>
        <button className="owner-btn" onClick={() => navigate("/owner")}>
          Post Free Property Ad
        </button>
      </div>

      {/* --- Blue Strip --- */}
      <div className="blue-strip">
        <p>
          Do you know how much loan you can get? Get maximum with <b>NoBroker</b>
        </p>
        <button className="eligibility-btn">Check Eligibility</button>
      </div>

{/* --- Render Full Pages Below Search --- */}
<div className="tab-full-content">
        {activeTab === "buy" && <ServicePage />}
        {(activeTab === "rent" || activeTab === "commercial") && <RentPage />}
      </div>

    </div>
  );
};

export default HomePage;



