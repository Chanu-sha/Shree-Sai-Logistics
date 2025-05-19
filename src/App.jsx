import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";
import Branches from "./pages/Branches";
import { OrderProvider } from "./context/OrderContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Tracking from "./pages/Tracking";
import Admin from "./pages/Admin";
import AdminLoginModal from "./components/AdminLoginModal";
import { HelmetProvider } from "react-helmet-async";

function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <HelmetProvider>
    <OrderProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route
            path="/tracking"
            element={
              <Tracking
                setIsModalOpen={setIsModalOpen}
                setIsAdminLoggedIn={setIsAdminLoggedIn}  
              />
            }
          />
          <Route
            path="/admin"
            element={
              isAdminLoggedIn ? (
                <Admin />
              ) : (
                <Navigate to="/tracking" replace={true} />
              )
            }
          />
        </Routes>
        <Footer />
        <ToastContainer />
        <AdminLoginModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onLoginSuccess={() => {
            setIsAdminLoggedIn(true);
            setIsModalOpen(false);
          }}
        />
      </Router>
    </OrderProvider>
    </HelmetProvider>
  );
}

export default App;
