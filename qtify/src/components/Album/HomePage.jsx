import React from "react";
import SectionTop from "./SectionTop";
import SectionNew from "./SectionNew";

export default function HomePage() {
    return (
        <>
            <SectionTop title="Top Albums" url="https://qtify-backend-labs.crio.do/albums/top" />
            <SectionNew title="New Albums" url="https://qtify-backend-labs.crio.do/albums/new" />
        </>
    );
}
