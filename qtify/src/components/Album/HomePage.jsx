import React from "react";
import SectionAlbum from "./Section";
import Divider from "@mui/material/Divider";
import Songs from "../Songs/Songs";


export default function HomePage() {
  return (
    <div>
      <SectionAlbum
        title="Top Albums"
        url="https://qtify-backend-labs.crio.do/albums/top"
        type="album"
      />
      
      <Divider
        style={{ backgroundColor: "#34C94B", width: "100%", height: "1px" }}
      />
      <SectionAlbum
        title="New Albums"
        url="https://qtify-backend-labs.crio.do/albums/new"
        type="album"
      />
      <Divider
        style={{ backgroundColor: "#34C94B", width: "100%", height: "1px" }}
      />
      <Songs
      title="Songs"
      url="https://qtify-backend-labs.crio.do/songs"
      type="Songs"/>
      <Divider
        style={{ backgroundColor: "#34C94B", width: "100%", height: "1px" }}
      />
    
    </div>
  );
}
