import React from "react";
import hero from "../assets/hero.svg";
import hero2 from "../assets/hero2.svg";
import hero3 from "../assets/hero3.svg";
import cardiac from "../assets/cardiac.webp"
import gastro from "../assets/gastro.webp"
import scoliosis from "../assets/scoliosis.webp"
import { Link } from "react-router-dom";
import ReviewSlider from "./ReviewSlider";

const Hero = () => {
  return (
    <>
      <>
        <div className="hero min-h-screen bg-base-200 text-blue-800">
          <div className="hero-content flex-col lg:flex-row">
            <img src={hero} alt="" />
            <div>
              <h1 className="text-5xl font-bold">Best Care For Close Ones!</h1>
              <p className="py-6 text-3xl text-gray-900">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary color-blue-400">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </>

      
      <div className="container mx-auto px-4 mb-10 pb-3">
        <h1 className="text-3xl md:text-4xl font-bold text-center pb-3 mb-8 mt-8 text-blue-800">
          Facilities We Provide with Care
        </h1>
        <div className="grid gap-4 xs:gap-6 sm:gap-8 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="card w-full md:w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src={gastro}
                alt="gastro"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Gastroentrology
                <div className="badge badge-secondary">NEW</div>
              </h2>
            </div>
          </div>
          <div className="card w-full md:w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src={scoliosis}
                alt="Scoliosis"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Scoliosis
                <div className="badge badge-secondary">NEW</div>
              </h2>
            </div>
          </div>
          <div className="card w-full md:w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src={cardiac}
                alt="cardiac"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                cardiac rehab
                <div className="badge badge-secondary">NEW</div>
              </h2>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-4xl font-bold text-center pb-3 mb-8 mt-8 text-blue-800">
        Sign Up to Book Appointment
      </h1>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={hero2} alt="" />
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link
                    to={"/resetPassword"}
                    className="label-text-alt link link-hover"
                  >
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Book Appointment</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen bg-base-200 text-blue-400">
        <div className="hero-content flex-col lg:flex-row">
          <img src={hero3} alt="" />
          <div>
            <h1 className="text-5xl font-bold">
              We Always Ensure The Best Treatment With Care
            </h1>
            <p className="py-6 text-3xl text-gray-400">
              Modern Clinic
              <br></br>
              Professional Treatment
              <br></br>
              Discount on Medical Treatement
            </p>
            <button className="btn btn-primary color-blue-400">
              Get Started
            </button>
          </div>
        </div>
      </div>

     
      <ReviewSlider/>
    </>
  );
};

export default Hero;
