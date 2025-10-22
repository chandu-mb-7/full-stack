
import React, { useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import "./PayRent.css";

const PayRent = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const toggleFAQ = (i) => setOpenFAQ(openFAQ === i ? null : i);

  const faqs = [
    { q: "How secure is NoBroker Pay?", a: "Your payments are encrypted and secure." },
    { q: "How to contact NoBroker?", a: "You can reach us via customer support." },
    { q: "What are the benefits of using NoBroker Pay?", a: "Instant payments, rewards, and cashback." },
    { q: "What are the fees/charges for using NoBroker Pay?", a: "Minimal charges for credit card payments." },
    { q: "How do I make my house rent payment?", a: "Use any of the payment options above." },
    { q: "How do I earn cashback/rewards?", a: "Refer & Earn program available for users." },
  ];

  const reviews = [
    {
      name: "Jyothi Dave",
      text: "I am really excited about using NoBroker Pay. The process was seamless and quick.",
      img: "https://assets.nobroker.in/hs-new/public/Home-Services/testimonial_manoj.webp",
    },
    {
      name: "Arjun Santosh",
      text: "NoBroker Pay helped me manage finances better. I now earn rewards easily using my card.",
      img: "https://assets.nobroker.in/hs-new/public/Home-Services/testimonial_daniel.webp",
    },
  ];

  const rotatingWords = [
  "Rent",
  "Maintenance",
  "Education Fee",
  "Property Deposit",
  "Shop Rent",
  "Tuition Fee",
];

const [rotatingWord, setRotatingWord] = useState(rotatingWords[0]);

React.useEffect(() => {
  let index = 0;
  const interval = setInterval(() => {
    index = (index + 1) % rotatingWords.length;
    setRotatingWord(rotatingWords[index]);
  }, 2000); 
  return () => clearInterval(interval);
}, []);


  return (
    <div className="pay-page">
      {/* === FIXED BLUE HEADER === */}
      <header className="top-fixed">
        <div className="blue-bg">
          <Container className="text-center">
            <h2 className="main-heading">Payments via Credit Card</h2>
           <p className="subtext">
  START NEW PAYMENT FOR{"   "}
  <span className="highlight rotating-text subtext bold">{rotatingWord}</span>
</p>
          </Container>
        </div>

        {/* Floating white cards (overlap area) */}
       <div className="floating-cards">
  <div className="max-container">
    <div className="card-row">
      <Card className="action-card">
        <div className="card-content">
          <i className="bi bi-person-circle"></i>
          <h6>to Contact</h6>
        </div>
      </Card>
      <Card className="action-card ">
        <div className="card-content">
          <i className="bi bi-upc-scan"></i>
          <h6>to UPI</h6>
        </div>
      </Card>
      <Card className="action-card">
        <div className="card-content">
          <i className="bi bi-bank"></i>
          <h6>to Bank Account</h6>
        </div>
      </Card>
    </div>
  </div>
</div>


      </header>

      {/* === MAIN CONTENT (scrolls underneath) === */}
      <main className="content">
        <section className="section-box">
          <Card className="p-4 shadow-sm border-0">
            <h5 className="fw-semibold mb-4">Pay bills expenses</h5>
            <div className="bill-icons">
              {[
                { icon: "bi-house-door", label: "House Rent" },
                { icon: "bi-book", label: "School Fee" },
                { icon: "bi-building", label: "Society Maintenance" },
                { icon: "bi-journal", label: "Tuition Fee" },
                { icon: "bi-briefcase", label: "Office/Shop Rent" },
                { icon: "bi-key", label: "Property Token" },
                { icon: "bi-shield-lock", label: "Property Deposit" },
              ].map((b, i) => (
                <div key={i} className="bill-item">
                  <i className={`bi ${b.icon} bill-icon`}></i>
                  <p>{b.label}</p>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Why Pay Section */}
        <section className="section-box">
          <Row className="g-3">
            {[
              {
                icon: "bi-lightning-charge",
                title: "Instant transfer to bank accounts",
                subtitle: "get 45 days of interest free credit",
              },
              {
                icon: "bi-cash-stack",
                title: "Keep more money in your bank account",
                subtitle: "and get 45 days interest free credit",
              },
              {
                icon: "bi-graph-up",
                title: "Doorway to increase your credit score",
                subtitle: "and get 45 days interest free credit",
              },
            ].map((item, idx) => (
              <Col md={4} sm={12} key={idx}>
                <Card className="p-3 shadow-sm border-0 text-start why-card">
                  <div className="why-icon">
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                  <div>
                    <h6 className="fw-semibold">{item.title}</h6>
                    <p className="small mb-0">{item.subtitle}</p>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        {/* Reviews */}
        <section className="section-box">
          <h5 className="fw-semibold mb-3">Customer Reviews</h5>
          <Row className="g-3">
            {reviews.map((r, i) => (
              <Col md={6} key={i}>
                <Card className="p-4 border-0 shadow-sm review-card">
                  <p className="review-text">{r.text}</p>
                  <div className="reviewer">
                    <img src={r.img} alt={r.name} className="review-img" />
                    <span className="review-name">{r.name}</span>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        {/* FAQ Section */}
        <section className="section-box">
          <h5 className="fw-semibold mb-3">Frequently Asked Questions</h5>
          {faqs.map((faq, i) => (
            <Card
              key={i}
              className="faq-card mb-2 border-0 shadow-sm"
              onClick={() => toggleFAQ(i)}
            >
              <div className="card-header d-flex justify-content-between align-items-center">
                <span>{faq.q}</span>
                <span className="toggle">{openFAQ === i ? "−" : "+"}</span>
              </div>
              {openFAQ === i && <div className="card-body">{faq.a}</div>}
            </Card>
          ))}
        </section>
      </main>
    </div>
  );
};

export default PayRent;
