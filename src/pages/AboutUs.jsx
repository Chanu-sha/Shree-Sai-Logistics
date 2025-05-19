import "../styles/AboutUS.css";
import AboutUsImg from "../assets/Carousel-img-5.jpg";

const AboutUs = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <h1>About SHREE SAI LOGISTICS</h1>
          <p>
            Delivering excellence through tailored logistics solutions that
            drive efficiency, innovation, and customer satisfaction All Over
            India.
          </p>
          <span>DRIVEN BY A TALENTED TEAM</span>
        </div>
      </section>

      <section className="who-we-are">
        <div className="text-content">
          <h4>WHO WE ARE</h4>
          <h2>
            We Specialize in <span>End-to-end Logistics Services</span> That
            Ensure Timely and Secure Delivery
          </h2>
          <p>
            Our dedicated team works around the clock to provide tailored
            solutions for businesses of all sizes, helping you meet your goals
            with ease and reliability.
          </p>
          <p>
            We simplify logistics with advanced technology, so you can focus on
            business growth.
          </p>
        </div>
        <div className="image-content">
          <img src={AboutUsImg} alt="Logistics" />
        </div>
      </section>
      <section className="main-hero">
        <div className="main-hero-overlay"></div>
        <div className="main-hero-container">
          <div className="hero-headings">
            <h1>Our Core Values</h1>
            <h2>Guided by Purpose, Driven by Excellence</h2>
          </div>
          <div className="core-values-grid">
            <div className="value-box">
              <div className="value-icon">🚚</div>
              <h3>Reliability</h3>
              <p>
                We ensure dependable logistics services that our clients can
                count on every time.
              </p>
            </div>
            <div className="value-box">
              <div className="value-icon">💡</div>
              <h3>Innovation</h3>
              <p>
                We embrace technology and fresh ideas to improve efficiency and
                service delivery.
              </p>
            </div>
            <div className="value-box">
              <div className="value-icon">🤝</div>
              <h3>Customer Focus</h3>
              <p>
                Your satisfaction drives everything we do. We tailor solutions
                for your unique needs.
              </p>
            </div>
            <div className="value-box">
              <div className="value-icon">🌐</div>
              <h3>Pan-India Delivery Network</h3>
              <p>
                Our reliable logistics network ensures safe and timely delivery
                of your goods to every city, town, and village in India.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stat-box">
          <h2>15</h2>
          <p>Years of Experience</p>
        </div>
        <div className="stat-box">
          <h2>99%</h2>
          <p>On-Time Delivery</p>
        </div>
        <div className="stat-box">
          <h2>500+</h2>
          <p>Clients Served</p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
