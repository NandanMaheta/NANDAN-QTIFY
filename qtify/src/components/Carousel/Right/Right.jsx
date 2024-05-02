import style from "./Right.module.css";
import React, { useEffect, useState } from "react";
import { ReactComponent as RightArw } from "../../../assests/RIGHT.svg";
import { useSwiper } from "swiper/react";
const RightArrow = () => {
  const swiper = useSwiper();
  const [isEnd, setisEnd] = useState(swiper.isEnd);

  const handleSlideNext = () => {
    console.log("Swiper instance:", swiper); // Debug statement
    swiper.slideNext();
  };
  useEffect(() => {
    swiper.on("slideChange", function () {
      setisEnd(swiper.isEnd);
    });
  }, []);

  return (
    <div className={style.rightarr}>
      <RightArw onClick={() => handleSlideNext()} />
    </div>
  );
};
export default RightArrow;
