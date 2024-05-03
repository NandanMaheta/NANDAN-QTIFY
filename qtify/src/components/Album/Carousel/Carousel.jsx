import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import LeftArw from "./Left/Left";
import RightArw from "./Right/Right";
import style from "../Carousel/Carousel.module.css";
import AlbumCard from "../Card"
import { useSwiper } from "swiper/react";

const Controls = ({ data }) => {
  let swiper = useSwiper();

  useEffect(() => {}, [data]);

  return <></>;
};

const Carousel = ({ data, renderCardComponent }) => {
  
  return (data &&
    <div className={style.wrapper}>
      <Swiper
        initialSlide={0}
        modules={{ Navigation }}
        slidesPerView={6}
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
export default Carousel;
