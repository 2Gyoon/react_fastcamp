import React, { useState, useEffect } from "react";

export default function UseWindowWidth(){
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resize = () => {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize)
    }
  }, []);

  return width;
}