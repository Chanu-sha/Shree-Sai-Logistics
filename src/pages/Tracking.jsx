import { useEffect, useState } from "react";
import "../styles/Tracking.css";
import TrackingImage from "../assets/TrackingPageImage.png";
import AdminLoginModal from "../components/AdminLoginModal";
import { getOrderByConsignmentNo } from "../api/orderApi";

const Tracking = ({ setIsAdminLoggedIn }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [consignmentNo, setConsignmentNo] = useState("");
  const [order, setOrder] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  const [showImageModal, setShowImageModal] = useState(false);
  const [imageToShow, setImageToShow] = useState("");

  const closeModal = () => setIsModalOpen(false);

  const handleLoginSuccess = () => {
    setIsAdminLoggedIn(true);
    closeModal();
  };
  useEffect(() => {
    document.title = "Track Your Consignment | Shree Sai Logistics";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Track your consignments easily with Shree Sai Logistics tracking service. Enter your consignment number to check status."
      );
    }
  }, []);

  const handleTrack = async () => {
    if (!consignmentNo.trim()) return;

    setLoading(true);
    setOrder(null);
    setNotFound(false);
    setShowImageModal(false);

    try {
      const data = await getOrderByConsignmentNo(consignmentNo);
      if (data) {
        setOrder(data);
      } else {
        setNotFound(true);
      }
    } catch (err) {
      console.error(err);
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  const handleViewImage = () => {
    if (order?.images) {
      setImageToShow(order.images);
      setShowImageModal(true);
    } else {
      alert("No image available for this order.");
    }
  };

  return (
    <div className="tracking-section">
      <div className="tracking-topbar">
        <button
          className="admin-login-btn"
          onClick={() => setIsModalOpen(true)}
        >
          Admin Login
        </button>
      </div>

      <div className="tracking-container">
        <div className="tracking-content">
          <h4>Manage your time easily</h4>
          <h1>
            Track your Order <br /> and work wisely
          </h1>
          <p>
            There is a time management facility through this modern software.
            Effective time management allows you to achieve great results.
          </p>

          <div className="tracking-input-group">
            <input
              type="text"
              placeholder="Enter your Consignment Number"
              value={consignmentNo}
              onChange={(e) => setConsignmentNo(e.target.value)}
            />
            <button onClick={handleTrack}>
              {loading ? "Tracking..." : "Submit"}
            </button>
          </div>

          {loading && (
            <p style={{ marginTop: "1rem" }}>Fetching order details...</p>
          )}

          {!loading && order && (
            <div className="order-result">
              <table className="trackingtable" >
                <thead>
                  <tr>
                    <th>Consignment Number</th>
                    <th>Booking Date</th>
                    <th>Origin</th>
                    <th>Destination</th>
                    <th>Status</th>
                    <th>Expected Delivery Date</th>
                    <th>Expected Delivery</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td >{order.consignmentNo}</td>
                    <td >{order.bookingDate}</td>
                    <td >{order.origin}</td>
                    <td >{order.destination}</td>
                    <td >{order.status}</td>
                    <td >{order.expectedDeliveryDate}</td>
                    <td >{order.expectedDelivery}</td>
                    <td>
                      <button className="view-btn" onClick={handleViewImage}>
                        View
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {!loading && notFound && (
            <h3 style={{ marginTop: "1rem", color: "#dc2626" }}>
              No order found!
            </h3>
          )}

          <div className="tracking-perks">
            <span>✔ Fast & reliable delivery</span>
            <span>✔ Real-time order tracking available</span>
          </div>
        </div>

        <div className="tracking-image-wrapper">
          <img
            src={TrackingImage}
            alt="Tracking Illustration"
            className="tracking-image"
            loading="lazy"
          />
        </div>
      </div>

      {showImageModal && (
        <div
          className="fullscreen-image-modal"
          onClick={() => setShowImageModal(false)}
        >
          <span className="close-btn">&times;</span>
          <img src={imageToShow} alt="Order" loading="lazy" />
        </div>
      )}

      <AdminLoginModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onLoginSuccess={handleLoginSuccess}
      />
    </div>
  );
};

export default Tracking;
