import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import carousel1 from "../assets/Carousel-img-1.png";
import carousel2 from "../assets/Carousel-img-2.jpeg";
import carousel3 from "../assets/Carousel-img-3.jpeg";
import carousel4 from "../assets/Carousel-img-4.jpg";
import carousel5 from "../assets/Carousel-img-5.jpg";
import commitment from "../assets/Carousel-img-6.jpg";
import carousel6 from "../assets/Services-img-2.jpg";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

const slides = [
  {
    image: carousel2, // plane image
    title: "Priority Parcel Dispatch",
    subtitle:
      "Fast and secure parcel dispatch within the city, ensuring your packages reach without delays.",
  },
  {
    image: carousel1, // plane image
    title: "Domestic Air Express",
    subtitle:
      "Quick, reliable delivery across every street and neighborhood in your city.",
  },
  {
    image: carousel4, // train image
    title: "Statewide Cargo Transfers",
    subtitle:
      "Affordable and safe cargo transport between cities — on time, every time.",
  },
  {
    image: carousel3, // train image
    title: "Trusted City-to-City Logistics",
    subtitle:
      "Smooth goods movement from one city to another with guaranteed safety and punctuality.",
  },
  {
    image: carousel6, // truck image
    title: "Bulk Goods Delivery",
    subtitle:
      "Reliable transport for large consignments and multiple packages within the state.",
  },
  {
    image: carousel5, // truck image
    title: "Essential Package Transport",
    subtitle:
      "Fast, safe delivery of essential business and personal packages — handled with care.",
  },
];

  // Auto slide change every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  const navigate = useNavigate();

  const handleBookingClick = () => {
    navigate("/contactUs");
  };
  const handleBLearnMoreClick = () => {
    navigate("/services");
  };

  return (
    <div>
      <section className="hero">
        <div className="hero-slides">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`hero-slide ${index === currentSlide ? "active" : ""}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="slide-overlay"></div>
              <div className="slide-content">
                <h1>{slide.title}</h1>
                <p>{slide.subtitle}</p>
                <button className="cta-button" onClick={handleBookingClick}>
                  Book Your Shipment
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="slide-controls">
          <button className="control-btn prev" onClick={goToPrev}>
            &lt;
          </button>

          <div className="slide-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`indicator ${
                  index === currentSlide ? "active" : ""
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>

          <button className="control-btn next" onClick={goToNext}>
            &gt;
          </button>
        </div>
      </section>
      <section className="commitment-section">
        <div className="commitment-content">
          <div className="commitment-text">
            <p className="small-heading">Our Commitment</p>
            <h2>Delivering the Future Through Secure</h2>
            <p className="description">
              Delivering the Future Through Secure Solutions and Innovation. Our
              logistics company is committed to transforming the transportation
              of goods.
            </p>
            <button className="learn-more-btn" onClick={handleBLearnMoreClick}>
              Learn more
            </button>
          </div>
          <div className="commitment-image">
            <img src={commitment } />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
