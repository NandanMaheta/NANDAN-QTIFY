import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import LeftArw from "./Left/Left";
import RightArw from "./Right/Right";
import style from "../Carousel/Carousel.module.css";
import SongCard from "../SongCard";
import { useSwiper } from "swiper/react";

const Controls = ({ data }) => {
  let swiper = useSwiper();

  useEffect(() => {}, [data]);

  return <></>;
};

const SongsCarousel = ({ data, renderCardComponent }) => {
  return (
    <div className={style.wrapper}>
      <Swiper
        initialSlide={0}
        modules={{ Navigation }}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
        
      >
        <Controls data={data} />
        <LeftArw />
        <RightArw />
        {data &&
          data.map((item) => (
            <SwiperSlide >
              {renderCardComponent(item)}
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );

  
};
export default SongsCarousel;
