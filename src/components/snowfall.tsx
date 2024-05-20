"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

const Snowfall = dynamic(() => import("react-snowfall"), { ssr: false });
export default function SnowfallComp() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const img = new Image();
    img.src = "/images/phong.png";
    setImages([img]);
  }, []);
  return (
    <Snowfall
      // Changes the snowflake color
      color="red"
      // Applied to the canvas element
      style={{
        background: "#fff",
        zIndex: 1000,
        background: "none",
        position: "fixed",
        width: "100vw",
        height: "100vh",
      }}
      images={images}
      radius={[5, 14]}
      speed={[0.1, 0.5]}
      // Controls the number of snowflakes that are created (default 150)
      snowflakeCount={20}
    />
  );
}
