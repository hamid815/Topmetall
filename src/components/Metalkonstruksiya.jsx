import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Teliobenniki.css";
import { useTranslation } from "react-i18next";
import Sidebar from "./Sidebar"; // umumiy sidebar
import Metal1 from "../assets/metal4.jpg";
import Metal2 from "../assets/metal1.jpg";

const Metalkostruksiya = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      <div className="container">
        <h2 className="info-yul">
          {t("info.back")} <p>→</p>{" "}
          <span>{t("info.metallokons.title")}</span>
        </h2>
        <div className="more-info">
          {/* umumiy sidebar, active="metallokons" */}
          <Sidebar active="metallokons" />

          <div className="info-content">
            <h2>
              {t("info.back")} <p>→</p>{" "}
              <span>{t("info.metallokons.title")}</span>
            </h2>

            <h1>{t("info.metallokons.title")}</h1>

            <div className="info-images">
              <div>
                <img src={Metal1} alt={t("info.metallokons.alt1")} />
              </div>
              <div className="info-none">
                <img src={Metal2} alt={t("info.metallokons.alt2")} />
              </div>
            </div>

            <p>{t("info.metallokons.description")}</p>

            <h3>{t("info.metallokons.production.title")}</h3>
            {t("info.metallokons.production.items", { returnObjects: true }).map(
              (item, idx) => (
                <h4 key={idx}>
                  <div className="dot"></div>
                  {item.label}: <span>{item.value}</span>
                </h4>
              )
            )}

            <div className="info-grid-colum">
              {t("info.metallokons.production.extra", { returnObjects: true }).map(
                (item, idx) => (
                  <h4 key={idx}>
                    <div className="dot"></div>
                    {item}
                  </h4>
                )
              )}
            </div>

            <h3>{t("info.metallokons.tech.title")}</h3>
            <div className="info-grid-colum">
              {t("info.metallokons.tech.items", { returnObjects: true }).map(
                (item, idx) => (
                  <h4 key={idx}>
                    <div className="dot"></div>
                    {item}
                  </h4>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Metalkostruksiya;
