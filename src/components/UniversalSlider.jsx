import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./Universal.css";

const UniversalSlider = ({ title, items }) => {
  const { t } = useTranslation();
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(
    window.innerWidth <= 600 ? 1 : 2
  );

  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(window.innerWidth <= 600 ? 1 : 2);
      setStartIndex(0);
      if (wrapperRef.current) {
        wrapperRef.current.scrollLeft = 0;
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = () => {
    if (window.innerWidth > 600) return;
    const scrollLeft = wrapperRef.current.scrollLeft;
    const cardWidth = wrapperRef.current.clientWidth;
    const newIndex = Math.round(scrollLeft / cardWidth);
    setStartIndex(newIndex);
  };

  const prevSlide = () => {
    setStartIndex((prev) => {
      const newIndex = prev > 0 ? prev - 1 : 0;
      if (wrapperRef.current && window.innerWidth <= 600) {
        wrapperRef.current.scrollTo({
          left: newIndex * wrapperRef.current.clientWidth,
          behavior: "smooth",
        });
      }
      return newIndex;
    });
  };

  const nextSlide = () => {
    setStartIndex((prev) => {
      const newIndex =
        prev < items.length - visibleCount ? prev + 1 : prev;
      if (wrapperRef.current && window.innerWidth <= 600) {
        wrapperRef.current.scrollTo({
          left: newIndex * wrapperRef.current.clientWidth,
          behavior: "smooth",
        });
      }
      return newIndex;
    });
  };

  const visibleItems =
    window.innerWidth <= 600
      ? items
      : items.slice(startIndex, startIndex + visibleCount);

  return (
    <div className="container">
      <div className="uni-container">
        <div className="uni-header">
          <h2 className="uni-title">{title}</h2>
          {window.innerWidth > 600 && (
            <div className="uni-nav">
              <button onClick={prevSlide} disabled={startIndex === 0}>
                ←
              </button>
              <button
                onClick={nextSlide}
                disabled={startIndex >= items.length - visibleCount}
              >
                →
              </button>
            </div>
          )}
        </div>

        <div className="uni-line"></div>

        <div
          className="uni-wrapper"
          ref={wrapperRef}
          onScroll={handleScroll}
        >
          {visibleItems.map((item) => (
            <div key={item.id} className="uni-card">
              <div className="uni-img">
                <img src={item.img} alt={item.title} />
              </div>
              <h3 className="uni-card-title">{item.title}</h3>
              <div className="uni-card-body">
                <button className="uni-btn">{t("common.customer")}</button>
                <p>{item.text}</p>
              </div>
              <h4 className="uni-date">
                {t("common.projectDate")} <span>{item.date}</span>
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UniversalSlider;
