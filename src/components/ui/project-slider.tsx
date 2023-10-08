import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { useWindowSize } from "@uidotdev/usehooks";


export function SliderContainer({ images, reverse, autoplay }: { images: string[], reverse?:boolean, autoplay?:boolean }) {
  const {width} = useWindowSize();
  const threeOrNot = width && width > 768

  return (
    <>
      <Swiper
        slidesPerView={threeOrNot ? 3 : 1}
        centeredSlides={true}
        spaceBetween={60}
        loop
        autoplay={(!threeOrNot || autoplay) ? {
          delay: 2500,
          disableOnInteraction: false,
          reverseDirection: reverse
        } : false}
        modules={[Autoplay]}
        className="mySwiper w-screen"
      >
        {images.map((e, i) => (
          <SwiperSlide key={i} className="">
            <Image loading="eager" key={i} src={e} alt={e} width={400} height={400} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
