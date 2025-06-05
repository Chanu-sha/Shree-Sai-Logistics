import { useNavigate } from "react-router-dom";
import "../styles/Branches.css";
import blogpageimage from "../assets/Blogpage-img.png";
import { useEffect } from "react";

const Branches = () => {
  const navigate = useNavigate();

  const handleConnectClick = () => {
    navigate("/contactus");
  };

  useEffect(() => {
    document.title = "Branches | Shree Sai Logistics";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Explore Shree Sai Logistics branches across Odisha and India for reliable and faster logistics solutions."
      );
    }

    // Add data labels for mobile responsive table
    const addDataLabels = () => {
      const table = document.querySelector('.branches-table');
      if (!table) return;
      
      const headers = ['SL No', 'State', 'City'];
      const cells = table.querySelectorAll('td');
      
      cells.forEach((cell, index) => {
        const headerIndex = index % headers.length;
        cell.setAttribute('data-label', headers[headerIndex]);
      });
    };
    
    addDataLabels();
  }, []);

  return (
    <div className="blog-hero">
      <div className="text-content">
        <h1>Take Your Business to the Next Level</h1>
        <p>
          We provide complete solutions for delivering your goods, efficient
          load logistics solutions for global corporations.
        </p>
        <button className="learn-more-btn" onClick={handleConnectClick}>
          Connect With Us
        </button>
      </div>

      <div className="image-container">
        <img src={blogpageimage} alt="Road-way-Logistic" loading="lazy" />
      </div>

      <div className="branches-table-section">
        <h2>Our Branches In Following States</h2>
        <div className="table-wrapper">
          <table className="branches-table">
            <thead>
              <tr>
                <th>SL No</th>
                <th>State</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Andhra Pradesh</td>
                <td>Amaravati</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Assam</td>
                <td>Guwahati</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Bihar</td>
                <td>Patna</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Chhattisgarh</td>
                <td>Raipur</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Goa</td>
                <td>Vasco-da-Gama</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Gujarat</td>
                <td>Ahmedabad/Surat</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Haryana</td>
                <td>Gurgaon/Manesar</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Jharkhand</td>
                <td>Ranchi</td>
              </tr>
              <tr>
                <td>9</td>
                <td>Karnataka</td>
                <td>Bangalore</td>
              </tr>
              <tr>
                <td>10</td>
                <td>Kerala</td>
                <td>Thiruvananthapuram</td>
              </tr>
              <tr>
                <td>11</td>
                <td>Madhya Pradesh</td>
                <td>Bhopal/Indore/Gwalior</td>
              </tr>
              <tr>
                <td>12</td>
                <td>Maharashtra</td>
                <td>Mumbai/Pune/Nasik/Nagpur</td>
              </tr>
              <tr>
                <td>13</td>
                <td>New Delhi</td>
                <td>Delhi/Hazrat Nizamuddin</td>
              </tr>
              <tr>
                <td>14</td>
                <td>Odisha</td>
                <td>Bhubaneswar/Cuttack</td>
              </tr>
              <tr>
                <td>15</td>
                <td>Punjab</td>
                <td>Chandigarh/Ludhiana</td>
              </tr>
              <tr>
                <td>16</td>
                <td>Rajasthan</td>
                <td>Jaipur/Ajmer/Jodhpur</td>
              </tr>
              <tr>
                <td>17</td>
                <td>Tamil Nadu</td>
                <td>Chennai/Coimbatore/Erode</td>
              </tr>
              <tr>
                <td>18</td>
                <td>Telangana</td>
                <td>Hyderabad</td>
              </tr>
              <tr>
                <td>19</td>
                <td>Uttar Pradesh</td>
                <td>Lucknow/Noida/Ghaziabad/Kanpur</td>
              </tr>
              <tr>
                <td>20</td>
                <td>West Bengal</td>
                <td>Kolkata/Howrah</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Branches;