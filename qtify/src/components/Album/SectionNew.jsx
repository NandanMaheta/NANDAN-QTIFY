import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import theme from "../ThemeProvider";
import { useTheme } from "@emotion/react";
import styles from "./Album.module.css";
import { Button } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";


export default function SectionNew({url,title}) {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);
  const muiTheme = useTheme();
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11];

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
    <section
      title={title}
      style={{ backgroundColor: muiTheme.palette.primary.dark }}
      className={styles.MainCont}
    >
      <div className={styles.Headings}>
        <h1 style={{ color: muiTheme.palette.primary.light }}>Top Albums</h1>
        <Button
          style={{ color: muiTheme.palette.primary.main, marginRight: "8px" }}
        >
          Collapse
        </Button>
      </div>
      {albums.length > 0 && !loading ? (
        <div className={styles.AlbumCard}>
          {albums.map((album) => (
            
            <Card
              key={album.id}
              img={album.image}
              title={album.title}
              follows={album.follows}
            />
            
          ))}
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "40px",
            marginLeft:"12px"
          }}
        >
          {arr.map((item) => (
            <Skeleton
              variant="rectangular"
              animation="wave"
              style={{
                backgroundColor: "#ddd",
                width: "159px",
                height: "216px",
                borderRadius:"8px",
                marginBlockEnd:"14px",
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
}
