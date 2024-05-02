import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import LeftArrow from "./Left/Left";
import RightArrow from "./Right/Right";
import style from "../Carousel/Carousel.module.css";
import AlbumCard from "../Album/Card";

const Carousel = ({ data }) => {
  
  return (
    <div className={style.container}>
      <Swiper
        style={{ padding: "0px 20px", position: "relative !important" }}
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
      >
        <div className={style.arrow}>
          <LeftArrow />
          <RightArrow />
        </div>

        <div>
          <SwiperSlide className={style.container} >
            <div className={style.AlbumCard}>
              
              {data.map((album, index) => (
                <AlbumCard
                  // index= {index}
                  key={album.id}
                  img={album.image}
                  title={album.title}
                  follows={album.follows}
                />
              ))}
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};
export default Carousel;
