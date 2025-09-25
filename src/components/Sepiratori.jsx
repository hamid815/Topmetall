import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Teliobenniki.css";
import { useTranslation } from "react-i18next";
import Sidebar from "./Sidebar"; // umumiy sidebar
import Sep1 from "../assets/sepiratori1.jpg";
import Sep2 from "../assets/sepiratori2.jpg";

const Sepiratori = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      <div className="container">
        <h2 className="info-yul">
          {t("info.back")} <p>→</p>{" "}
          <span>{t("info.separatori.title")}</span>
        </h2>
        <div className="more-info">
          {/* umumiy sidebar, active="separatori" */}
          <Sidebar active="separatori" />

          <div className="info-content">
            <h2>
              {t("info.back")} <p>→</p>{" "}
              <span>{t("info.separatori.title")}</span>
            </h2>

            <h1>{t("info.separatori.title")}</h1>

            <div className="info-images">
              <div>
                <img src={Sep1} alt={t("info.separatori.alt1")} />
              </div>
              <div>
                <img src={Sep2} alt={t("info.separatori.alt2")} />
              </div>
            </div>

            <p>{t("info.separatori.description")}</p>

            <h3>{t("info.separatori.types.title")}</h3>
            <div className="info-grid">
              {t("info.separatori.types.items", { returnObjects: true }).map(
                (item, idx) => (
                  <h4 key={idx}>
                    <div className="dot"></div>
                    {item}
                  </h4>
                )
              )}
            </div>

            <h3>{t("info.separatori.tech.title")}</h3>
            {t("info.separatori.tech.items", { returnObjects: true }).map(
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

export default Sepiratori;
