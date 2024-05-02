import React from "react";
import SectionAlbum from "./Section";
import Divider from "@mui/material/Divider";



export default function HomePage({toggle}) {
  return (
    <div>
      {toggle && <SectionAlbum
        title="Top Albums"
        url="https://qtify-backend-labs.crio.do/albums/top"
      />}
      <SectionAlbum
        title="Top Albums"
        url="https://qtify-backend-labs.crio.do/albums/top"
      />
      <Divider
        style={{ backgroundColor: "#34C94B", width: "100%", height: "1px" }}
      />
      <SectionAlbum
        title="New Albums"
        url="https://qtify-backend-labs.crio.do/albums/new"
      />
    
    </div>
  );
}
