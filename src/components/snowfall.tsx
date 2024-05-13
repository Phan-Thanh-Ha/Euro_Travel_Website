"use client";
import React from "react";

import Snowfall from "react-snowfall";
export default function SnowfallComp() {
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
      // Controls the number of snowflakes that are created (default 150)
      snowflakeCount={100}
    />
  );
}
