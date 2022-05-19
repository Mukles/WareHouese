import React, { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const sliderContent = [
  {
    id: 1,
    src: "./images/Slider/elegant-wedding-couple.jpg",
    content: "Make Your Wedding A Wonderful Story",
    pera: "",
  },
  {
    id: 2,
    src: "./images/Slider/elegant-wedding.jpg",
    content: "Make Your Wedding A Wonderful Story",
    pera: "Quam etiam nunc fusce consectetuer libero tellus facilisis iaculis tempor senectus arcu",
  },
  {
    id: 3,
    src: "./images/Slider/wedding-couple-on-the-french-riviera-wedding-in-provence-bride-and-groom-in-france-1.jpg",
    content: "Make Your Wedding A Wonderful Story",
    pera: "Quam etiam nunc fusce consectetuer libero tellus facilisis iaculis tempor senectus arcu",
  },
];
export default function Slider() {
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    ]);
  };

  return (
    <>
      <Swiper
        speed={500}
        onSwiper={setSwiperRef}
        slidesPerView={1}
        autoplay={true}
        centeredSlides={true}
        pagination={{
          type: "bullets",
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper h-auto lg:h-screen"
      >
        {sliderContent.map((slider) => (
          <SwiperSlide key={slider.id}>
            <div className="w-100 bg-black">
              <img
                className="w-full object-cover"
                src={slider.src}
                alt=""
                srcSet=""
              />
              <div className="bg-[#000000c4] absolute space-y-4 lg:space-y-10 top-0 flex-col left-0 w-full h-full text-white flex justify-center items-center">
                <h1 className="font-bold font-xl lg:text-6xl lg:leading-[4rem]">
                  Make Your Wedding <br /> A Wonderful Story
                </h1>
                <p className="text-sm lg:text-lg text-center mt-2">
                  Quam etiam nunc fusce consectetuer libero tellus facilisis{" "}
                  <br />
                  iaculis tempor senectus arcu
                </p>
                <button className="bg-[#D5B69C] hover:bg-[#E3D5C8] transition duration-300 px-2 py-1 lg:px-10 lg:py-4 text-black">
                  Discover More{" "}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
