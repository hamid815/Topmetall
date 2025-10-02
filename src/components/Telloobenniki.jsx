import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar"; // yangi umumiy sidebar
import "./Teliobenniki.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Tello1 from "../assets/tello1.jpg";
import Tello2 from "../assets/tello2.jpg";

const Telloobenniki = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      <div className="container">
        <h2 className="info-yul">
          <Link to="/">{t("info.back")}</Link>
          <p>→</p> <span>{t("info.telloobmenniki.title")}</span>
        </h2>
        <div className="more-info">
          {/* Umumiy sidebar */}
          <Sidebar />

          <div className="info-content">
            <h2>
              <Link to="/">{t("info.back")}</Link>
              <p>→</p> <span>{t("info.telloobmenniki.title")}</span>
            </h2>

            <h1>{t("info.telloobmenniki.title")}</h1>

            <div className="info-images">
              <div>
                <img src={Tello1} alt={t("info.telloobmenniki.alt1")} />
              </div>
              <div>
                <img src={Tello2} alt={t("info.telloobmenniki.alt2")} />
              </div>
            </div>

            <p>{t("info.telloobmenniki.description")}</p>

            <h3>{t("info.telloobmenniki.types.title")}</h3>
            <div className="info-grid">
              {t("info.telloobmenniki.types.items", {
                returnObjects: true,
              }).map((item, index) => (
                <h4 key={index}>
                  <div className="dot"></div> {item}
                </h4>
              ))}
            </div>

            <h3>{t("info.telloobmenniki.tech.title")}</h3>
            {t("info.telloobmenniki.tech.items", { returnObjects: true }).map(
              (item, index) => (
                <h4 key={index}>
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

export default Telloobenniki;
