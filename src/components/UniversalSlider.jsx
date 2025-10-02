import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./Universal.css";

const ImageCarousel = ({ images = [], title }) => {
  const [index, setIndex] = useState(0);
  const isMobile = window.innerWidth <= 600;

  if (!images || images.length === 0) {
    return (
      <div className="uni-img">
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "#eee",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span>No image</span>
        </div>
      </div>
    );
  }

  const prevImg = () =>
    setIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  const nextImg = () =>
    setIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));

  const handleMobileScroll = (e) => {
    const scrollLeft = e.target.scrollLeft;
    const cardWidth = e.target.clientWidth;
    const newIndex = Math.round(scrollLeft / cardWidth);
    setIndex(newIndex);
  };

  return (
    <div className="uni-img" style={{ position: "relative" }}>
      {isMobile ? (
        <>
          <div
            style={{
              display: "flex",
              overflowX: "auto",
              scrollSnapType: "x mandatory",
              scrollbarWidth: "none",
            }}
            onScroll={handleMobileScroll}
          >
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${title} ${i + 1}`}
                style={{
                  flex: "0 0 100%",
                  scrollSnapAlign: "start",
                  objectFit: "cover",
                }}
              />
            ))}
          </div>

          {/* 🔥 Indicatorlar faqat ko‘p rasm bo‘lsa */}
          {images.length > 1 && (
            <div
              style={{
                position: "absolute",
                bottom: "8px",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: "6px",
              }}
            >
              {images.map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: i === index ? "#fff" : "rgba(255,255,255,0.5)",
                  }}
                />
              ))}
            </div>
          )}
        </>
      ) : (
        <>
          <img
            src={images[index]}
            alt={title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />

          {/* 🔥 Tugmalar faqat ko‘p rasm bo‘lsa */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImg}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "16px",
                  transform: "translateY(-50%)",
                  background: "rgba(255, 255, 255, 1)",
                  color: "rgba(0, 0, 0, 1)",
                  border: "none",
                  borderRadius: "50%",
                  width: "35px",
                  height: "35px",
                  fontSize: "25px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i className="bx bx-chevron-left"></i>
              </button>
              <button
                onClick={nextImg}
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "16px",
                  transform: "translateY(-50%)",
                  background: "rgba(255, 255, 255, 1)",
                  color: "rgba(0, 0, 0, 1)",
                  border: "none",
                  borderRadius: "50%",
                  width: "35px",
                  height: "35px",
                  fontSize: "25px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i className="bx bx-chevron-right"></i>
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
};


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

        <div className="uni-wrapper" ref={wrapperRef} onScroll={handleScroll}>
          {visibleItems.map((item) => (
            <div key={item.id} className="uni-card">
              {/* 🔥 Yangi karusel */}
              <ImageCarousel images={item.images} title={item.title}/>

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
