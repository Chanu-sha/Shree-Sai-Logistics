import { useState } from "react";
import "../styles/Admin.css";
import AddOrderModal from "../components/AddOrderModal";
import EditOrderModal from "../components/EditOrderModal";
import DeleteOrderModal from "../components/DeleteOrderModal";
import { useOrders } from "../context/OrderContext";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Admin = () => {
  const { orders, deleteOrder } = useOrders();
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const [showImageModal, setShowImageModal] = useState(false);
  const [imageToShow, setImageToShow] = useState("");

  const filteredOrders = orders.filter((order) =>
    order.consignmentNo?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddOrder = () => {
    setShowAddModal(true);
  };

  const handleEditOrder = (order) => {
    setSelectedOrder(order);
    setShowEditModal(true);
  };

  const handleDeleteOrder = (order) => {
    setSelectedOrder(order);
    setShowDeleteModal(true);
  };

  const handleViewImage = (order) => {
    if (order.images) {
      setImageToShow(order.images);
      setShowImageModal(true);
    } else {
      toast.error("No image available for this order.");
    }
  };

  return (
    <div className="orders-container">
      <div className="orders-header">
        <h2>Orders List</h2>
        <button className="add-order-btn" onClick={handleAddOrder}>
          + Add Order
        </button>
      </div>

      <div className="orders-summary">
        <div className="summary-card">
          <h4>Total Orders</h4>
          <p>{orders.length}</p>
        </div>
        <div className="summary-card">
          <h4>Completed Orders</h4>
          <p>{orders.filter((o) => o.status === "Completed").length}</p>
        </div>
        <div className="summary-card">
          <h4>Pending Orders</h4>
          <p>{orders.filter((o) => o.status === "Pending").length}</p>
        </div>
        <div className="summary-card">
          <h4>Cancelled Orders</h4>
          <p>{orders.filter((o) => o.status === "Cancelled").length}</p>
        </div>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by Consignment Number..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="orders-table">
        <table>
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.consignmentNo}>
                <td>{order.consignmentNo}</td>
                <td>{order.bookingDate}</td>
                <td>{order.origin}</td>
                <td>{order.destination}</td>
                <td>
                  <span
                    className={`status-badge ${order.status.toLowerCase()}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td>{order.expectedDeliveryDate}</td>
                <td>{order.expectedDelivery}</td>
                <td>
                  <button
                    className="details-btn"
                    onClick={() => handleViewImage(order)}
                  >
                    View
                  </button>
                </td>
                <td>
                  <div className="action-buttons">
                    <button
                      className="edit-btn"
                      onClick={() => handleEditOrder(order)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDeleteOrder(order)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredOrders.length === 0 && (
          <p className="no-data">No matching orders found.</p>
        )}
      </div>

      {showAddModal && <AddOrderModal onClose={() => setShowAddModal(false)} />}
      {showEditModal && (
        <EditOrderModal
          onClose={() => setShowEditModal(false)}
          orderData={selectedOrder}
        />
      )}
      {showDeleteModal && (
        <DeleteOrderModal
          onClose={() => setShowDeleteModal(false)}
          orderId={selectedOrder?.consignmentNo}
        />
      )}

      {showImageModal && (
        <div className="fullscreen-image-modal" onClick={() => setShowImageModal(false)}>
          <span className="close-btn">&times;</span>
          <img src={imageToShow} alt="Order" />
        </div>
      )}

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Admin;
