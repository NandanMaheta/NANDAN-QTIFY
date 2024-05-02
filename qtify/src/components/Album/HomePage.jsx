import React from "react";
import Section from "./Section";

export default function HomePage() {
    return (
        <>
            <Section title="Top Albums" url="https://qtify-backend-labs.crio.do/albums/top" />
            <Section title="New Albums" url="https://qtify-backend-labs.crio.do/albums/new" />
        </>
    );
}
