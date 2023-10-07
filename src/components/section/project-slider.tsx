import * as React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Autoplay } from "swiper/modules";
import Image from "next/image";

export function SliderContainer({ images }: { images: string[] }) {
  return (
    <>
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper w-screen"
      >
        {images.map((e, i) => (
          <SwiperSlide key={i} className="">
            <motion.img layout key={i} src={e} alt={e} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
