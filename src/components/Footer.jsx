import "../styles/Footer.css";
import { Link, Links } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/aboutus">AboutUs</Link>
            </li>
            <li>
              <Link to="/branches">Branches</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contactus">Contactus</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section services">
          <h3>Services</h3>
          <ul>
            <li>
              <p>Customs Clearance</p>
            </li>
            <li>
              <p>Surface Express</p>
            </li>
            <li>
              <p>Logistics Consultancy</p>
            </li>
            <li>
              <p>Air Domestic Express</p>
            </li>
            <li>
              <p>Rail Express</p>
            </li>
          </ul>
        </div>

        <div className="footer-section contact-info">
          <h3>Contact</h3>
          <p>
            <strong>Address:</strong>
            <br />
            Plot No. 1518, BONTH, BHADRAK, ODISSA, Pin:-756114
          </p>
          <p>
            <strong>Phone:</strong><br /> +91 7077439999
            <br />
            <strong>Email:</strong> shreesailogistics19@gmail.com
          </p>
          <p>
            <strong>Office Hours:</strong>
            <br />
            6:00Am to 10:00Pm
          </p>
        </div>

        <div className="footer-section social-media">
          <Link to='/' >
            <h3>SHREE SAI LOGISTICS</h3>
            <img
              src="/F-Logo.png"
              alt="SHREE SAI LOGISTICS"
            />
          </Link>
        </div>
      </div>

      <div className="footer-copyright">
        <p>Copyright Reserved By &copy;SHREE SAI LOGISTICS</p>
        
      </div>
    </footer>
  );
};

export default Footer;
