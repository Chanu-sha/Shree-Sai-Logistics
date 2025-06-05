import { useEffect, useState } from "react";
import "../styles/Services.css";
import servicesImage1 from "../assets/Services-img-1.jpg";
import servicesImage2 from "../assets/Carousel-img-3.jpeg";
import servicesImage3 from "../assets/Services-img-2.jpg";

const Services = () => {
  const [activeService, setActiveService] = useState("truck");

  const serviceData = {
    air: {
      image: servicesImage1,
      title: "Air Services",
      desc: "It’s the fastest shipping method, ideal for high-value, urgent, or lightweight shipments over long distances.",
    },
    shipping: {
      image: servicesImage2,
      title: "Rail Services",
      desc: "Gathering items from the sender and preparing them for transportation/properly packaging goods and labeling.",
    },
    truck: {
      image: servicesImage3,
      title: "Surface Services",
      desc: "It is one of the most common methods of shipping, especially for domestic or short-distance loadposts.",
    },
  };
  useEffect(() => {
    document.title = "Services | Shree Sai Logistics";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Explore our logistics services like Customs Clearance, Surface Express, Air Domestic Express, and more."
      );
    }
  }, []);

  return (
    <div className="services-page">
      <div className="services-header">
        <h4>Our Services</h4>
        <h2>We Have Everything</h2>
        <p>
          "Our logistics company is dedicated to delivering goods safely and on
          time across every city and town in India, with a strong local network
          and experienced professionals."
        </p>
      </div>

      <div className="services-container">
        <div className="services-image">
          <img src={serviceData[activeService].image} alt="Service" loading="lazy" />
        </div>

        <div className="services-list">
          {Object.keys(serviceData).map((key) => (
            <div
              key={key}
              className={`service-box ${activeService === key ? "active" : ""}`}
              onClick={() => setActiveService(key)}
            >
              <h3>{serviceData[key].title}</h3>
              <p>{serviceData[key].desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
