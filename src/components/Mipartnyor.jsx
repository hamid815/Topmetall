import { useState, useEffect, useRef } from "react";
import "./Mipartnyor.css";
import Miprt1 from "../assets/mipart1.png";
import Mipart2 from "../assets/mipart2.png";
import Mipart3 from "../assets/mipart3.png";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t } = useTranslation();
  const testimonials = t("testimonials.items", { returnObjects: true });

  // Rasmlarni qo‘shib chiqamiz
  const testimonialsWithImg = [
    { ...testimonials[0], img: Miprt1, id: 1 },
    { ...testimonials[1], img: Mipart2, id: 2 },
    { ...testimonials[2], img: Mipart3, id: 3 },
  ];

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
        prev < testimonialsWithImg.length - visibleCount ? prev + 1 : prev;
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
      ? testimonialsWithImg
      : testimonialsWithImg.slice(startIndex, startIndex + visibleCount);

  return (
    <div className="container">
      <h3 className="container-subtitle">{t("testimonials.subtitle")}</h3>
      <div className="testimonials-header">
        <h2 className="container-title">{t("testimonials.title")}</h2>
        {window.innerWidth > 600 && (
          <div className="nav-buttons">
            <button onClick={prevSlide} disabled={startIndex === 0}>
              ←
            </button>
            <button
              onClick={nextSlide}
              disabled={startIndex >= testimonialsWithImg.length - visibleCount}
            >
              →
            </button>
          </div>
        )}
      </div>

      <div
        className="testimonials-items"
        ref={wrapperRef}
        onScroll={handleScroll}
      >
        {visibleItems.map((item) => (
          <div key={item.id} className="testimonial-card">
            <div>
              <div className="tes-items-img">
                <img src={item.img} alt={item.name} />
              </div>
              <div>
                <h2>{item.name}</h2>
                <h3>{item.title}</h3>
              </div>
            </div>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
