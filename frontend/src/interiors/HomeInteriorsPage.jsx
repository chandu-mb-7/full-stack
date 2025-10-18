import React, { useState, useEffect } from "react";
import {
  FaArrowRight,
  FaStar,
  FaUsers,
  FaCouch,
  FaHeart,
  FaPiggyBank,
  FaRegComments,
  FaHandshake,
  FaPencilRuler,
  FaHammer,
} from "react-icons/fa";
import "./HomeInteriorsPage.css";

import interiors1 from "../assets/interior1.jpg";
import interiors2 from "../assets/interior2.jpg";
import interiors3 from "../assets/interior3.jpg";
import idea1 from "../assets/idea1.jpg";
import idea2 from "../assets/idea2.jpg";
import idea3 from "../assets/idea3.jpg";
import idea4 from "../assets/idea4.jpg";
import idea5 from "../assets/idea5.jpg";
import idea6 from "../assets/idea6.jpg";
import room1 from "../assets/room1.jpg";
import room2 from "../assets/room2.jpg";
import room3 from "../assets/room3.jpg";
import room4 from "../assets/room4.jpg";
import room5 from "../assets/room5.jpg";
import room6 from "../assets/room6.jpg";
import room7 from "../assets/room7.jpg";
import room8 from "../assets/room8.jpg";
import review1 from "../assets/review1.jpg";
import review2 from "../assets/review2.jpg";
import review3 from "../assets/review3.jpg";
import review4 from "../assets/review4.jpg";
import review5 from "../assets/review5.jpg";

const HomeInteriorsPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 5);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      image: interiors1,
      title: "Upto 25% OFF on Home Interiors",
      subtitle: "Making your dream home a reality",
      button: "Get a Free Quote",
    },
    {
      image: interiors2,
      title: "Get your Free Personal Designer",
      subtitle:
        "Unlock the full potential of your space with our personalized interior design expertise.",
      button: "Book Free Design Session",
    },
    {
      image: interiors3,
      title: "5000+ Happy Homes Delivered",
      subtitle: "Start your journey by meeting a design expert",
      button: "Schedule Free Visit",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const testimonials = [
  {
    image: review1,
    title: "Completed the project within timeline",
    text: "The NoBroker Interiors team is excellent. They did an outstanding job and delivered the project on time.",
    name: "Anuj Garg",
  },
  {
    image: review2,
    title: "Fulfilling the promises",
    text: "We used NoBroker Interior services, and our experience was really good. The quality of work was great.",
    name: "Himanshu Shekhar",
  },
  {
    image: review3,
    title: "Hassle free experience",
    text: "We used NoBroker Interior services, and our experience was really good. They handled everything smoothly.",
    name: "Gagandeep Kaur",
  },
  {
    image: review4,
    title: "Professional & Transparent",
    text: "NoBroker’s design process was seamless, the designers were creative, and pricing was transparent throughout.",
    name: "Priya Sharma",
  },
  {
    image: review5,
    title: "Loved the final results",
    text: "Our new interiors look beautiful. The attention to detail and finishing were top-notch. Highly recommend!",
    name: "Rohit Mehta",
  },
];


  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };
  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const rooms = [
    { title: "Kid's Bedroom", ideas: 70, image: room1 },
    { title: "Foyer & Living", ideas: 223, image: room2 },
    { title: "Master Bedroom", ideas: 386, image: room3 },
    { title: "Kitchen", ideas: 400, image: room4 },
    { title: "Living & Dining", ideas: 379, image: room5 },
    { title: "Guest Bedroom", ideas: 80, image: room6 },
    { title: "Dining Area", ideas: 186, image: room7 },
    { title: "Study", ideas: 190, image: room8 },
  ];

  return (
    <div className="interiors-container">
    
      <div className="carousel">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="overlay">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
              <button className="cta-btn">{slide.button}</button>
            </div>
          </div>
        ))}

        <div className="dots">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentSlide ? "active-dot" : ""}`}
              onClick={() => setCurrentSlide(index)}
            ></div>
          ))}
        </div>
      </div>

      <div className="info-row">
        <span>🖋 Personalised Designs</span>
        <span>₹ Transparent Pricing</span>
        <span>🔒 Flat 10-year warranty</span>
      </div>

      {/* ===== Discover Ideas By Room ===== */}
      <div className="discover-section">
        <h2 className="discover-title">Discover Ideas By Room</h2>
        <div className="discover-container">
          {rooms.map((room, index) => (
            <div className="room-card" key={index}>
              <img src={room.image} alt={room.title} />
              <div className="room-overlay">
                <h3>{room.title}</h3>
                <p>{room.ideas} Ideas</p>
                <div className="arrow-circle">&gt;</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="featured-project-section">
        {!showVideo ? (
          <>
            <div className="featured-left">
              <img
                src={interiors2}
                alt="Ridhee's Dream Home"
                className="featured-img"
              />
            </div>
            <div className="featured-right">
              <p className="featured-label">Featured Project</p>
              <h2 className="featured-title">Ridhee's Dream Home</h2>
              <p className="featured-desc">
                “ NoBroker did an exceptional job in bringing our dream home
                interiors to life, creating a personalized space that exceeded
                our expectations. Kudos to the team for their flexibility and
                keen attention to detail. ”
              </p>
              <div className="featured-actions">
                <button className="video-btn" onClick={() => setShowVideo(true)}>
                  ▶ Video Tour
                </button>
                <a href="#" className="review-link">
                  View More Reviews &gt;
                </a>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="featured-left video-active">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/4Hw2NkTpo5A?autoplay=1"
                title="Ridhee's Dream Home"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="featured-right">
              <p className="featured-label">Featured Project</p>
              <h2 className="featured-title">Ridhee's Dream Home</h2>
              <p className="featured-desc">
                “ NoBroker did an exceptional job in bringing our dream home
                interiors to life, creating a personalized space that exceeded
                our expectations. Kudos to the team for their flexibility and
                keen attention to detail. ”
              </p>
              <div className="featured-actions">
                <button
                  className="video-btn close"
                  onClick={() => setShowVideo(false)}
                >
                  ✖ Close Video
                </button>
                <a href="#" className="review-link">
                  View More Reviews &gt;
                </a>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="discover-section">
        <h2 className="discover-title">Discover Ideas By Style</h2>
        <div className="discover-container">
          {[
            { title: "Scandinavian", ideas: 600, image: room1 },
            { title: "Minimalism", ideas: 428, image: room2 },
            { title: "Eclectic", ideas: 388, image: room3 },
            { title: "Tropical", ideas: 504, image: room4 },
            { title: "Indian Contemporary", ideas: 514, image: room5 },
            { title: "Indian Fusion", ideas: 367, image: room6 },
            { title: "Mid Century Modern", ideas: 390, image: room7 },
            { title: "Modern Classical", ideas: 584, image: room8 },
          ].map((style, index) => (
            <div className="room-card" key={index}>
              <img src={style.image} alt={style.title} />
              <div className="room-overlay">
                <h3>{style.title}</h3>
                <p>{style.ideas} Ideas</p>
                <div className="arrow-circle">&gt;</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="why-choose-section">
        <h2 className="why-title">Why Choose Us</h2>
        <div className="why-cards">
          {[
            {
              icon: <FaUsers />,
              title: "Dedicated Project Team",
              desc: "Proficient team of professionals, skilled designers and experienced project managers",
            },
            {
              icon: <FaCouch />,
              title: "End to End Execution",
              desc: "Turning your dream home interior into reality, from design to installation and finishing touches",
            },
            {
              icon: <FaHeart />,
              title: "Personalized Designs",
              desc: "Personalized Interior design that truly fits your needs and complement lifestyle",
            },
            {
              icon: <FaPiggyBank />,
              title: "Value for Money",
              desc: "We provide services at competitive prices with the highest standards of quality",
            },
            {
              icon: <FaStar />,
              title: "Quality Assurance",
              desc: "Maintaining unwavering high standards throughout with 250+ quality checks",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`why-card ${index === activeIndex ? "highlight" : ""}`}
            >
              <div className="why-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="how-it-works-section">
        <h2 className="how-title">How It Works</h2>
        <div className="how-flex">
          <div className="how-item">
            <div className="how-icon">
              <FaRegComments />
            </div>
            <div className="how-text">
              <h3>Free Design Consultation</h3>
              <p>Explore the latest design trends with our designer</p>
            </div>
          </div>

          <div className="how-item">
            <div className="how-icon">
              <FaHandshake />
            </div>
            <div className="how-text">
              <h3>Booking Confirmation</h3>
              <p>Confirm the Dream Home Design By Paying Token</p>
            </div>
          </div>

          <div className="how-item">
            <div className="how-icon">
              <FaPencilRuler />
            </div>
            <div className="how-text">
              <h3>Dream Home Design</h3>
              <p>Personalized Detailed design based on your need and lifestyle</p>
            </div>
          </div>

          <div className="how-item">
            <div className="how-icon">
              <FaHammer />
            </div>
            <div className="how-text">
              <h3>Onsite Services & Installation</h3>
              <p>On-site Service works and Installation of Modular units</p>
            </div>
          </div>
        </div>
      </div>

<div className="testimonial-section">
  <h2 className="testimonial-title">What Our Customers Say</h2>

  <div className="testimonial-wrapper">
    <button className="arrow-circle left" onClick={handlePrev}>
      &lt;
    </button>

    <div className="testimonial-slider">
      {testimonials.map((review, index) => (
        <div
          key={index}
          className={`testimonial-card ${
            index === currentIndex ? "active" : ""
          }`}
        >
          <img src={review.image} alt={review.name} className="review-img" />
          <div className="stars">
            {Array(5)
              .fill()
              .map((_, i) => (
                <FaStar key={i} className="star" />
              ))}
          </div>
          <h3>{review.title}</h3>
          <p className="review-text">{review.text}</p>
          <p className="review-name">{review.name}</p>
        </div>
      ))}
    </div>

    <button className="arrow-circle right" onClick={handleNext}>
      &gt;
    </button>
  </div>
</div>

<div className="cities-section">
  <h2 className="cities-title">
    Cities where we provide Interior Design Services
  </h2>

  <div className="cities-container">
    <div className="city-column">
      <p>Interior Designers in Pune</p>
      <p>Interior Designers in Chennai</p>
      <p>Interior Designers in Gurgaon</p>
      <p>Interior Designers in Faridabad</p>
    </div>

    <div className="city-column">
      <p>Interior Designers in Mumbai</p>
      <p>Interior Designers in Hyderabad</p>
      <p>Interior Designers in Noida</p>
      <p>Interior Designers in Ghaziabad</p>
    </div>

    <div className="city-column">
      <p>Interior Designers in Bangalore</p>
      <p>Interior Designers in Delhi</p>
      <p>Interior Designers in Greater Noida</p>
    </div>
  </div>

  <div className="cities-footer">
    <span>❤️ With love from NoBroker</span>
  </div>
</div>

    </div>
  );
};

export default HomeInteriorsPage;
