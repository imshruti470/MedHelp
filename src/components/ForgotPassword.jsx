import React from "react";
import {Link} from 'react-router-dom';
import hoho from "../assets/undraw_not_found_re_bh2e.svg"

const ForgotPassword = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center pb-3 mb-8 mt-8 text-blue-400">
       Fill correct Email and check for OTP
      </h1>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={hoho} alt="/>
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
                  <span className="label-text">Otp</span>
                </label>
                <input
                  type="number"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text"> New Password</span>
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
            

              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                <label className="label">
                  
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
