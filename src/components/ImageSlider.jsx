import { useState } from "react";

const ImageSlider = ({ images = [] }) => {
  const [current, setCurrent] = useState(0);

  if (!images.length) return null;

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="uni-img" style={{ position: "relative" }}>
      <img src={images[current]} alt={`slide-${current}`} />

      {/* chap tugma */}
      <button
        onClick={prev}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.4)",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: "30px",
          height: "30px",
          cursor: "pointer",
        }}
      >
        ‹
      </button>

      {/* o‘ng tugma */}
      <button
        onClick={next}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.4)",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: "30px",
          height: "30px",
          cursor: "pointer",
        }}
      >
        ›
      </button>
    </div>
  );
};

export default ImageSlider;
