import {ReactComponent as Hero} from "../../assests/HERO-IMAGE.svg"
import styles from "./HeroImage.module.css"
import theme from "../ThemeProvider";
import { useTheme } from '@mui/material/styles';

function HeroImage({text}){
    const muiTheme = useTheme();
    return(
        <div style={{backgroundColor:muiTheme.palette.primary.dark}} className={styles.MainContainer}>
            <div className={styles.HeroContainer}>
                <div className={styles.HeroText} style={{color:muiTheme.palette.primary.light}}>
                <h2>{text.line1}</h2>
                <h2>{text.line2}</h2>
                </div>
                <Hero className={styles.Hero}/>
               
            </div>
        </div>
    )
}

export default HeroImage;