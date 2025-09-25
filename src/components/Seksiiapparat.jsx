import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Teliobenniki.css";
import { useTranslation } from "react-i18next";
import Sidebar from "./Sidebar"; // umumiy sidebar
import Tello1 from "../assets/seksiaparat1.jpg";
import Tello2 from "../assets/sekdiaparat2.jpg";

const Seksiiapparat = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      <div className="container">
        <h2 className="info-yul">
          {t("info.back")} <p>→</p>{" "}
          <span>{t("info.seksiaparat.title")}</span>
        </h2>
        <div className="more-info">
          {/* umumiy sidebar, auto-active */}
          <Sidebar active="seksiaparat" />

          <div className="info-content">
            <h2>
              {t("info.back")} <p>→</p>{" "}
              <span>{t("info.seksiaparat.title")}</span>
            </h2>

            <h1>{t("info.seksiaparat.title")}</h1>

            <div className="info-images">
              <div>
                <img src={Tello1} alt={t("info.seksiaparat.alt1")} />
              </div>
              <div>
                <img src={Tello2} alt={t("info.seksiaparat.alt2")} />
              </div>
            </div>

            <p>{t("info.seksiaparat.description")}</p>

            <h3>{t("info.seksiaparat.types.title")}</h3>
            <div className="info-grid-colum">
              {t("info.seksiaparat.types.items", { returnObjects: true }).map(
                (item, idx) => (
                  <h4 key={idx}>
                    <div className="dot"></div>
                    {item}
                  </h4>
                )
              )}
            </div>

            <h3>{t("info.seksiaparat.tech.title")}</h3>
            {t("info.seksiaparat.tech.items", { returnObjects: true }).map(
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

export default Seksiiapparat;
