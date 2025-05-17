import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/AdminLoginModal.css";

const AdminLoginModal = ({ isOpen, onClose, onLoginSuccess }) => {
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const hardcodedId = import.meta.env.VITE_ADMIN_ID;
    const hardcodedPass = import.meta.env.VITE_ADMIN_PASSWORD;

    if (adminId === hardcodedId && password === hardcodedPass) {
      onLoginSuccess();
      navigate("/admin");
      toast.success("Login successful!");
    } else {
      toast.error("Invalid Admin ID or Password!");
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="admin-modal-overlay">
        <div className="admin-modal">
          <h2>Admin Login</h2>
          <input
            type="text"
            placeholder="Admin ID"
            value={adminId}
            onChange={(e) => setAdminId(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
          <button className="close-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
};

export default AdminLoginModal;
