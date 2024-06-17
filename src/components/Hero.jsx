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
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 mt-8 text-blue-400">
          Facilities We Provide with Care
        </h1>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="card w-full bg-white rounded-lg shadow-md overflow-hidden">
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
          <div className="card w-full bg-white rounded-lg shadow-md overflow-hidden">
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
          <div className="card w-full bg-white rounded-lg shadow-md overflow-hidden">
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
          <div className="card w-full bg-white rounded-lg shadow-md overflow-hidden">
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
          <div className="card w-full bg-white rounded-lg shadow-md overflow-hidden">
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
          <div className="card w-full bg-white rounded-lg shadow-md overflow-hidden">
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
                <button className="btn btn-primary">Login</button>
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
        Happy to Make Them Happy  </h1>
      <div className="carousel carousel-end rounded-box">
        <div className="carousel-item">
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.KKTTHh4EBDD97y3-S-GyOQHaE7&pid=Api&P=0&h=180"
            alt="Drink"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
            alt="Drink"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
            alt="Drink"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
            alt="Drink"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
            alt="Drink"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
            alt="Drink"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
            alt="Drink"
          />
        </div>
      </div>
      <div className="flex justify-center items-center mt-10 mb-10">
        <div className="stats stats-vertical lg:stats-horizontal shadow ">
          <div className="stat">
            <div className="stat-title">Downloads</div>
            <div className="stat-value">31K</div>
            <div className="stat-desc">Jan 1st - Feb 1st</div>
          </div>

          <div className="stat">
            <div className="stat-title">New Users</div>
            <div className="stat-value">4,200</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>

          <div className="stat">
            <div className="stat-title">New Registers</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
      </div>
      <h3 className="flex justify-center items-center mt-10 mb-10 text-5xl font-bold text-blue-400">
        Rate Us
      </h3>
      <div className="rating flex justify-center items-center mt-10 mb-10 rating-lg">
        <input
          type="radio"
          name="rating-8"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-8"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-8"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-8"
          className="mask mask-star-2 bg-orange-400"
          checked
        />
        <input
          type="radio"
          name="rating-8"
          className="mask mask-star-2 bg-orange-400"
        />
      </div>
    </>
  );
};

export default Hero;
