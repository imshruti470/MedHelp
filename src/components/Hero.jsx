import React from "react";
import hero from "../assets/hero.svg";
import hero2 from "../assets/hero2.svg";
import hero3 from "../assets/hero3.svg";

const Hero = () => {
  return (
    <>
      <>
        <div className="hero min-h-screen bg-base-200 text-blue-400">
          <div className="hero-content flex-col lg:flex-row">
            <img src={hero} />
            <div>
              <h1 className="text-5xl font-bold">Best Care For Close Ones!</h1>
              <p className="py-6 text-3xl text-gray-400">
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

      {/* <section className="py-12 bg-gray-100"> */}
      <div className="container mx-auto px-4 mb-10 pb-3">
        <h1 className="text-4xl font-bold text-center pb-3 mb-8 mt-8 text-blue-400">
          Facilities We Provide with Care
        </h1>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://www.elationhealth.com/wp-content/uploads/2021/01/iStock-1249601252.jpg"
                alt="Shoes"
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">Depression</h2>
              <p className="text-gray-700 mb-4">
                If a dog chews shoes whose shoes does he choose?
              </p>
              <div className="text-right">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://www.elationhealth.com/wp-content/uploads/2021/01/iStock-1249601252.jpg"
                alt="Shoes"
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">Depression</h2>
              <p className="text-gray-700 mb-4">
                If a dog chews shoes whose shoes does he choose?
              </p>
              <div className="text-right">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://www.elationhealth.com/wp-content/uploads/2021/01/iStock-1249601252.jpg"
                alt="Shoes"
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">Depression</h2>
              <p className="text-gray-700 mb-4">
                If a dog chews shoes whose shoes does he choose?
              </p>
              <div className="text-right">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://www.elationhealth.com/wp-content/uploads/2021/01/iStock-1249601252.jpg"
                alt="Shoes"
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">Depression</h2>
              <p className="text-gray-700 mb-4">
                If a dog chews shoes whose shoes does he choose?
              </p>
              <div className="text-right">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://www.elationhealth.com/wp-content/uploads/2021/01/iStock-1249601252.jpg"
                alt="Shoes"
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">Depression</h2>
              <p className="text-gray-700 mb-4">
                If a dog chews shoes whose shoes does he choose?
              </p>
              <div className="text-right">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://www.elationhealth.com/wp-content/uploads/2021/01/iStock-1249601252.jpg"
                alt="Shoes"
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">Depression</h2>
              <p className="text-gray-700 mb-4">
                If a dog chews shoes whose shoes does he choose?
              </p>
              <div className="text-right">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-4xl font-bold text-center pb-3 mb-8 mt-8 text-blue-400">
        Sign Up to Book Appointment
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
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
          <img src={hero3} />
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

      <h1 className="text-4xl font-bold text-center mb-8 mt-8 text-blue-400">
        What people say about us{" "}
      </h1>
      <div className="join join-vertical w-9/12 ml-20">
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
