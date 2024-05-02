import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import theme from "../../components/ThemeProvider";
import { useTheme } from "@emotion/react";
import styles from "./Album.module.css";
import { Button, Skeleton } from "@mui/material";
import Stack from "@mui/material/Stack";

export default function Section() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [loading, setLoading] = useState(false);
  const muiTheme = useTheme();

  const fetchData = async () => {
    try {
      setLoading(true);
      const responseTop = await axios.get(
        "https://qtify-backend-labs.crio.do/albums/top"
      );
      if (responseTop.data) {
        setTopAlbums(responseTop.data);
      }
    } catch (e) {
      setLoading(true);
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section
      title="Top Albums"
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
      {topAlbums.length > 0 && !loading ? (
        <div className={styles.AlbumCard}>
          {topAlbums.map((album) => (
            <Card
              key={album.id}
              img={album.image}
              title={album.title}
              follows={album.follows}
            />
          ))}
        </div>
      ) : (
        <Skeleton variant="rectangular" width={1000} height={60} />
      )}
    </section>
  );
}
