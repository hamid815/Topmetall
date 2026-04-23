import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Teliobenniki.css";
import { useTranslation } from "react-i18next";
import Sidebar from "./Sidebar"; // umumiy sidebar
import Metal1 from "../assets/kt9.jpg";
import Metal2 from "../assets/kt10.png";
import { Link } from "react-router-dom";
const Gazoturbinnix = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      <div className="container">
        <h2 className="info-yul">
          <Link to="/">{t("info.back")}</Link>
           <p>→</p>{" "}
          <span>{t("info.gazoturbinnix.alt1")}</span>
        </h2>
        <div className="more-info">
          {/* umumiy sidebar, active="metallokons" */}
          <Sidebar active="gazoturbinnix" />

          <div className="info-content">
            <h2>
          <Link to="/">{t("info.back")}</Link>
               <p>→</p>{" "}
              <span>{t("info.gazoturbinnix.alt1")}</span>
            </h2>

            <h1>{t("info.gazoturbinnix.title")}</h1>

            <div className="info-images">
              <div>
                <img src={Metal1} alt={t("info.gazoturbinnix.alt1")} />
              </div>
              <div className="info-none">
                <img src={Metal2} alt={t("info.gazoturbinnix.alt2")} />
              </div>
            </div>

            <p>{t("info.gazoturbinnix.description")}</p>

            <h3>{t("info.gazoturbinnix.production.title")}</h3>
            

            <div className="info-grid-colum">
              {t("info.gazoturbinnix.production.extra", { returnObjects: true }).map(
                (item, idx) => (
                  <h4 key={idx}>
                    <div className="dot"></div>
                    {item}
                  </h4>
                )
              )}
            </div>

            <h3>{t("info.gazoturbinnix.tech.title")}</h3>
            <div className="info-grid-colum">
              {t("info.gazoturbinnix.tech.items", { returnObjects: true }).map(
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

export default Gazoturbinnix;
