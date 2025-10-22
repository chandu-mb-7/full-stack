

// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { FaClipboardList, FaQuoteRight, FaUserTie, FaTruckMoving } from "react-icons/fa";
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaAndroid, FaApple } from "react-icons/fa";


// import { FaCity, FaExchangeAlt, FaTruckPickup, FaCarSide } from "react-icons/fa";

// import { BsCurrencyRupee, BsShieldCheck, BsClockHistory } from "react-icons/bs";
// import { FaHandsHelping } from "react-icons/fa";
// import { MdSupportAgent } from "react-icons/md";
// import { GiCardboardBoxClosed } from "react-icons/gi";




// const services = [
//   { title: "Within City", offer: "Upto 25% off", icon: <FaCity /> },
//   { title: "Between City", offer: "Upto 25% off", icon: <FaExchangeAlt /> },
//   { title: "City Tempo", offer: "Upto 50% off", icon: <FaTruckPickup /> },
//   { title: "Vehicle Shifting", offer: "Just Launched", icon: <FaCarSide /> },
// ];

// const customerMovements = [
//   { name: "Rajesh", city: "HYDERABAD", type: "Within City Movement", date: "15-10-2025" },
//   { name: "Gunalan Ramachandran", city: "CHENNAI", type: "Within City Movement", date: "15-10-2025" },
//   { name: "Vrinda Rathi", city: "BANGALORE", type: "Within City Movement", date: "15-10-2025" },
//   { name: "Antony", city: "CHENNAI", type: "Within City Movement", date: "15-10-2025" },
//   { name: "Udayaa", city: "DELHI", type: "Within City Movement", date: "15-10-2025" },
// ];

// const howItWorks = [
//   {
//     icon: <FaClipboardList />,
//     title: "Share your Shifting Requirement",
//     desc: "Help us by providing when and where do you want to move",
//   },
//   {
//     icon: <FaQuoteRight />,
//     title: "Receive Free Instant Quote",
//     desc: "Get guaranteed lowest priced quote for your shifting instantly",
//   },
//   {
//     icon: <FaUserTie />,
//     title: "Assign Quality Service Expert",
//     desc: "To ensure safe relocation, a quality service expert will be allotted for your movement",
//   },
//   {
//     icon: <FaTruckMoving />,
//     title: "Leave the Heavy Lifting to Us",
//     desc: "Enjoy hassle-free, on-time movement of your household goods",
//   },
// ];


// const reasons = [
//   {
//     icon: <BsCurrencyRupee />,
//     title: "Lowest Price Guarantee",
//     desc: "Moving at a price you can afford - we'll match any competitor's quote",
//   },
//   {
//     icon: <BsShieldCheck />,
//     title: "Best Quality Service",
//     desc: "Safe and Reliable Packaging and Moving Services",
//   },
//   {
//     icon: <BsClockHistory />,
//     title: "Reschedule your shifting anytime",
//     desc: "Change your shifting date as per your convenience.",
//   },
//   {
//     icon: <MdSupportAgent />,
//     title: "Support Assistance",
//     desc: "Dedicated support assistance for quick query resolution",
//   },
//   {
//     icon: <GiCardboardBoxClosed />,
//     title: "Professional Labour",
//     desc: "Expertly packing and moving your belongings",
//   },
// ];

// const reviews = [
//   {
//     name: "Sid Patil",
//     review: "Best experience throughout the process and very good 😊👍🏻",
//     imgUrl: "https://lh3.googleusercontent.com/a/ACg8ocJsIwt3qieTv9AJ3te_dcT12I78Jmjah2Sb9Pe1PDysmapBUA=s120-c-rp-mo-br100"
//   },
//   {
//     name: "Smriti Singh",
//     review: "The experience was absolutely seamless! From the moment I booked the service, their team was professional, punctual, and very organized.",
//     imgUrl: "https://lh3.googleusercontent.com/a/ACg8ocKwq6uZ2dIv4Cazk1whANgNc_f3rsEndpzi8ygDssPuDhF9Qn4=s120-c-rp-mo-br100"
//   },
//   {
//     name: "Mohit Yadav",
//     review: "I recently used NoBroker Packers and Movers for my relocation within Ghaziabad, and I’m genuinely impressed with their service. The entire process — from booking to unpacking — was smooth and hassle-free.",
//     imgUrl: "https://lh3.googleusercontent.com/a/ACg8ocJsIwt3qieTv9AJ3te_dcT12I78Jmjah2Sb9Pe1PDysmapBUA=s120-c-rp-mo-br100"
//   },
//   {
//     name: "Sushila Yadav",
//     review: "NoBroker exceeded expectations with punctuality. Timely delivery and great communication.",
//     imgUrl: "https://lh3.googleusercontent.com/a/ACg8ocKwq6uZ2dIv4Cazk1whANgNc_f3rsEndpzi8ygDssPuDhF9Qn4=s120-c-rp-mo-br100"
//   },
//   {
//     name: "Renu Devi",
//     review: "Impressed with NoBroker's service. Delicate glassware arrived in perfect condition. Very happy",
//     imgUrl: "https://lh3.googleusercontent.com/a/ACg8ocJsIwt3qieTv9AJ3te_dcT12I78Jmjah2Sb9Pe1PDysmapBUA=s120-c-rp-mo-br100"
//   },
//   {
//     name: "Sayali Rajput",
//     review: "NoBroker's timely arrival and careful handling made my move easy.",
//     imgUrl: "https://lh3.googleusercontent.com/a/ACg8ocKwq6uZ2dIv4Cazk1whANgNc_f3rsEndpzi8ygDssPuDhF9Qn4=s120-c-rp-mo-br100"
//   },
//   {
//     name: "Hemelata Rajput",
//     review: "NoBroker managed the move attentively, making it smooth.",
//     imgUrl: "https://lh3.googleusercontent.com/a/ACg8ocJsIwt3qieTv9AJ3te_dcT12I78Jmjah2Sb9Pe1PDysmapBUA=s120-c-rp-mo-br100"
//   }
// ];


// const comparisonData = [
//   { service: "Vehicle Assurance", local: true, nobroker: true },
//   { service: "Verified Professional Partners", local: false, nobroker: true },
//   { service: "Regular Update", local: true, nobroker: true },
//   {
//     service: "Packaging & Unpacking Of household goods",
//     local: true,
//     nobroker: true,
//   },
//   {
//     service: "Dismantling & Re-Assemble Of Cot",
//     local: true,
//     nobroker: true,
//   },
// ];


// const PackerAndMover = () => {
//   const [activeTab, setActiveTab] = useState("Within City");

//   const toggleReadMore = () => setExpanded(!expanded);
//   const [expanded, setExpanded] = useState(false);

//   return (
//     <div className="hero-section position-relative   ">

//       <div className="container-fluid">
//         <div className="row  align-items-start">
//           {/* LEFT SIDE — Scrollable content */}
//           <div className="col-lg-8 px-5 py-5 text-white">
//             <div style={{ position: "relative", backgroundColor: "#6c2eb9", width: "100%" }}>



//               <h2 className="fw-bold mb-3 text-white">India’s Most Trusted Packers & Movers</h2>
//               <p className="mb-4 text-white" style={{ fontSize: "1.1rem" }}>
//                 Get affordable, professional, and safe relocation across India.
//               </p>

//               {/* Video */}
//               <div
//                 className="bg-dark rounded-4 overflow-hidden shadow-lg mb-3"
//                 style={{ height: "340px", border: "5px solid #fff" }}
//               >
//                 <video
//                   src="https://assets.nobroker.in/hs-new/public/Packers-And-Movers-New/PNM_hero_video.mp4"
//                   autoPlay
//                   loop
//                   muted
//                   playsInline
//                   style={{ width: "100%", height: "100%", objectFit: "fill" }}
//                 ></video>
//               </div>
//             </div>



//             {/* Services Section */}
//             <div className="content-sections">
//               <h5 className="fw-bold mb-4 text-center">
//                 Our Packers & Movers Services
//               </h5>

//               <div className="row g-4 justify-content-center">
//                 {services.map((service, idx) => (
//                   <div key={idx} className="col-6 col-md-3 text-center">
//                     <div
//                       className="d-flex flex-column align-items-center"
//                       style={{ cursor: "pointer", transition: "0.3s" }}
//                       onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
//                       onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}
//                     >
//                       {/* 🔹 TITLE + OFFER */}
//                       <p className="small text-muted mb-0 bg-warning">{service.offer}</p>
//                       {/* 🔹 ICON */}
//                       <div
//                         className="rounded-circle d-flex align-items-center justify-content-center mb-2"
//                         style={{
//                           width: "60px",
//                           height: "60px",
//                           backgroundColor: "lightgray",
//                           color: "#1e40af", // royal blue
//                           fontSize: "1.5rem",
//                           boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
//                         }}
//                       >
//                         {service.icon}
//                       </div>


//                       <h6 className="fw-semibold mb-1">{service.title}</h6>

//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>



//             {/* ---------- HOW IT WORKS CARD BELOW SERVICES ---------- */}


//             <div className="bg-white rounded-4 shadow-sm p-4 mt-4">
//               <h5 className="fw-bold mb-3 text-center">
//                 How NoBroker Packers and Movers Works?
//               </h5>

//               {howItWorks.map((item, index) => (
//                 <div
//                   key={index}
//                   className="d-flex align-items-start gap-3 mb-3"
//                 >
//                   <div
//                     className="rounded-circle d-flex align-items-center justify-content-center"
//                     style={{
//                       width: "45px",
//                       height: "45px",
//                       backgroundColor: "#f0f8ff",
//                       color: "#2c847c",
//                       fontSize: "1.4rem",
//                       flexShrink: 0,
//                     }}
//                   >
//                     {item.icon}
//                   </div>
//                   <div>
//                     <h6 className="fw-semibold mb-1">{item.title}</h6>
//                     <p className="text-muted small mb-0">{item.desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>




//             {/* --- WHY NOBROKER SECTION --- */}

//             <div className="movers-section bg-light py-5">
//               <div className="container-fluid">
//                 <div className="bg-white rounded-4 shadow-sm p-4 mb-4">
//                   <h5 className="fw-bold mb-4 text-center">
//                     Why NoBroker's Movers Only in Bangalore?
//                   </h5>

//                   {reasons.map((item, index) => (
//                     <div key={index} className="mb-3 d-flex align-items-start">
//                       <div
//                         className="icon-wrap rounded-circle d-flex align-items-center justify-content-center me-3"
//                         style={{
//                           width: "40px",
//                           height: "40px",
//                           fontSize: "1.2rem",
//                           backgroundColor: "#f0f0f0",
//                         }}
//                       >
//                         {item.icon}
//                       </div>
//                       <div>
//                         <h6 className="fw-semibold mb-1">{item.title}</h6>
//                         <p className="small text-muted mb-0">{item.desc}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>





//             {/* --- SERVICE COMPARISON TABLE --- */}
//             <div className="comparison-card bg-white shadow-sm rounded-4 p-4 mt-5">
//               <h5 className="fw-bold mb-3">Service Comparison</h5>

//               <div className="table-responsive">
//                 <table className="table align-middle text-center">
//                   <thead className="table-light">
//                     <tr>
//                       <th className="text-start">Services</th>
//                       <th>Local Packers & Movers</th>
//                       <th className="text-danger">NoBroker Packers & Movers</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {comparisonData.map((row, i) => (
//                       <tr key={i}>
//                         <td className="text-start fw-semibold">{row.service}</td>
//                         <td>
//                           {row.local ? (
//                             <span className="check-icon">✔</span>
//                           ) : (
//                             <span className="cross-icon">✖</span>
//                           )}
//                         </td>
//                         <td>
//                           {row.nobroker ? (
//                             <span className="check-icon text-danger">✔</span>
//                           ) : (
//                             <span className="cross-icon">✖</span>
//                           )}
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>



//             {/* Customer Review */}


//             <div
//               className="container-fluid my-4 p-4 shadow"
//               style={{
//                 borderRadius: "15px",
//                 overflowX: "auto",
//                 whiteSpace: "nowrap",
//                 scrollbarWidth: "none",
//                 msOverflowStyle: "none",
//               }}
//             >
//               <style>
//                 {`
//                     .container::-webkit-scrollbar { display: none; }

//                     .scroll-text {
//                       height: 80px;
//                       overflow-y: auto;
//                       overflow-x: hidden;
//                       position: relative;
//                       padding-left: 5px;
//                     }

//                     .scroll-text::-webkit-scrollbar {
//                       width: 0px;
//                       background: transparent;
//                     }

//                     .scroll-text p {
//                       margin: 0;
//                       line-height: 1.4;
//                     }
//                   `}
//               </style>

//               <h3 className="fw-bold mb-4 text-left">Customer Reviews</h3>

//               <div className="d-flex justify-content-start flex-nowrap" style={{ gap: "20px" }}>
//                 {reviews.map((reviewer, idx) => (
//                   <div
//                     key={idx}
//                     className="card shadow-sm p-2 d-flex flex-column position-relative"
//                     style={{
//                       width: "300px",
//                       borderRadius: "15px",
//                       border: "none",
//                       flexShrink: 0,
//                       fontSize: "0.7rem",
//                     }}
//                   >
//                     {/* Small Google icon top-right */}
//                     <img
//                       src="https://assets.nobroker.in/hs-new/public/Packers-And-Movers-New/google.jpeg"
//                       alt="Google Logo"
//                       style={{
//                         width: "20px",
//                         height: "20px",
//                         position: "absolute",
//                         top: "8px",
//                         right: "8px",
//                         objectFit: "cover",
//                       }}
//                     />

//                     <div className="d-flex align-items-center mb-2">
//                       <img
//                         src={reviewer.imgUrl}
//                         alt={reviewer.name}
//                         className="rounded-circle me-3"
//                         style={{ width: "55px", height: "55px", objectFit: "cover" }}
//                       />
//                       <div>
//                         <h6 className="fw-semibold mb-0">{reviewer.name}</h6>
//                       </div>
//                     </div>

//                     <div className="scroll-text text-muted">
//                       <p>{reviewer.review}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>















//             {/* info section */}






//             <div className="container-fluid my-5">
//               <div className="bg-white shadow-sm rounded-4 overflow-hidden p-4">
//                 <h3 className="fw-bold mb-3">Why Choose NoBroker for NRI Property Management</h3>

//                 {/* Content wrapper with transition */}
//                 <div
//                   className="content-wrapper"
//                   style={{
//                     maxHeight: expanded ? "3000px" : "250px", // adjust initial height
//                     overflow: "hidden",
//                     transition: "max-height 0.5s ease",
//                   }}
//                 >


//                   NoBroker's NRI property management services stand out for our all-encompassing assistance and transparent approach. Here’s what you can expect with NoBroker:

//                   <div className="fw-semibold"> End-to-End Property Management </div>
//                   Our service covers everything, so you don’t have to worry. We handle property management from start to finish, ensuring all tasks are completed efficiently. Be it tax filing, tenant verification, or legal matters, you can trust NoBroker to take care of it all. Our end-to-end NRI property management services are perfect for those who want a one-stop solution.

//                   <div className="fw-semibold">Local Expertise</div>
//                   Our team of experts has in-depth knowledge of the local real estate market, making us a reliable NRI property management service in India. This ensures that your property is managed by professionals who understand the dynamics of the area and can offer the best advice. We have experts who keep you updated on property trends, ensuring your property always gets the best deals, whether it's for selling or renting.

//                   <div className="fw-semibold">Transparent Processes</div>
//                   We believe in building trust with our clients. That’s why our NRI property services are built on transparent processes with no hidden charges. Every transaction is clearly documented, ensuring that you are always aware of what’s happening with your property.

//                   <div className="fw-semibold">Key Features & Benefits of NoBroker’s NRI Property Management Services in India
//                     Premium Property Listing</div>
//                   List your property on India’s leading buying/renting platform with NoBroker's premium property listing service, designed to attract serious buyers and tenants. Our services for NRI ensure your property receives maximum visibility, leading to quicker deals. The listings highlight the best features of your property, ensuring it stands out in a competitive market.

//                   <div className="fw-semibold"> Dedicated Relationship Manager</div>
//                   When you choose NoBroker's NRI property management services, you get a dedicated relationship manager who will be your point of contact. They will handle your requests, communicate with prospective buyers or tenants, provide updates, and ensure smooth communication. This dedicated support ensures all your property concerns are addressed promptly, and you are always in the loop.

//                   <div className="fw-semibold">Tenant Search & Verification</div>
//                   Finding the right tenant is crucial, especially when you're miles away. Our NRI real estate services include thorough background checks and verification processes to ensure that your property is rented out to serious and reliable tenants.

//                   <div className="fw-semibold">Rental Agreement</div>
//                   NoBroker assists in drafting legally sound rental agreements. Our experts handle all legal documentation, ensuring compliance with Indian property laws, and saving you from the hassle of managing it remotely. Every rental agreement is crafted and customized to suit your property needs. With our NRI property management services, legal documentation is something you will never have to worry about. We also offer doorstep delivery of a physical copy of the rental agreement to the tenant, once the agreement is signed and notarised.

//                   <div className="fw-semibold">On-Time Rent Collection & Transfer</div>
//                   Collecting rent on time can be a challenge, especially for NRIs. NoBroker’s NRI property management services guarantee on-time rent collection and transfer directly to your bank account, so you don’t have to worry about delayed payments. Our system ensures that the rent is collected on the due date, and we follow up with tenants in case there are any delays. This service is a key part of our NRI property services and helps you manage your finances effectively.

//                   <div className="fw-semibold">Legal Assistance</div>
//                   Legal issues can be complex, especially for non-resident property owners. We offer legal assistance to help you navigate property laws, tenant agreements, and tax filing, ensuring all your bases are covered. Whether you need help with NRI tax filing or resolving a dispute, our team of legal experts is here to assist. We ensure that every legal requirement is handled professionally, so you can avoid complications.

//                   <div className="fw-semibold">Guaranteed Buyers or Moneyback</div>
//                   Selling a property remotely can be difficult, but NoBroker’s NRI property management services make it easy by connecting you with genuine, serious buyers. If you’re unable to sell your property within the agreed time, we even offer a money-back guarantee. Our NRI property services are designed to give you peace of mind, knowing that your property is in good hands.

//                   <div className="fw-semibold">Video Call Support</div>
//                   Stay connected and informed even when you are abroad. Our video call support allows you to interact with your dedicated manager, discuss property-related matters, and stay updated on important tasks. Whether you want to check the property’s condition or discuss the sale, our video call feature ensures you’re always in the loop, setting our NRI property management services in India apart from the rest.

//                   <div className="fw-semibold">How NRI Property Management Services Work - Simple and Transparent Process</div>
//                   <div className="fw-semibold">Property Registration</div>
//                   Start by registering your property with NoBroker through our website. Provide necessary details like location, type, and your requirements. Our online registration is simple and quick, making it easy for NRIs to get started.
//                   <div className="fw-semibold">Dedicated Manager Assignment</div>
//                   As part of our NRI property management services, you will be assigned a dedicated relationship manager upon registration. They will handle all your property-related needs, guide you through every step of the process, and serve as your single point of contact for seamless communication.
//                   <div className="fw-semibold">Property Listing & Marketing</div>
//                   NRI services in India will list your property on our platform to find potential tenants or buyers, offering premium exposure and faster deals.
//                   <div className="fw-semibold">Tenant Search/Buyer Connection</div>
//                   Our team searches for the right tenants or serious buyers. We conduct background checks for tenants and arrange virtual tours for buyers. Our focus on finding reliable tenants is a key part of our NRI rental property management service.
//                   <div className="fw-semibold">Rent Collection & Legal Services</div>
//                   For rented properties, our NRI property management services ensure on-time rent collection and legal compliance. Our legal experts also assist with NRI tax filing and property-related legal matters. This ensures you don’t face any legal hassles, and all agreements are up to date.
//                   <div className="fw-semibold">Regular Updates</div>
//                   Receive regular updates on your property via email or video calls, ensuring you are always informed about its status. Our transparent NRI property services ensure that there are no surprises, and you can manage your property from anywhere in the world.
//                   NoBroker’s NRI property management services in India are designed to make property management seamless and stress-free for non-resident owners. From tenant verification to legal assistance, our end-to-end services ensure your property is in safe hands. Get started today and experience hassle-free property management with NoBroker's NRI property management services that bring transparency, efficiency, and peace of mind!

//                 </div>

//                 {/* Read More / Read Less button */}
//                 <div className="text-center mt-2">
//                   <button
//                     className="btn btn-link p-0"
//                     onClick={toggleReadMore}
//                     style={{ textDecoration: "none" }}
//                   >
//                     {expanded ? "Read Less" : "Read More"}
//                   </button>
//                 </div>
//               </div>
//             </div>





//             {/* 🔹 Frequently Asked Questions */}
//             <div className="container-fluid my-5">
//               <div className="card shadow-sm p-3">
//                 <h2 className="fw-bold mb-4 text-center">Frequently Asked Questions</h2>
//                 {[
//                   {
//                     question: "What is NoBroker End to End Property Management Plan?",
//                     answer: `NoBroker's End to End property management is a unique plan crafted
//         to cater to customers looking for a reliable team to manage their
//         property. The plan provides a dedicated property manager who helps
//         you manage your property seamlessly and remotely without any
//         hassle. The plan includes end to end services - Verified tenant
//         search, Rental Agreement, On-time rent collection and transfer,
//         Periodic Home Inspection, Seamless tenant move-in and move-out,
//         home maintenance repair services.`
//                   },
//                   {
//                     question: "How do I keep in touch with NoBroker while managing my property?",
//                     answer: "You can stay in touch via email, phone, or video calls with your dedicated property manager."
//                   },
//                   {
//                     question: "How do I get the monthly rent for my property?",
//                     answer: "NoBroker ensures timely rent collection and transfers it directly to your bank account."
//                   },
//                   {
//                     question: "I already have a tenant residing at my property. Can NoBroker manage my property?",
//                     answer: "Yes! NoBroker can manage your property even if you already have a tenant, handling rent collection, maintenance, and legal compliance."
//                   },
//                   {
//                     question: "What is home inspection and why is it required?",
//                     answer: "Periodic home inspections help ensure your property is maintained well and prevent any major damages or disputes with tenants."
//                   },
//                   {
//                     question: "What if the tenant found by NoBroker vacates the property?",
//                     answer: "NoBroker will assist in finding a new tenant quickly and seamlessly, minimizing vacancy periods."
//                   }
//                 ].map((faq, index) => {
//                   const [open, setOpen] = React.useState(false);
//                   return (
//                     <div key={index}>
//                       <div
//                         className="d-flex justify-content-between align-items-center py-2"
//                         style={{ cursor: "pointer" }}
//                         onClick={() => setOpen(!open)}
//                       >
//                         <h5 className="mb-0">{faq.question}</h5>
//                         <span style={{ fontSize: "1.5rem" }}>{open ? "-" : "+"}</span>
//                       </div>
//                       {open && (
//                         <div className="p-2">
//                           <p className="mb-0">{faq.answer}</p>
//                         </div>
//                       )}
//                       {index < 5 && <hr />} {/* horizontal divider except after last item */}
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>


//             {/* More about  */}
//             <div className="container-fluid my-5">
//               <div className="card shadow-sm p-3">

//                 {/* Localities We Serve in Bangalore for Local Shifting */}
//                 <div className="col-12 mb-4">
//                   <h5 className="fw-bold mb-2">Localities We Serve in Bangalore for Local Shifting</h5>
//                   <div className="bg-light p-3 rounded d-flex flex-wrap gap-2">
//                     {[
//                       "Packers And Movers in anekal",
//                       "Packers And Movers in rajaji Nagar",
//                       "Packers And Movers in razack Palya",
//                       "Packers And Movers in slv Nilaya",
//                       "Packers And Movers in sai Sree Layout",
//                       "Packers And Movers in doddamara Road",
//                       "Packers And Movers in harokyathanahalli",
//                       "Packers And Movers in krishna Reddy Layout",
//                       "Packers And Movers in kithiganur",
//                       "Packers And Movers in kalena Agrahara",
//                       "Packers And Movers in ramasandra",
//                       "Packers And Movers in krishnappa Garden",
//                       "Packers And Movers in hulimanagala",
//                       "Packers And Movers in electronic City Phase 1",
//                       "Packers And Movers in vittasandra"
//                     ].map((item, i) => (
//                       <div key={i} className="p-2 bg-white border rounded flex-shrink-0">
//                         {item}
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Intercity Packers and Movers from Bangalore */}
//                 <div className="col-12 mb-4">
//                   <h5 className="fw-bold mb-2">Intercity Packers and Movers from Bangalore</h5>
//                   <div className="bg-light p-3 rounded d-flex flex-wrap gap-2">
//                     {[
//                       "Packers And Movers from Bangalore to Mumbai",
//                       "Packers And Movers from Bangalore to Pune",
//                       "Packers And Movers from Bangalore to Chennai",
//                       "Packers And Movers from Bangalore to Gurgaon",
//                       "Packers And Movers from Bangalore to Hyderabad",
//                       "Packers And Movers from Bangalore to Delhi",
//                       "Packers And Movers from Bangalore to Greater Noida",
//                       "Packers And Movers from Bangalore to Faridabad",
//                       "Packers And Movers from Bangalore to Noida",
//                       "Packers And Movers from Bangalore to Ghaziabad",
//                       "Packers And Movers from Bangalore to Kolkata",
//                       "Packers And Movers from Bangalore to Surat",
//                       "Packers And Movers from Bangalore to Indore",
//                       "Packers And Movers from Bangalore to Jaipur",
//                       "Packers And Movers from Bangalore to Coimbatore",
//                       "Packers And Movers from Bangalore to Ahmedabad",
//                       "Packers And Movers from Bangalore to Belgaum",
//                       "Packers And Movers from Bangalore to Bhopal",
//                       "Packers And Movers from Bangalore to Bhubaneswar",
//                       "Packers And Movers from Bangalore to Hubli",
//                       "Packers And Movers from Bangalore to Kanpur",
//                       "Packers And Movers from Bangalore to Kochi",
//                       "Packers And Movers from Bangalore to Lucknow",
//                       "Packers And Movers from Bangalore to Madurai",
//                       "Packers And Movers from Bangalore to Mangalore",
//                       "Packers And Movers from Bangalore to Mysore",
//                       "Packers And Movers from Bangalore to Nagpur",
//                       "Packers And Movers from Bangalore to Nellore",
//                       "Packers And Movers from Bangalore to Patna",
//                       "Packers And Movers from Bangalore to Ranchi",
//                       "Packers And Movers from Bangalore to Trivandrum",
//                       "Packers And Movers from Bangalore to Tirupati",
//                       "Packers And Movers from Bangalore to Vijayawada",
//                       "Packers And Movers from Bangalore to Visakhapatnam",
//                       "Packers And Movers from Bangalore to Goa",
//                       "Packers And Movers from Bangalore to Odisha",
//                       "Packers And Movers from Bangalore to Anantapur",
//                       "Packers And Movers from Bangalore to Trichy",
//                       "Packers And Movers from Bangalore to Udupi",
//                       "Packers And Movers from Bangalore to Salem",
//                       "Packers And Movers from Bangalore to Vadodara",
//                       "Packers And Movers from Bangalore to Nagercoil",
//                       "Packers And Movers from Bangalore to Hosur",
//                       "Packers And Movers from Bangalore to Erode",
//                       "Packers And Movers from Bangalore to Agra",
//                       "Packers And Movers from Bangalore to Chandigarh",
//                       "Packers And Movers from Bangalore to Raipur",
//                       "Packers And Movers from Bangalore to Allahabad",
//                       "Packers And Movers from Bangalore to Bellary",
//                       "Packers And Movers from Bangalore to Calicut",
//                       "Packers And Movers from Bangalore to Chittoor",
//                       "Packers And Movers from Bangalore to Cuttack",
//                       "Packers And Movers from Bangalore to Davangere",
//                       "Packers And Movers from Bangalore to Dharwad",
//                       "Packers And Movers from Bangalore to Dindigul",
//                       "Packers And Movers from Bangalore to Guntur",
//                       "Packers And Movers from Bangalore to Jammu",
//                       "Packers And Movers from Bangalore to Kadapa",
//                       "Packers And Movers from Bangalore to Karur",
//                       "Packers And Movers from Bangalore to Kottayam",
//                       "Packers And Movers from Bangalore to Kurnool",
//                       "Packers And Movers from Bangalore to Namakkal",
//                       "Packers And Movers from Bangalore to Ongole",
//                       "Packers And Movers from Bangalore to Palakkad",
//                       "Packers And Movers from Bangalore to Pollachi",
//                       "Packers And Movers from Bangalore to Thanjavur",
//                       "Packers And Movers from Bangalore to Tirupur",
//                       "Packers And Movers from Bangalore to Vellore",
//                       "Packers And Movers from Bangalore to Gulbarga"
//                     ].map((item, i) => (
//                       <div key={i} className="p-2 bg-white border rounded flex-shrink-0">
//                         {item}
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Explore Packers and Movers Services in Other Cities */}
//                 <div className="col-12 mb-4">
//                   <h5 className="fw-bold mb-2">Explore Packers and Movers Services in Other Cities</h5>
//                   <div className="bg-light p-3 rounded d-flex flex-wrap gap-2">
//                     {[
//                       "Packers And Movers in Delhi",
//                       "Packers And Movers in Mumbai",
//                       "Packers And Movers in Ghaziabad",
//                       "Packers And Movers in Noida",
//                       "Packers And Movers in Chennai",
//                       "Packers And Movers in Hyderabad",
//                       "Packers And Movers in Pune",
//                       "Packers And Movers in Gurgaon",
//                       "Packers And Movers in Greater-noida",
//                       "Packers And Movers in Faridabad",
//                       "Packers And Movers in Surat",
//                       "Packers And Movers in Indore",
//                       "Packers And Movers in Jaipur",
//                       "Packers And Movers in Coimbatore",
//                       "Packers And Movers in Ahmedabad",
//                       "Packers And Movers in Kolkata"
//                     ].map((item, i) => (
//                       <div key={i} className="p-2 bg-white border rounded flex-shrink-0">
//                         {item}
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Explore Our Other Services */}
//                 <div className="col-12">
//                   <h5 className="fw-bold mb-2">Explore Our Other Services</h5>
//                   <div className="bg-light p-3 rounded d-flex flex-wrap gap-2">
//                     {[
//                       "Vehicle Shifting Services in Bangalore",
//                       "Bike Transport Services in Bangalore",
//                       "Car Transport Services in Bangalore",
//                       "Tempo Service in Bangalore",
//                       "Packers and Movers Reviews in Bangalore",
//                       "Packers and Movers Verified Branches in Bangalore",
//                       "Painting Services in Bangalore",
//                       "Rental Painting Services in Bangalore",
//                       "Electrician Services in Bangalore",
//                       "Plumbing Services in Bangalore",
//                       "Carpentry Services in Bangalore",
//                       "Cleaning Services in Bangalore",
//                       "Ac Repair Services in Bangalore",
//                       "Appliance Services in Bangalore",
//                       "Salon Services in Bangalore"
//                     ].map((item, i) => (
//                       <div key={i} className="p-2 bg-white border rounded flex-shrink-0">
//                         {item}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>


//             <div className="-fluid my-5">
//               <div className="card shadow-sm p-4">
//                 <div className="row">
//                   {/* LEFT SIDE - Registered Office */}
//                   <div className="col-md-7 mb-3 mb-md-0">
//                     <h5 className="fw-bold mb-3">Registered Office:</h5>
//                     <p className="mb-1">@NoBroker Technologies Solutions Pvt. Ltd.</p>
//                     <p className="mb-1">
//                       6th Floor Bren Mercury, Marathahalli - Sarjapur Rd, Kaikondrahalli, Bengaluru, Karnataka 560035
//                     </p>
//                     <p className="mb-1">CIN: U74900KA2014PTC077652</p>
//                     <p className="mb-1">
//                       <strong>Email:</strong> shifting@nobroker.in
//                     </p>
//                     <p className="mb-1">
//                       <strong>Phone:</strong> +91 92430 09813
//                     </p>
//                     <a
//                       href="https://maps.google.com/?q=Bren+Mercury,+Kaikondrahalli,+Bangalore"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-decoration-none fw-semibold text-primary"
//                     >
//                       Get Directions
//                     </a>
//                   </div>

//                   {/* RIGHT SIDE - Quick Links */}
//                   <div className="col-md-5">
//                     <h5 className="fw-bold mb-3">Quick Links</h5>
//                     <div className="d-flex flex-column">
//                       {["About Us", "Contact Us", "Reviews", "FAQs", "Blog", "Branches", "T&Cs"].map((item, i) => (
//                         <a
//                           key={i}
//                           href="#"
//                           className="text-decoration-none text-dark mb-1 hover-text-primary"
//                           style={{ transition: "0.2s" }}
//                         >
//                           {item}
//                         </a>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>


//             {/* Footer  */}



//             <div className="container-fluid my-5">
//               <div className="card shadow-sm p-4 text-center text-md-start">
//                 <div className="row align-items-start">
//                   {/* LEFT - Find Property */}
//                   <div className="col-md-6 border-end border-2">
//                     <h5 className="fw-bold">Find Property</h5>
//                     <p className="text-muted mb-2">Select from thousands of options, without brokerage.</p>
//                     <button className="btn btn-primary btn-sm rounded-pill px-3">Find Now</button>
//                   </div>

//                   {/* RIGHT - List Property */}
//                   <div className="col-md-6 mt-4 mt-md-0 ps-md-4">
//                     <h5 className="fw-bold">List Your Property</h5>
//                     <p className="text-muted mb-2">For Free. Without any brokerage.</p>
//                     <button className="btn btn-outline-primary btn-sm rounded-pill px-3">Free Posting</button>
//                   </div>
//                 </div>

//                 {/* QUICK LINKS */}
//                 <hr className="my-4" />
//                 <div className="d-flex flex-wrap justify-content-center gap-3 mb-3">
//                   {[
//                     "About Us",
//                     "Careers",
//                     "Terms & Conditions",
//                     "Privacy Policy",
//                     "Testimonials",
//                     "Sitemap",
//                     "FAQs",
//                   ].map((link, i) => (
//                     <a
//                       key={i}
//                       href="#"
//                       className="text-decoration-none text-dark small fw-semibold"
//                       style={{ transition: "0.2s" }}
//                     >
//                       {link}
//                     </a>
//                   ))}
//                 </div>

//                 {/* APP LINKS */}
//                 <div className="d-flex justify-content-center align-items-center gap-4 mb-3">
//                   <a href="#" className="text-dark fs-5">
//                     <FaAndroid />
//                   </a>
//                   <a href="#" className="text-dark fs-5">
//                     <FaApple />
//                   </a>
//                 </div>

//                 {/* SOCIAL ICONS */}
//                 <div className="d-flex justify-content-center align-items-center gap-4 mb-3">
//                   <a href="#" className="text-dark fs-5"><FaFacebook /></a>
//                   <a href="#" className="text-dark fs-5"><FaTwitter /></a>
//                   <a href="#" className="text-dark fs-5"><FaInstagram /></a>
//                   <a href="#" className="text-dark fs-5"><FaLinkedin /></a>
//                   <a href="#" className="text-dark fs-5"><FaYoutube /></a>
//                 </div>

//                 {/* COPYRIGHT */}
//                 <p className="text-center text-muted small mb-0">
//                   © 2013–25 NoBroker Technologies Solutions Pvt. Ltd.
//                 </p>
//               </div>
//             </div>


//           </div>

//         </div >



//         {/* RIGHT SIDE — Form */}

//         <div className="col-lg-4">
//           <div className="sticky-form bg-white text-dark rounded-4 shadow-lg p-4 mt-5">
//             {/* Form */}

//             <h5 className="fw-bold mb-3">Where are you going to relocate?</h5>
//             {/* Tabs */}
//             <div className="bg-light rounded-4 shadow-sm p-3 mb-4">
//               <div className="d-flex justify-content-between">
//                 {["Within City", "Between Cities", "Rent Truck"].map((tab) => (
//                   <button
//                     key={tab}
//                     className={`btn flex-fill me-2 ${activeTab === tab ? "btn-primary" : "btn-outline-secondary"}`}
//                     onClick={() => setActiveTab(tab)}
//                     style={{ borderRadius: "8px", flex: 1 }}
//                   >
//                     {tab}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <form>
//               <div className="mb-3">
//                 <select className="form-select form-select-lg">
//                   <option>Within City</option>
//                   <option>Between Cities</option>
//                   <option>Rent Truck</option>
//                   <option>Movers Only</option>
//                   <option>City Tempo</option>
//                 </select>
//               </div>
//               <div className="mb-3">
//                 <label className="fw-semibold mb-1">Select Your City</label>
//                 <select className="form-select form-select-lg">
//                   <option>Select City</option>
//                   <option>Bangalore</option>
//                   <option>Mumbai</option>
//                   <option>Chennai</option>
//                   <option>Delhi</option>
//                 </select>
//               </div>
//               <div className="mb-3">
//                 <label className="fw-semibold mb-1">Shifting From</label>
//                 <input type="text" className="form-control form-control-lg" placeholder="Pickup Location" />
//               </div>
//               <div className="mb-3">
//                 <label className="fw-semibold mb-1">Shifting To</label>
//                 <input type="text" className="form-control form-control-lg" placeholder="Drop Location" />
//               </div>
//               <button
//                 type="submit"
//                 className="btn w-100 fw-semibold py-2"
//                 style={{ backgroundColor: "#2c847c", color: "#fff", fontSize: "1rem", borderRadius: "10px" }}
//               >
//                 Check Prices
//               </button>
//             </form>




//             {/* Customer Movements */}
//             <div className="bg-white rounded-4 shadow-sm p-3">
//               <h6 className="fw-bold mb-3">Recent Customer Movements</h6>
//               <div className="d-flex flex-nowrap overflow-auto" style={{ gap: "10px", scrollbarWidth: "none" }}>
//                 {customerMovements.map((move, idx) => (
//                   <div
//                     key={idx}
//                     className="card p-2 shadow-sm"
//                     style={{ minWidth: "220px", borderRadius: "10px", flexShrink: 0 }}
//                   >
//                     <p className="fw-bold mb-1">{move.name}</p>
//                     <p className="text-success fw-semibold mb-1">COMPLETED</p>
//                     <p className="mb-1">{move.city}</p>
//                     <p className="small mb-1">{move.type}</p>
//                     <p className="small text-muted mb-0">Successful On: {move.date}</p>
//                   </div>
//                 ))}
//               </div>
//               <p className="mt-3 text-primary fw-semibold text-center" style={{ cursor: "pointer" }}>
//                 Click To See What Our Customers Say About Us →
//               </p>
//             </div>
//           </div>
//         </div >









//       </div >
//     </div >
//   );
// };

// export default PackerAndMover;


import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PakerAndMover.css";
import {
  FaClipboardList,
  FaQuoteRight,
  FaUserTie,
  FaTruckMoving,
  FaCity,
  FaExchangeAlt,
  FaTruckPickup,
  FaCarSide,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaAndroid,
  FaApple,
} from "react-icons/fa";
import { BsCurrencyRupee, BsShieldCheck, BsClockHistory } from "react-icons/bs";
import { MdSupportAgent } from "react-icons/md";
import { GiCardboardBoxClosed } from "react-icons/gi";

const services = [
  { title: "Within City", offer: "Upto 25% off", icon: <FaCity /> },
  { title: "Between City", offer: "Upto 25% off", icon: <FaExchangeAlt /> },
  { title: "City Tempo", offer: "Upto 50% off", icon: <FaTruckPickup /> },
  { title: "Vehicle Shifting", offer: "Just Launched", icon: <FaCarSide /> },
];

const customerMovements = [
  { name: "Rajesh", city: "HYDERABAD", type: "Within City Movement", date: "15-10-2025" },
  { name: "Gunalan Ramachandran", city: "CHENNAI", type: "Within City Movement", date: "15-10-2025" },
  { name: "Vrinda Rathi", city: "BANGALORE", type: "Within City Movement", date: "15-10-2025" },
  { name: "Antony", city: "CHENNAI", type: "Within City Movement", date: "15-10-2025" },
  { name: "Udayaa", city: "DELHI", type: "Within City Movement", date: "15-10-2025" },
];

const howItWorks = [
  { icon: <FaClipboardList />, title: "Share your Shifting Requirement", desc: "Help us by providing when and where do you want to move" },
  { icon: <FaQuoteRight />, title: "Receive Free Instant Quote", desc: "Get guaranteed lowest priced quote for your shifting instantly" },
  { icon: <FaUserTie />, title: "Assign Quality Service Expert", desc: "To ensure safe relocation, a quality service expert will be allotted for your movement" },
  { icon: <FaTruckMoving />, title: "Leave the Heavy Lifting to Us", desc: "Enjoy hassle-free, on-time movement of your household goods" },
];

const reasons = [
  { icon: <BsCurrencyRupee />, title: "Lowest Price Guarantee", desc: "Moving at a price you can afford - we'll match any competitor's quote" },
  { icon: <BsShieldCheck />, title: "Best Quality Service", desc: "Safe and Reliable Packaging and Moving Services" },
  { icon: <BsClockHistory />, title: "Reschedule your shifting anytime", desc: "Change your shifting date as per your convenience" },
  { icon: <MdSupportAgent />, title: "Support Assistance", desc: "Dedicated support assistance for quick query resolution" },
  { icon: <GiCardboardBoxClosed />, title: "Professional Labour", desc: "Expertly packing and moving your belongings" },
];

const comparisonData = [
  { service: "Vehicle Assurance", local: true, nobroker: true },
  { service: "Verified Professional Partners", local: false, nobroker: true },
  { service: "Regular Update", local: true, nobroker: true },
  { service: "Packaging & Unpacking Of household goods", local: true, nobroker: true },
  { service: "Dismantling & Re-Assemble Of Cot", local: true, nobroker: true },
];

const reviews = [
  {
    name: "Sid Patil",
    review: "Best experience throughout the process and very good 😊👍🏻",
    imgUrl:
      "https://lh3.googleusercontent.com/a/ACg8ocJsIwt3qieTv9AJ3te_dcT12I78Jmjah2Sb9Pe1PDysmapBUA=s120-c-rp-mo-br100",
  },
  {
    name: "Smriti Singh",
    review:
      "The experience was absolutely seamless! From the moment I booked the service, their team was professional, punctual, and very organized.",
    imgUrl:
      "https://lh3.googleusercontent.com/a/ACg8ocKwq6uZ2dIv4Cazk1whANgNc_f3rsEndpzi8ygDssPuDhF9Qn4=s120-c-rp-mo-br100",
  },
  {
    name: "Mohit Yadav",
    review:
      "I recently used NoBroker Packers and Movers for my relocation within Ghaziabad, and I’m genuinely impressed with their service.",
    imgUrl:
      "https://lh3.googleusercontent.com/a/ACg8ocJsIwt3qieTv9AJ3te_dcT12I78Jmjah2Sb9Pe1PDysmapBUA=s120-c-rp-mo-br100",
  },
  {
    name: "Renu Devi",
    review:
      "Impressed with NoBroker's service. Delicate glassware arrived in perfect condition. Very happy!",
    imgUrl:
      "https://lh3.googleusercontent.com/a/ACg8ocKwq6uZ2dIv4Cazk1whANgNc_f3rsEndpzi8ygDssPuDhF9Qn4=s120-c-rp-mo-br100",
  },
];

const PackerAndMover = () => {
  const [activeTab, setActiveTab] = useState("Within City");

  return (
    <div className="packer-page">
      {/* ============= HERO SECTION ============= */}
      <section className="hero-section">
        <div className="container-fluid">
          <div className="row gx-3">
            {/* LEFT SIDE */}
            <div className="col-lg-8 col-md-12 hero-left text-white" style={{ backgroundColor: "" }}>
              <div style={{ backgroundColor: " #822fdc", width: "100%", padding: "10px" }}>
                <h1 className="fw-bold mb-3">India’s Most Trusted Packers & Movers</h1>
                <p className="lead mb-4">
                  Get affordable, professional, and safe relocation across India.
                </p>

                <div className="video-wrapper mb-4">
                  <video
                    src="https://assets.nobroker.in/hs-new/public/Packers-And-Movers-New/PNM_hero_video.mp4"
                    autoPlay
                    loop

                    muted
                    playsInline
                  ></video>
                </div>
              </div>

              {/* SERVICES */}
              <section className="services-section bg-white text-dark p-4 rounded-4 shadow-sm mb-5">
                <h5 className="fw-bold text-center mb-4">
                  Our Packers & Movers Services
                </h5>
                <div className="row g-4 justify-content-center">
                  {services.map((service, idx) => (
                    <div key={idx} className="col-6 col-md-3 text-center">
                      <div className="service-card">
                        <p className="offer-badge">{service.offer}</p>
                        <div className="icon-circle">{service.icon}</div>
                        <h6 className="fw-semibold">{service.title}</h6>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* HOW IT WORKS */}
              <section className="bg-white rounded-4 shadow-sm p-4 mb-5">
                <h5 className="fw-bold mb-4 text-center">
                  How NoBroker Packers and Movers Works?
                </h5>
                {howItWorks.map((item, index) => (
                  <div key={index} className="d-flex align-items-start gap-3 mb-3">
                    <div className="step-icon">{item.icon}</div>
                    <div>
                      <h6 className="fw-semibold mb-1">{item.title}</h6>
                      <p className="text-muted small mb-0">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </section>

              {/* WHY NOBROKER */}
              <section className="bg-white rounded-4 shadow-sm p-4 mb-5">
                <h5 className="fw-bold mb-4 text-center">
                  Why NoBroker's Movers Only in Bangalore?
                </h5>
                {reasons.map((item, index) => (
                  <div key={index} className="mb-3 d-flex align-items-start">
                    <div className="reason-icon">{item.icon}</div>
                    <div>
                      <h6 className="fw-semibold mb-1">{item.title}</h6>
                      <p className="small text-muted mb-0">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </section>

              {/* COMPARISON TABLE */}
              <section className="comparison-card bg-white shadow-sm rounded-4 p-4 mb-5">
                <h5 className="fw-bold mb-3 text-center">Service Comparison</h5>
                <div className="table-responsive">
                  <table className="table text-center align-middle">
                    <thead className="table-light">
                      <tr>
                        <th className="text-start">Services</th>
                        <th>Local Packers & Movers</th>
                        <th className="text-danger">NoBroker Packers & Movers</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((row, i) => (
                        <tr key={i}>
                          <td className="text-start fw-semibold">{row.service}</td>
                          <td>{row.local ? "✔" : "✖"}</td>
                          <td className="text-danger">
                            {row.nobroker ? "✔" : "✖"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* CUSTOMER REVIEWS */}
              <section className="bg-white rounded-4 shadow-sm p-4 mb-5">
                <h5 className="fw-bold mb-4 text-center">Customer Reviews</h5>
                <div className="reviews-container">
                  {reviews.map((review, idx) => (
                    <div key={idx} className="review-card">
                      <img src={review.imgUrl} alt={review.name} className="review-img" />
                      <div>
                        <h6 className="fw-semibold mb-1">{review.name}</h6>
                        <p className="small text-muted mb-0">{review.review}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* MAP + OFFICE SECTION */}
              <section className="bg-white rounded-4 shadow-sm p-4 mb-5">
                <h5 className="fw-bold mb-3 text-center">Our Registered Office</h5>
                <p className="text-muted text-center mb-3">
                  NoBroker Technologies Solutions Pvt. Ltd.<br />
                  6th Floor Bren Mercury, Kaikondrahalli, Bengaluru, Karnataka 560035
                </p>
                <div className="map-container">
                  <iframe
                    title="NoBroker Office Map"
                    src="https://www.google.com/maps?q=Bren+Mercury,+Kaikondrahalli,+Bangalore&output=embed"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </section>

              {/* FOOTER */}
              <footer className="footer bg-white shadow-sm rounded-4 p-4 text-center">
                <p className="fw-semibold mb-2">
                  © 2013–25 NoBroker Technologies Solutions Pvt. Ltd.
                </p>
                <div className="social-icons">
                  <FaFacebook />
                  <FaTwitter />
                  <FaInstagram />
                  <FaLinkedin />
                  <FaYoutube />
                </div>
              </footer>
            </div>

            {/* RIGHT SIDE (STICKY FORM) */}
            <div className="col-lg-4 col-md-12 position-relative">
              <div className="sticky-form">
                <h5 className="fw-bold mb-3">Where are you going to relocate?</h5>

                {/* Tabs */}
                <div className="d-flex justify-content-between mb-3">
                  {["Within City", "Between Cities", "Rent Truck"].map((tab) => (
                    <button
                      key={tab}
                      className={`btn flex-fill me-2 ${activeTab === tab ? "btn-primary" : "btn-outline-secondary"
                        }`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Form */}
                <form>
                  <div className="mb-3">
                    <select className="form-select">
                      <option>Select City</option>
                      <option>Bangalore</option>
                      <option>Mumbai</option>
                      <option>Chennai</option>
                      <option>Delhi</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Shifting From"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Shifting To"
                    />
                  </div>
                  <button className="btn btn-danger w-100 py-2 fw-semibold">
                    Check Prices
                  </button>
                </form>

                {/* Customer Movements */}
                <div className="mt-4">
                  <h6 className="fw-bold mb-3">Recent Customer Movements</h6>
                  <div className="movement-scroll">
                    {customerMovements.map((move, idx) => (
                      <div key={idx} className="movement-card">
                        <p className="fw-bold mb-1">{move.name}</p>
                        <p className="text-success fw-semibold mb-1">COMPLETED</p>
                        <p className="mb-1">{move.city}</p>
                        <p className="small mb-1">{move.type}</p>
                        <p className="small text-muted mb-0">
                          Successful On: {move.date}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PackerAndMover;

