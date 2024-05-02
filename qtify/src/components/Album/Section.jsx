import { useEffect, useState } from "react";
import axios from "axios";
import AlbumCard from "./Card";
import theme from "../ThemeProvider";
import { useTheme } from "@emotion/react";
import styles from "./Album.module.css";
import { Button } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import Carousel from "../Carousel/Carousel";

const sklton = (array) => {
  return (
    <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "40px",
          marginLeft: "12px",
        }}
      >
        {array.map((item) => (
          <Skeleton
            variant="rectangular"
            animation="wave"
            style={{
              backgroundColor: "#ddd",
              width: "159px",
              height: "216px",
              borderRadius: "8px",
              marginBlockEnd: "14px",
            }}
          />
        ))}
      </div>
  )
}

export default function SectionAlbum({ url, title }) {

  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);
  const muiTheme = useTheme();
  let arr = [1,2,3,4,5,6,7,8,9,10,11];
  const [toggle,isToggle] = useState(false);

  const handleToggle = () => {
    isToggle(!toggle);
  }

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      if (response.data) {
        setAlbums(response.data);
        setLoading(false);
      } else {
        alert("Failed to fetch");
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  useEffect(() => {

    fetchData();
  }, []);

  return (
    <div
      title={title}
      style={{ backgroundColor: muiTheme.palette.primary.dark }}
      className={styles.MainCont}
    >
      <div className={styles.Headings}>
        <h1 style={{ color: muiTheme.palette.primary.light }}>{title}</h1>
        <Button
          onClick={handleToggle}
          style={{ color: muiTheme.palette.primary.main, marginRight: "8px" }}
        >
          {toggle ?"Collapse":"Show All"}
        </Button>
      </div>
      {loading && albums.length ? (
        sklton(arr)
      ): (
        toggle ? (
          <div className={styles.AlbumCard}>
          {albums.map((album) => (
            <AlbumCard
              key={album.id}
              img={album.image}
              title={album.title}
              follows={album.follows}
            />
          ))}
          
        </div>
        ): (
          <Carousel data={albums}/>
        )
      )}
    
    </div>
  );
}
