import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Teliobenniki.css";
import { useTranslation } from "react-i18next";
import Sidebar from "./Sidebar"; // umumiy sidebar
import Yom1 from "../assets/c24d6d0dbcb8ef466141f4f1e27ee97cc50ff344.jpg";
import Yom2 from "../assets/8ff679c4c39b7bc655808589eebe7d86779bc701.jpg";
import { Link } from "react-router-dom";
const Yomkostnoe = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      <div className="container">
        <h2 className="info-yul">
          <Link to="/">{t("info.back")}</Link>
          <p>→</p> <span>{t("info.yomkostnoe.title")}</span>
        </h2>
        <div className="more-info">
          {/* umumiy sidebar, active="yomkostnoe" */}
          <Sidebar active="yomkostnoe" />

          <div className="info-content">
            <h2>
              <Link to="/">{t("info.back")}</Link>
              <p>→</p> <span>{t("info.yomkostnoe.title")}</span>
            </h2>

            <h1>{t("info.yomkostnoe.title")}</h1>

            <div className="info-images">
              <div>
                <img src={Yom1} alt={t("info.yomkostnoe.alt1")} />
              </div>
              <div>
                <img src={Yom2} alt={t("info.yomkostnoe.alt2")} />
              </div>
            </div>

            <p>{t("info.yomkostnoe.description")}</p>

            <h3>{t("info.yomkostnoe.types.title")}</h3>
            <div className="info-grid-colum">
              {t("info.yomkostnoe.types.items", { returnObjects: true }).map(
                (item, idx) => (
                  <h4 key={idx}>
                    <div className="dot"></div>
                    {item}
                  </h4>
                )
              )}
            </div>

            <h3>{t("info.yomkostnoe.tech.title")}</h3>
            {t("info.yomkostnoe.tech.items", { returnObjects: true }).map(
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

export default Yomkostnoe;
