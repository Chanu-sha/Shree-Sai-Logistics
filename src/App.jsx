import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";
import Branches from "./pages/Branches";




function App() {
  return (
    <Router>      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/branches" element={<Branches/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contactus" element={<ContactUs/>} />
      </Routes>
      <Footer/>      
    </Router>      
  )
}

export default App
