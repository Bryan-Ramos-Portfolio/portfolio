import { useEffect, useState } from "react";

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (!isClient) return null;

  return (
    <img
      className="fixed w-10 h-10 bg-white rounded-full pointer-events-none z-50"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    ></img>
  );
}

export default CustomCursor;