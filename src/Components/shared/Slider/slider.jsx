import React, { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const sliderContent = [
  {
    id: 1,
    src: "./img/EVGA-min.png-1300x542.png",
  },
  {
    id: 2,
    src: "./img/ebar-never.jpg-2600x1084h.jpg",
  },
  {
    id: 3,
    src: "./img/04-209x230.jpg",
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
            <img
              className="w-full object-cover h-full"
              src={slider.src}
              alt=""
              srcSet=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
