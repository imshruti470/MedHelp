import React from "react";
import hero3 from "../assets/hero3.svg";

const Appointment = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center pb-3 mb-8 mt-8 text-blue-400">
        Book Timeslot ⌚
      </h1>
      <div className="hero min-h-screen bg-base-200 text-blue-400">
        <div className="hero-content flex-col lg:flex-row">
          <img src={hero3} />
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                  <span className="label-text">Date</span>
                </label>
                <input type="date" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Time</span>
                </label>
                <input type="time" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Doctor</span>
                </label>
                <select className="select select-bordered">
                  <option value="" disabled selected>
                    Select a Doctor
                  </option>
                  <option value="dr-smith">Dr. Smith</option>
                  <option value="dr-jones">Dr. Jones</option>
                  <option value="dr-doe">Dr. Doe</option>
                  <option value="dr-white">Dr. White</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Write about </span>
                </label>
                <textarea
                  className="textarea textarea-bordered"
                  placeholder="Bio"
                ></textarea>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Book Appointment</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointment;
