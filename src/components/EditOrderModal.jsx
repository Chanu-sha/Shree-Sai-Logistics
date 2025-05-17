import { useState, useEffect } from "react";
import { useOrders } from "../context/OrderContext";
import { updateOrder } from "../api/orderApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/AddOrderModal.css";

const EditOrderModal = ({ onClose, orderData }) => {
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

  useEffect(() => {
    if (orderData) {
      setFormData({
        consignmentNo: orderData.consignmentNo || "",
        bookingDate: orderData.bookingDate || "",
        origin: orderData.origin || "",
        destination: orderData.destination || "",
        status: orderData.status || "",
        expectedDeliveryDate: orderData.expectedDeliveryDate || "",
        expectedDelivery: orderData.expectedDelivery || "",
        detailsImage: null,
      });
    }
  }, [orderData]);

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
    try {
      const updateData = new FormData();
      updateData.append("consignmentNo", formData.consignmentNo);
      updateData.append("bookingDate", formData.bookingDate);
      updateData.append("origin", formData.origin);
      updateData.append("destination", formData.destination);
      updateData.append("status", formData.status);
      updateData.append("expectedDeliveryDate", formData.expectedDeliveryDate);
      updateData.append("expectedDelivery", formData.expectedDelivery);
      if (formData.detailsImage) {
        updateData.append("detailsImage", formData.detailsImage);
      }

      await updateOrder(orderData._id, updateData);
      await fetchOrders();

      toast.success("🚚 Order updated successfully!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      onClose();
    } catch (error) {
      console.error("Update error:", error);
      toast.error("❌ Failed to update order!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
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
        <h2>Edit Order</h2>
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
                      <option value="Accepted">Accepted</option>
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
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="modal-actions">
            <button type="button" onClick={onClose} className="cancel-btn">
              Cancel
            </button>
            <button type="submit" className="confirm-btn">
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditOrderModal;
