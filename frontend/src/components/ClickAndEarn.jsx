
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

import ClickAndEarnImg from "../assets/ClickAndEarn.png";
const customerReviews = [
  {
    name: "Mohammed Kouse",
    service: "Refer & Earn",
    rating: 5, // 5-star
    review: "The NoBroker app is very useful. I have also earned money by using the Refer & Earn option. I have also earned 21000 in last 30 days with the Refer & Earn option. The NoBroker company customer care is excellent at handling their customers. So I am giving them a 5-star rating.",
    img: "https://assets.nobroker.in/hs-new/public/Home-Services/testimonial_manoj.webp"
  },
  {
    name: "Ayan",
    service: "Refer & Earn",
    rating: 5, // 5-star
    review: "Wow! I am really amazed. Refer & Earn is awesome, I really earn by just clicking pictures of To-Let boards. Even many of my friends are also earning by this. The processing of leads is very fast and me and my friends are very happy. This is a great concept.",
    img: "https://assets.nobroker.in/hs-new/public/Home-Services/testimonial_daniel.webp"
  }
];
const faqs = [
  {
    question: "I had submitted my listing, but it has been rejected. Why?",
    answer: (
      <ul>
        <li>The house of the Owner was already listed on NoBroker.in</li>
        <li>The house of the Owner has already been rented out.</li>
        <li>The contact provided by you belongs to a Broker.</li>
      </ul>
    ),
  },
  {
    question: "How will I get the reward money?",
    answer: "The reward money will be credited to your account as per the Refer & Earn policy."
  },
  {
    question: "Can I get the reward directly in my account?",
    answer: "Yes, the reward is transferred directly to your registered account once verified."
  },
  {
    question: "I have submitted my listing, but have not received the reward?",
    answer: "Ensure your listing was valid and not already existing. If valid, contact customer support for assistance."
  }
];


const ClickAndEarn = () => {

 const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>

      {/* Hero Section */}
      <div className="container-fluid bg-light py-5 text-center">
        <img
          src={ClickAndEarnImg}
          alt="Click and Earn"
          style={{ width: "100%", maxHeight: "650px" }}
        />
      </div>

      <div className="d-flex justify-content-center align-items-center" style={{ height: "200px" }}>
        <h4 className="text-center">
          Click a Pic or Refer owner details to earn upto ₹120 for every property listing we publish.
        </h4>
      </div>

      {/* Section 1: How it Works */}
   
{/* Section 1: How it Works (Image Left, Text Right) */}
<div className="container my-5">
  <div className="row align-items-center text-center text-md-start">
    {/* Image on Left */}
    <div className="col-md-4 mb-3 mb-md-0">
      <div className="card p-3 shadow-sm h-100 d-flex justify-content-center align-items-center">
        <img
          src="https://assets.nobroker.in/nb-new/public/Refer-And-Earn/enter-owner-details.png"
          alt="Enter Owner Details"
          className="img-fluid"
          style={{ width: "120px", height: "120px", objectFit: "contain" }}
        />
      </div>
    </div>

    {/* Text & Button on Right */}
    <div className="col-md-8 mb-3 mb-md-0 text-success d-flex flex-column justify-content-center">
      <h5>Cool! How do I do it ?</h5>
      <p>
        Share contact details of the property owner and get rewarded
      </p>
      <button 
        className="btn btn-success rounded-pill px-4 w-auto"
        style={{ maxWidth: "200px" }}
      >
        Enter Owner Details
      </button>
    </div>
  </div>
</div>


      {/* Section 2: Upload Photo with light grey background */}
      <div className="container-fluid" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container my-6">
          <div className="row align-items-center text-center text-md-start">
            {/* Text & Button */}
            <div className="col-md-8">
              <h5>A little extra dough is always welcome</h5>
              <p>
                Alternatively, click and upload a picture of the 'TO LET', or 'FOR SALE' board outside any house, plot or commercial property in
                <br />
                <strong>Bangalore, Mumbai, Pune, Chennai, Gurgaon, Hyderabad, Delhi, Noida, Greater Noida, Ghaziabad, Faridabad</strong>
              </p>
              <button className="btn btn-success rounded-pill px-3">Upload Photo</button>
            </div>
            {/* Image */}
            <div className="col-md-4 mb-3 mb-md-0">
              <img
                src="https://assets.nobroker.in/nb-new/public/Refer-And-Earn/Camera.png"
                alt="Upload Photo"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Partners Earnings */}
      <div className="container my-5">
        <div className="row align-items-center text-center text-md-start">
          {/* Right Image */}
          <div className="col-md-4">
            <img
              src="https://assets.nobroker.in/nb-new/public/Refer-And-Earn/tiltWallet.png"
              alt="Wallet"
              className="img-fluid"
            />
          </div>

          {/* Left Text & Button */}
          <div className="col-md-8 mb-3 mb-md-0">
            <h5>A little extra dough is always welcome</h5>
            <p>
              Our partners are earning additional 25-30K through our Refer & Earn platform.<br/>
              What will <strong>You</strong> do with all that extra money?
            </p>
            <button className="btn btn-success rounded-pill px-3">I'm In</button>
          </div>
        </div>
      </div>


<div className="container-fluid" style={{ backgroundColor: "#f8f9fa", paddingTop: "40px", paddingBottom: "40px" }}>
  <div className="container">
    <div className="row">
      {customerReviews.map((customer, index) => (
        <div key={index} className="col-md-6 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <img
                src={customer.img}
                alt={customer.name}
                className="rounded-circle mb-3"
                style={{ width: "80px", height: "80px", objectFit: "cover" }}
              />
              <h5 className="card-title">{customer.name}</h5>
              <h6 className="text-muted">{customer.service}</h6>
              <p className="mb-2">
                {Array.from({ length: customer.rating }).map((_, i) => (
                  <span key={i} style={{ color: "#FFD700", fontSize: "1rem" }}>★</span>
                ))}
              </p>
              <p className="card-text">{customer.review}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

       <div className="container my-5">
      <h3 className="mb-4">Common Questions</h3>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="card mb-2 shadow-sm"
        >
          <div
            className="card-header d-flex justify-content-between align-items-center"
            style={{ cursor: "pointer" }}
            onClick={() => toggleFAQ(index)}
          >
            <span>{faq.question}</span>
            <span style={{ fontSize: "1.5rem" }}>
              {openIndex === index ? "-" : "+"}
            </span>
          </div>
          {openIndex === index && (
            <div className="card-body">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>

    </div>
  );
};

export default ClickAndEarn;
