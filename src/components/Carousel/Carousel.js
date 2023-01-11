import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Carousel.css";

import img001 from "../../img/band-pics/001.jpeg";
import img002 from "../../img/band-pics/002.jpeg";
import img003 from "../../img/band-pics/003.jpeg";
import img004 from "../../img/band-pics/004.jpeg";
import img005 from "../../img/band-pics/005.jpeg";
import img006 from "../../img/band-pics/006.jpeg";
import img007 from "../../img/band-pics/007.jpeg";

const slides = [img001, img002, img003, img004, img005, img006, img007];
const Carousel = () => {
  return (
    <Swiper loop spaceBetween={10} slicePerView={3}>
      {slides.map((slide, index) => (
        <SwiperSlide>
          <img src={slide} key={index} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
