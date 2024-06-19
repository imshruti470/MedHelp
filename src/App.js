import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Appointment from "./components/Appointment";
import Services from "./components/Services";
import SignUp from "./components/LoginPage";
import ForgotPassword from "./components/ForgotPassword";
import Doctors from "./components/Doctors";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/resetPassword" element={<ForgotPassword />} />
          <Route path="/doctors" element={<Doctors />} />
          
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
