import { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import "../styles/ContactUs.css";
import { toast } from "react-toastify";

const ContactUs = () => {
  useEffect(() => {
    document.title = "Contact | Shree Sai Logistics";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Get in touch with Shree Sai Logistics. Call +91 7077439999 or email shreesailogistics19@gmail.com."
      );
    }
  }, []);

  const form = useRef();
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setMapLoaded(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "200px", 
        threshold: 0.1
      }
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => {
      if (mapRef.current) {
        observer.unobserve(mapRef.current);
      }
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("✅ Message sent successfully!", {
            position: "top-center",
            autoClose: 3000,
            pauseOnHover: true,
            draggable: true,
          });
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("❌ Failed to send message, please try again.", {
            position: "top-center",
            autoClose: 3000,
            pauseOnHover: true,
            draggable: true,
          });
        }
      );
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-page">
        <div className="form-section">
          <h4>OUR</h4>
          <h1>CONTACT FORM</h1>
          <form ref={form} onSubmit={sendEmail}>
            <input 
              type="text" 
              name="name" 
              placeholder="Name*" 
              required 
              aria-label="Your name"
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Email*" 
              required 
              aria-label="Your email"
            />
            <input 
              type="text" 
              name="subject" 
              placeholder="Subject*" 
              required 
              aria-label="Message subject"
            />
            <textarea
              name="message"
              placeholder="Comment*"
              rows="5"
              required
              aria-label="Your message"
            ></textarea>
            <button type="submit" aria-label="Submit contact form">
              SUBMIT
            </button>
          </form>
        </div>

        <div className="map-section" ref={mapRef}>
          {mapLoaded ? (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.304370176794!2d72.95966821437812!3d19.17467345273337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b90d330e1c31%3A0x3f7cf39d28052a02!2sVikas%20Centre%20(Arya%20Nivas)!5e0!3m2!1sen!2sin!4v1650036820680!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location"
              aria-label="Map showing our location"
            />
          ) : (
            <div className="map-placeholder" aria-hidden="true">
              <p>Loading map...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;