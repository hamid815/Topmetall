import { useState, useEffect } from "react";
import "./Certificate.css";
import "./Mipartnyor.css";

import Img1 from "../assets/cert1.png";
import Img2 from "../assets/cert2.png";
import Img3 from "../assets/cert3.png";
import Img4 from "../assets/cert4.png";
import Img5 from "../assets/cert5.png";
import Img6 from "../assets/cert6.png";

import { useTranslation } from "react-i18next";

const Certificates = () => {
  const { t } = useTranslation();
  const images = [Img1, Img2, Img3, Img4, Img5, Img6];

  const [startIndex, setStartIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  const visibleCount = 4;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
      setStartIndex(0);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevSlide = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const nextSlide = () => {
    setStartIndex((prev) =>
      prev < images.length - visibleCount ? prev + 1 : prev
    );
  };

  const visibleItems = images.slice(startIndex, startIndex + visibleCount);

  return (
    <div className="container">
      <div className="certificate">
        <h3 className="container-subtitle">{t("certificates.subtitle")}</h3>
        <div className="certificate-header">
          <div>
            <h2 className="container-title">{t("certificates.title")}</h2>
          </div>

          {!isMobile && (
            <div className="nav-buttons">
              <button onClick={prevSlide} disabled={startIndex === 0}>
                ←
              </button>
              <button
                onClick={nextSlide}
                disabled={startIndex >= images.length - visibleCount}
              >
                →
              </button>
            </div>
          )}
        </div>

        <div
          className={`certificates-items ${isMobile ? "scrollable" : ""}`}
        >
          {(isMobile ? images : visibleItems).map((src, idx) => (
            <div key={idx} className="certificate-card">
              <img src={src} alt={`Certificate ${idx + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
