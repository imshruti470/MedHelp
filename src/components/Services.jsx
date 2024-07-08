import React from "react";
import haha from "../assets/undraw_doctors_p6aq (1).svg";
import scoliosis from "../assets/scoliosis.webp"
import cardiology from "../assets/cardiology.webp"
import cardioThoracic from "../assets/cardioThoracic.webp"
import dentistry from "../assets/dentistry.webp"
import gastro from "../assets/gastro.webp"
import nephrology from "../assets/nephrology.jpg"
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/appointment');
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200 text-blue-400">
        <div className="hero-content flex-col lg:flex-row">
          <img src={haha} alt=""/>
          <div>
            <h1 className="text-5xl font-bold">Best Care For Close Ones!</h1>
            <p className="py-6 text-3xl text-gray-800">
            Our hospital provides emergency care, advanced surgeries, specialized treatments, and comprehensive diagnostic services, including imaging and laboratory tests, ensuring high-quality healthcare tailored to our patients' needs.
            </p>
            <button className="btn btn-primary color-blue-400">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 mt-10">
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={cardiology}
              alt="cardiology"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-10">Cardiology</h2>
            
            <div className="text-right">
              <button className="btn btn-primary"  onClick={handleButtonClick}>Book Appointment</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={nephrology}
              alt="nephrology"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-10">Nephrology</h2>
            
            <div className="text-right">
              <button className="btn btn-primary" onClick={handleButtonClick}>Book Appointment</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={dentistry}
              alt="dentistry"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-10">Dentistry</h2>
           
            <div className="text-right">
              <button className="btn btn-primary" onClick={handleButtonClick}>Book Appointment</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={cardioThoracic}
              alt="cardio thoracic"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-10">Cardio Thoracic Surgery</h2>
            
            <div className="text-right">
              <button className="btn btn-primary" onClick={handleButtonClick}>Book Appointment</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={gastro}
              alt="gastro"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-10">Gastroenterology</h2>
            
            <div className="text-right">
              <button className="btn btn-primary" onClick={handleButtonClick}>Book Appointment</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-90 shadow-xl">
          <figure>
            <img
              src={scoliosis}
              alt="scoliosis"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-10">Scoliosis Surgery</h2>
           
            <div className="text-right">
              <button className="btn btn-primary" onClick={handleButtonClick}>Book Appointment</button>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Services;
