import "../styles/DeleteOrderModal.css";
import { useOrders } from "../context/OrderContext";
import { toast } from "react-toastify";

const DeleteOrderModal = ({ onClose, orderId }) => {
  const { deleteOrder } = useOrders();

  const handleConfirm = async () => {
    try {
      await deleteOrder(orderId);

      toast.success(`🗑️ Order ID ${orderId} deleted successfully!`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      onClose();
    } catch (error) {
      console.error("Delete error:", error);

      toast.error("❌ Failed to delete order. Please try again.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div className="delete-modal-overlay">
      <div className="delete-modal-container">
        <h2>Are you sure you want to delete this order?</h2>

        <div className="delete-modal-actions">
          <button onClick={onClose}>Cancel</button>
          <button onClick={handleConfirm}>Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteOrderModal;
