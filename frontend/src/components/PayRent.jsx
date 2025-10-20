import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Person, CreditCard, Bank } from "react-bootstrap-icons"; // Using Bootstrap Icons
 

const faqs = [
  { question: "How secure is NoBroker Pay?", answer: "Your payments are encrypted and secure." },
  { question: "How to contact NoBroker?", answer: "You can reach us via customer support." },
  { question: "Benefits of using NoBroker Pay?", answer: "Instant payments, rewards, and cashback." },
  { question: "Fees for using NoBroker Pay?", answer: "Minimal charges for credit card payments." },
  { question: "How do I make my house rent payment?", answer: "Use any of the payment options above." },
  { question: "How do I earn cashback/rewards?", answer: "Refer & Earn program available for users." },
];

const customerReviews = [
  {
    name: "Joyitha Dsouza",
    rating: 5,
    review:
      "I am really excited about using NoBroker Pay. I had paid my house rent through my credit card. The entire process is seamless...",
    img: "https://assets.nobroker.in/hs-new/public/Home-Services/testimonial_manoj.webp",
  },
  {
    name: "Arjun Santosh",
    rating: 5,
    review:
      "NoBroker Pay has helped me immensely to manage finances better. Now I am able to earn approx. ₹ 30k using my Amex Platinum...",
    img: "https://assets.nobroker.in/hs-new/public/Home-Services/testimonial_daniel.webp",
  },
];

const PayRent = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [hideHeader, setHideHeader] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll behavior to hide header
   useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setHideHeader(true); // scroll down -> hide header
      } else {
        setHideHeader(false); // scroll up -> show header
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div>
      {/* Header / Payment Options */}
      <div
        className={`bg-primary text-white py-1px-4 d-flex justify-content-start gap-2 align-items-center position-sticky top-0 transition-all`}
        style={{
          zIndex: 999,
          transition: "top 0.3s",
          top: hideHeader ? "-80px" : "0",
        }}
      >
        <button className="btn btn-light">to Contact</button>
        <button className="btn btn-light">to UPI</button>
        <button className="btn btn-light">to Bank Account</button>
      </div>

      {/* Pay Bills Section */}
      <div className="container my-5">
        <div className="card p-4 shadow-sm">
          <h5 className="mb-3">Pay bills expenses</h5>
          <div className="d-flex flex-wrap justify-content-between">
            {[
              "House Rent",
              "School Fee",
              "Society Maintenance",
              "Tuition Fee",
              "Office/Shop Rent",
              "Property Token",
              "Property Deposit",
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-2 mb-2"
                style={{ minWidth: "90px" }}
              >
                <img
                  src="https://assets.nobroker.in/nb-new/public/Refer-And-Earn/Camera.png"
                  alt={item}
                  className="img-fluid mb-1"
                  style={{ width: "40px", height: "40px" }}
                />
                <div style={{ fontSize: "0.8rem" }}>{item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Pay Cards */}
      <div className="container my-4 d-flex flex-wrap gap-3">
        {[
          "Instant transfer to bank accounts",
          "Keep more money in your bank account",
          "Doorway to increase your credit score",
        ].map((text, idx) => (
          <div key={idx} className="card p-3 shadow-sm flex-fill">
            {text}
          </div>
        ))}
      </div>

      {/* Customer Reviews */}
      <div className="container my-5">
        <h5 className="mb-3">Customer Reviews</h5>
        <div className="row">
          {customerReviews.map((c, i) => (
            <div key={i} className="col-md-6 mb-3">
              <div className="card p-3 shadow-sm h-100">
                <p>
                  {Array.from({ length: c.rating }).map((_, idx) => (
                    <span key={idx} style={{ color: "#FFD700" }}>
                      ★
                    </span>
                  ))}
                </p>
                <p>{c.review}</p>
                <div className="d-flex align-items-center gap-2">
                  <img
                    src={c.img}
                    alt={c.name}
                    className="rounded-circle"
                    style={{ width: "40px", height: "40px" }}
                  />
                  <span>{c.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container my-5">
        <h5 className="mb-3">Frequently Asked Questions</h5>
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="card mb-2 shadow-sm"
            style={{ cursor: "pointer" }}
            onClick={() => toggleFAQ(i)}
          >
            <div className="card-header d-flex justify-content-between">
              <span>{faq.question}</span>
              <span>{openFAQ === i ? "-" : "+"}</span>
            </div>
            {openFAQ === i && <div className="card-body">{faq.answer}</div>}
          </div>
        ))}
      </div>








    </div>
  );
};

export default PayRent;
