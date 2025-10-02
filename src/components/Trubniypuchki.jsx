import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Teliobenniki.css";
import { useTranslation } from "react-i18next";
import Sidebar from "./Sidebar"; // umumiy sidebar
import Tello1 from "../assets/trubniy1.jpg";
import Tello2 from "../assets/trubniy2.jpg";
import { Link } from "react-router-dom";
const Trubniypuchki = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      <div className="container">
        <h2 className="info-yul">
          <Link to="/">{t("info.back")}</Link>
          <p>→</p> <span>{t("info.trubnie.title")}</span>
        </h2>
        <div className="more-info">
          {/* umumiy sidebar, auto-active */}
          <Sidebar active="trubnie" />

          <div className="info-content">
            <h2>
              <Link to="/">{t("info.back")}</Link>
              <p>→</p> <span>{t("info.trubnie.title")}</span>
            </h2>

            <h1>{t("info.trubnie.title")}</h1>

            <div className="info-images">
              <div>
                <img src={Tello1} alt={t("info.trubnie.alt1")} />
              </div>
              <div>
                <img src={Tello2} alt={t("info.trubnie.alt2")} />
              </div>
            </div>

            <p>{t("info.trubnie.description")}</p>

            <h3>{t("info.trubnie.features.title")}</h3>
            <div className="info-grid-colum">
              {t("info.trubnie.features.items", { returnObjects: true }).map(
                (item, idx) => (
                  <h4 key={idx}>
                    <div className="dot"></div>
                    {item}
                  </h4>
                )
              )}
            </div>

            <h3>{t("info.trubnie.tech.title")}</h3>
            {t("info.trubnie.tech.items", { returnObjects: true }).map(
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

export default Trubniypuchki;
