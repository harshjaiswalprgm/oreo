import { useEffect, useState } from "react";

const imageUrls = [
  "https://images.unsplash.com/photo-1706466614967-f4f14a3d9d08?q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1706466614967-f4f14a3d9d08?q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1706466614967-f4f14a3d9d08?q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1706466614967-f4f14a3d9d08?q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1706466614967-f4f14a3d9d08?q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1706466614967-f4f14a3d9d08?q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1706466614967-f4f14a3d9d08?q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1706466614967-f4f14a3d9d08?q=80&auto=format&fit=crop",
];

export default function Image3DSlider() {
  const [radius, setRadius] = useState(500); // good default for ~200px image width

  useEffect(() => {
    const updateRadius = () => {
      const baseRadius = window.innerWidth > 768 ? 500 : 300;
      setRadius(baseRadius);
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .carousel-wrapper {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #ffffff;
        overflow: hidden;
      }

      .carousel {
        position: relative;
        width: 100%;
        max-width: 800px;
        height: 400px;
        transform-style: preserve-3d;
        animation: spin 25s linear infinite;
        perspective: 1200px;
      }

      .carousel:hover {
        animation-play-state: paused;
      }

      .carousel img {
        position: absolute;
        width: 200px;
        height: 300px;
        object-fit: cover;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 16px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        transition: transform 0.3s ease;
      }

      .carousel img:hover {
        transform: translate(-50%, -50%) scale(1.08);
        z-index: 10;
      }

      @keyframes spin {
        0% { transform: rotateY(0deg); }
        100% { transform: rotateY(360deg); }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const angle = 360 / imageUrls.length;

  return (
    <div className="carousel-wrapper">
      <div className="carousel">
        {imageUrls.map((url, index) => {
          const rotate = `rotateY(${angle * index}deg) translateZ(${radius}px)`;
          return (
            <img
              key={index}
              src={url}
              alt={`carousel-${index}`}
              style={{ transform: rotate }}
            />
          );
        })}
      </div>
    </div>
  );
}
