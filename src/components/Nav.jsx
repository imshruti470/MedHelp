import { useState, useEffect } from "react";

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
    <div className="navbar bg-base-100 shadow-lg px-4 sm:px-8 " >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Doctors</a>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>Contacts</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-3xl font-bold text-blue-400">SoumyaCare</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl text-blue-400">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Doctors</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>Contacts</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">SignUp/Login</a>
      </div>
      {/* Toggle button here */}
      <button className="btn btn-square btn-ghost">
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
