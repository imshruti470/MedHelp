import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// assets
// import logo from "../assets/om-logo.png";
import sun from "../assets/sun.png";
import moon from "../assets/moon.png";

const Navbar = () => {
  // use theme from local storage if available or set light theme
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // update state on toggle
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // set theme state in localstorage on mount & also update localstorage on state change
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  return (
    <div className="navbar bg-base-100 shadow-xl px-4 sm:px-8 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
            <svg
              xmlns="/"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content  z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/appointment"}>Appointment</Link>
            </li>
            <li>
              <Link to={"/services"}>Services</Link>
            </li>
            <li>
              <Link to={"/doctors"}>Doctors</Link>
            </li>
          </ul>
        </div>
        <Link
          to={"/"}
          className="btn btn-ghost text-3xl font-bold text-blue-400"
        >
          CheckUp
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl text-blue-400">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/appointment"}>Appointment</Link>
          </li>
          <li>
            <Link to={"/services"}>Services</Link>
          </li>
          <li>
            <Link to={"/doctors"}>Doctors</Link>
          </li>
          <li>
            <Link to={"/meeting"}>Meeting</Link>
          </li>
        </ul>
      </div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn mr-10"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Login
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
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
              <button className="btn btn-primary">Login</button>
              <label className="label">
                <Link to={"/signup"} className="label-text-alt link link-hover">
                  New Here? Sign Up
                </Link>
              </label>
            </div>
          </form>
        </div>
      </dialog>
      {/* Toggle button here */}
      <button className="btn btn-square btn-ghost ">
        <label className="swap swap-rotate w-12 h-12">
          <input
            type="checkbox"
            onChange={handleToggle}
            // show toggle image based on localstorage theme
            checked={theme === "light" ? false : true}
          />
          {/* light theme sun image */}
          <img src={sun} alt="light" className="w-8 h-8 swap-on" />
          {/* dark theme moon image */}
          <img src={moon} alt="dark" className="w-8 h-8 swap-off" />
        </label>
      </button>
    </div>
  );
};
export default Navbar;
