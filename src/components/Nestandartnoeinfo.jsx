import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Teliobenniki.css";
import { useTranslation } from "react-i18next";
import Sidebar from "./Sidebar"; // umumiy sidebar
import Nes1 from "../assets/nestinfo1.jpg";
import Nes2 from "../assets/nesinfo2.jpg";

const Kolonniy = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      <div className="container">
        <h2 className="info-yul">
          {t("info.back")} <p>→</p>{" "}
          <span>{t("info.nestandartnoe.title")}</span>
        </h2>
        <div className="more-info">
          {/* umumiy sidebar, active="nestandartnoe" */}
          <Sidebar active="nestandartnoe" />

          <div className="info-content">
            <h2>
              {t("info.back")} <p>→</p>{" "}
              <span>{t("info.nestandartnoe.title")}</span>
            </h2>

            <h1>{t("info.nestandartnoe.title")}</h1>

            <div className="info-images">
              <div>
                <img src={Nes1} alt={t("info.nestandartnoe.alt1")} />
              </div>
              <div className="info-none">
                <img src={Nes2} alt={t("info.nestandartnoe.alt2")} />
              </div>
            </div>

            <p>{t("info.nestandartnoe.description")}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Kolonniy;
