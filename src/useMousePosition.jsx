import { useState, useEffect } from "react";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  
  useEffect(() => {
    console.log(mousePosition);
      const updateMousePosition = e => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, [mousePosition]);

  return (mousePosition);
};

export default useMousePosition;