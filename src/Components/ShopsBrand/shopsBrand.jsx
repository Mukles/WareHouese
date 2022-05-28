import axios from "axios";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const ShopsBrand = () => {
  const [brandImages, setBrandImage] = useState({
    brandImage: [],
    isLoading: true,
  });
  useEffect(() => {
    axios.get("/BrandContainer.json").then((res) =>
      setBrandImage({
        ...brandImages,
        brandImage: res.data,
        isLoading: false,
      })
    );
  }, []);

  return (
    <div className="conataine px-5 mx-auto py-4">
      {brandImages.isLoading ? (
        <h1 className="text-2xl font-bold">Loading...</h1>
      ) : (
        <Swiper slidesPerView={8} spaceBetween={0} className="mySwiper">
          {brandImages.brandImage.length > 0 &&
            brandImages.brandImage.map((brand, idx) => (
              <SwiperSlide key={idx}>
                <a href="">
                  <img src={`/img/brand${brand.path}`} alt="" srcset="" />
                </a>
              </SwiperSlide>
            ))}
        </Swiper>
      )}
    </div>
  );
};

export default ShopsBrand;
