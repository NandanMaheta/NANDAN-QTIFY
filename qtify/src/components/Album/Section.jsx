import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import theme from "../../components/ThemeProvider";
import { useTheme } from "@emotion/react";
import styles from "./Album.module.css"
import { Button } from "@mui/material";

export default function Section() {
    const [albums, setAlbums] = useState([]);
    const muiTheme = useTheme();

    const fetchData = async () => {
        try {
            const response = await axios.get("https://qtify-backend-labs.crio.do/albums/top");
            if (response.data) {
                setAlbums(response.data);
                console.log(response.data);
            }
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <section title="Top Albums" style={{backgroundColor:muiTheme.palette.primary.dark,}} className={styles.MainCont}>
            <div className={styles.Headings}>
                <h1 style={{color:muiTheme.palette.primary.light}}>Top Albums</h1>
                <Button style={{color:muiTheme.palette.primary.main, marginRight:"8px"}}>Collapse</Button>
            </div>
            {albums && (<div className={styles.AlbumCard}>{albums.map((album) => (
                <Card key={album.id} img={album.image} title={album.title} follows={album.follows} />
            ))}</div>)}
        </section>
    );
}
