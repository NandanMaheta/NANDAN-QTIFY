import { useEffect, useState } from "react";
import axios from "axios";
import { useTheme } from "@emotion/react";
import styles from "../Album/Album.module.css";
import { CircularProgress } from "@mui/material";
import SongsCarousel from "./Carousel/Carousel";

import SongCard from "./SongCard";


export default function Songs({ url, title, type }) {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);
  const muiTheme = useTheme();

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
      </div>
      {loading && albums.length ? (
        <CircularProgress/>
      ) : 
        albums && <SongsCarousel data={albums} renderCardComponent={(data) => <SongCard data={data} type={type}/>}/>
      }
    </div>
  );
}
