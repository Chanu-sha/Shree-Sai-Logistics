import { useRef } from "react";
import emailjs from "emailjs-com";
import "../styles/ContactUs.css";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const ContactUs = () => {
  const form = useRef();

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
      <Helmet>
        <title>Contact Us | Shree Sai Logistics</title>
        <meta
          name="description"
          content="Get in touch with Shree Sai Logistics for reliable courier and cargo services across Odisha and India."
        />
        <meta
          name="keywords"
          content="Contact Logistics Bhubaneswar, Courier Support Odisha, Cargo Enquiry"
        />
      </Helmet>

      <div className="contact-page">
        <div className="form-section">
          <h4>OUR</h4>
          <h1>CONTACT FORM</h1>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Name*" required />
            <input type="email" name="email" placeholder="Email*" required />
            <input type="text" name="subject" placeholder="Subject*" required />
            <textarea
              name="message"
              placeholder="Comment*"
              rows="5"
              required
            ></textarea>
            <button type="submit">SUBMIT</button>
          </form>
        </div>

        <div className="map-section">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.304370176794!2d72.95966821437812!3d19.17467345273337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b90d330e1c31%3A0x3f7cf39d28052a02!2sVikas%20Centre%20(Arya%20Nivas)!5e0!3m2!1sen!2sin!4v1650036820680!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Our Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
