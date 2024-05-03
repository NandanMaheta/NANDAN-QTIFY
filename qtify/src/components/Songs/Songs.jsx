import { useEffect, useState } from "react";
import axios from "axios";
import { useTheme } from "@emotion/react";
import styles from "../Album/Album.module.css";
import { CircularProgress } from "@mui/material";
import SongsCarousel from "./Carousel/Carousel";
import SongCard from "./SongCard";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function Songs({ url, title, type }) {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);
  const [geners, setGeners] = useState([]);
  const muiTheme = useTheme();
  const [value, setValue] = useState("All");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const fetchGen = async () => {
    try {
      const response = await axios.get(
        "https://qtify-backend-labs.crio.do/genres"
      );
      console.log(response.data.data);
      if (response.data) {
        setGeners(response.data.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

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
    fetchGen();
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
      <Box
        sx={{
          width: "331px",
          height: "34px",
          gap: "28px",
          marginLeft: "20px",
          marginBottom: "30px",
        }}
      >
        <Tabs value={value} onChange={handleChange}>
          <Tab
            textColor="#FFFFFF"
            backgroundColor="green"
            value="All"
            label="All" 
            sx={{fontFamily: "Poppins",
            fontSize: "16px",
            fontWeight: 600,
            lineHeight: "24px",
            textAlign: "left",
            color: "#FFFFFF",}}
          />
          {geners &&
            geners.map((item) => (
              <Tab
                onChange={handleChange}
                key={item.key}
                textColor="#FFFFFF"
                backgroundColor="green"
                value={item.key}
                label={item.label}
                sx={{ width: "68px", height: "34px",fontFamily: "Poppins",
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: "24px",
                textAlign: "left",
                color: "#FFFFFF", }}
              />
            ))}
        </Tabs>
      </Box>

      {loading && albums.length ? (
        <CircularProgress />
      ) : (
        albums && (
          <SongsCarousel
            data={albums}
            renderCardComponent={(data) => <SongCard data={data} type={type} />}
          />
        )
      )}
    </div>
  );
}
