import style from "./Left.module.css"
import React, { useEffect ,useState} from "react";
import { ReactComponent as LeftArw } from "../../../../assests/LEFT.svg";
import { useSwiper } from "swiper/react";

const LeftArrow = () => {
    const swiper =useSwiper();
    const [isBeginning,setisBeginning]=useState(swiper.isBeginning);
    useEffect(()=>{
            swiper.on("slideChange",function(){
                setisBeginning(swiper.isBeginning);
            })
           },[]);
    return (
        <div className={style.leftarrow}>             
         <LeftArw onClick={()=>swiper.slidePrev()}/> 
        </div>
    );
};

export default LeftArrow;

