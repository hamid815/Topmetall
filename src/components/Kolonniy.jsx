import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Teliobenniki.css";
import { useTranslation } from "react-i18next";
import Sidebar from "./Sidebar"; // umumiy sidebar
import Kol1 from "../assets/kolonniy1.png";
import Kol2 from "../assets/kolonniy2.png";
import { Link } from "react-router-dom";
const Kolonniy = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      <div className="container">
        <h2 className="info-yul">
          <Link to="/">{t("info.back")}</Link>
          <p>→</p> <span>{t("info.kolonniy.title")}</span>
        </h2>
        <div className="more-info">
          {/* umumiy sidebar, active="kolonniy" */}
          <Sidebar active="kolonniy" />

          <div className="info-content">
            <h2>
              <Link to="/">{t("info.back")}</Link>
              <p>→</p> <span>{t("info.kolonniy.title")}</span>
            </h2>

            <h1>{t("info.kolonniy.title")}</h1>

            <div className="info-images">
              <div>
                <img src={Kol1} alt={t("info.kolonniy.alt1")} />
              </div>
              <div className="info-none">
                <img src={Kol2} alt={t("info.kolonniy.alt2")} />
              </div>
            </div>

            <p>{t("info.kolonniy.description")}</p>

            <h3>{t("info.kolonniy.types.title")}</h3>
            <div className="info-grid">
              {t("info.kolonniy.types.items", { returnObjects: true }).map(
                (item, idx) => (
                  <h4 key={idx}>
                    <div className="dot"></div>
                    {item}
                  </h4>
                )
              )}
            </div>

            <h3>{t("info.kolonniy.tech.title")}</h3>
            {t("info.kolonniy.tech.items", { returnObjects: true }).map(
              (item, idx) => (
                <h4 key={idx}>
                  <div className="dot"></div>
                  {item.label}: <span>{item.value}</span>
                </h4>
              )
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Kolonniy;
