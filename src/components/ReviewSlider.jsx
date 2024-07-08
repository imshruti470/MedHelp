import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
// import eyeLaser from "../assets/eyeLaser.webp";
// import facialTreatment from "../assets/facialTreatment.webp";
// import backPain from "../assets/backPain.webp";
// import hairTransplant from "../assets/hairTransplant.webp";
import cardiac from "../assets/cardiac.webp";

const ReviewSlider = () => {
  return (
    <div className="container mx-auto px-4 mb-10 pb-3">
      <h1 className="text-3xl md:text-4xl font-bold text-center pb-3 mb-8 mt-8 text-blue-800">
        What People Say About Us
      </h1>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 1200, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <div className="flex flex-col items-center">
            <img src={cardiac} alt="Eye Laser Treatment" className="mb-4" />
            <p className="text-xl text-center">
              "The eye laser treatment was a life-changer! My vision is perfect now."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center">
            <img src={cardiac} alt="Facial Treatment" className="mb-4" />
            <p className="text-xl text-center">
              "My skin has never looked better. The facial treatment was amazing!"
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center">
            <img src={cardiac} alt="Back Pain Treatment" className="mb-4" />
            <p className="text-xl text-center">
              "After the back pain treatment, I can finally move without pain."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center">
            <img src={cardiac} alt="Hair Transplant" className="mb-4" />
            <p className="text-xl text-center">
              "The hair transplant was successful, and I feel more confident now."
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ReviewSlider;
