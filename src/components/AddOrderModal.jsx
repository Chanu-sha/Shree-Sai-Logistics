import "../styles/AddOrderModal.css";
import { useState, useEffect } from "react";
import { useOrders } from "../context/OrderContext";
import { addOrder } from "../api/orderApi";
import { toast } from "react-toastify";

const AddOrderModal = ({ onClose }) => {
  const { fetchOrders } = useOrders();

  const [formData, setFormData] = useState({
    consignmentNo: "",
    bookingDate: "",
    origin: "",
    destination: "",
    status: "",
    expectedDeliveryDate: "",
    expectedDelivery: "",
    detailsImage: null,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      detailsImage: file,
    }));
  };

  const handleConfirm = async () => {
    setLoading(true);

    try {
      const data = new FormData();
      data.append("consignmentNo", formData.consignmentNo);
      data.append("bookingDate", formData.bookingDate);
      data.append("origin", formData.origin);
      data.append("destination", formData.destination);
      data.append("status", formData.status);
      data.append("expectedDeliveryDate", formData.expectedDeliveryDate);
      data.append("expectedDelivery", formData.expectedDelivery);
      if (formData.detailsImage) {
        data.append("detailsImage", formData.detailsImage);
      }

      await addOrder(data);
      await fetchOrders();

      toast.success("✅ Order added successfully!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      onClose();
    } catch (err) {
      console.error(err);

      toast.error("❌ Failed to add order. Please try again.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2>Add New Order</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleConfirm();
          }}
        >
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Consignment No</th>
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
                  <td>
                    <input
                      type="text"
                      name="consignmentNo"
                      value={formData.consignmentNo}
                      onChange={handleChange}
                      required
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      name="bookingDate"
                      value={formData.bookingDate}
                      onChange={handleChange}
                      required
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="origin"
                      value={formData.origin}
                      onChange={handleChange}
                      required
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      required
                    />
                  </td>
                  <td>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="Pending">Pending</option>
                      <option value="Completed">Completed</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="date"
                      name="expectedDeliveryDate"
                      value={formData.expectedDeliveryDate}
                      onChange={handleChange}
                      required
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="expectedDelivery"
                      value={formData.expectedDelivery}
                      onChange={handleChange}
                      required
                    />
                  </td>
                  <td>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      required
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="modal-actions">
            <button
              type="button"
              onClick={onClose}
              className="cancel-btn"
              disabled={loading}
            >
              Cancel
            </button>
            <button type="submit" className="confirm-btn" disabled={loading}>
              {loading ? "Adding..." : "Confirm"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddOrderModal;
