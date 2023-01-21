import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carousel.css";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper";

import img001 from "../../img/band-pics/001.jpeg";
import img002 from "../../img/band-pics/002.jpeg";
// import img003 from "../../img/band-pics/003.jpeg";
import img004 from "../../img/band-pics/004.jpeg";
import img005 from "../../img/band-pics/005.jpeg";
import img006 from "../../img/band-pics/006.jpeg";
import img007 from "../../img/band-pics/007.jpeg";

const slides = [img001, img002, img004, img005, img006, img007];

const Carousel = () => {
  return (
    <Swiper
      loop
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <img src={slide} key={index} alt={index} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
