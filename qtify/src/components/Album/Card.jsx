import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Chip from "@mui/material/Chip";
import styles from "./Album.module.css";

export default function AlbumCard({img,title,follows}) {
  
  return (
    <div style={{height:"232px", }}>
      <Card sx={{ width: "159px", height: "205px", borderRadius: "8px",overflow:"hidden" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="170px"
            image={img}
            alt="green iguana"
          />
        </CardActionArea>

        <CardContent style={{ padding: "2px", backgroundColor: "#FFFFFF" }}>
          <Chip
            label={follows}
            sx={{
              width: "71px",
              height: "23px",
              background: "#121212",
              padding: "2px",
              gap: "1px",
              borderRadius: "10px",
              opacity: 1, // Changed opacity to 1
              color: "white",
              fontFamily: "Poppins",
              fontSize: "10px",
              fontWeight: "400",
              lineHeight: "15px",
              textAlign: "left",
            }}
          />
        </CardContent>
      </Card>
      <p
        style={{
          fontFamily: "Poppins",
          fontSize: "14px",
          fontWeight: "400",
          lineHeight: "21px",
          textAlign: "left",
          color:"#FFFFFF"
        }}
      >
        {title}
      </p>
    </div>
  );
}
