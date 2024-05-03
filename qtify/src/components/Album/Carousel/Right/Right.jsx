import style from "./Right.module.css";
import React, { useEffect, useState } from "react";
import { ReactComponent as RightArrow } from "../../../../assests/RIGHT.svg";
import { useSwiper } from "swiper/react";

const RightArw = () => {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsEnd(swiper.isEnd);
    });
  });
  return (
    <div className={style.rightNavigation}>
      {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
    </div>
  );
};
export default RightArw;
