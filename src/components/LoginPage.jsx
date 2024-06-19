import React from "react";
import {Link } from 'react-router-dom'
import hero2 from "../assets/undraw_mobile_profile_7hvy.svg"

const LoginPage = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center pb-3 mb-8 mt-8 text-blue-400">
        Lets Sign Up Now 🔥
      </h1>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={hero2} />
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
              
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text"> Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              
            </div>
            <label className="label">
                <Link to={"/resetPassword"} className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
              
            </div>
          </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
