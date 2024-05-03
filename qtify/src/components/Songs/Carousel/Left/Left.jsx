import style from "./Left.module.css"
import React, { useEffect ,useState} from "react";
import { ReactComponent as LeftArrow } from "../../../../assests/LEFT.svg";
import { useSwiper } from "swiper/react";

const LeftArw = () => {
    const swiper = useSwiper();
    const [isBeginning,setIsBeginning] = useState(swiper.isBeginning)

    useEffect(() => {
        swiper.on("slideChange", () => {
            setIsBeginning(swiper.isBeginning)
        })
    },[swiper])
  return (
    <div className={style.leftNavigation}>
        {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()}/>}
    </div>
  )
};

export default LeftArw;

