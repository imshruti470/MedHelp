import './App.css';
import {BrowserRouter as Router,Routes,Route}from "react-router-dom"
import Navbar from './components/Nav';
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {
  return (
    <div >
      <Router>
      <Navbar/>
      <Hero/>
        <Routes>
          <Route/>
        </Routes>
        <Footer/>
      </Router>
     
    </div>
  );
}

export default App;
