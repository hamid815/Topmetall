import React from "react";
import "boxicons/css/boxicons.min.css";
import Vniz from "../assets/vniz.png";
import Header from "./Header";
import Katprodukti from "./Katprodukti";
import Appform from "./Appform";
import Footer from "./Footer";
import { useTranslation } from "react-i18next";

const Main = () => {
  const { t } = useTranslation();

  return (
    <div className="Main">
      <Header />
      <div className="container">
        <div className="app-content">
          <h1 className="gradient-text">{t("main.title")}</h1>

          <div>
            <p>
              <div className="dot"></div> {t("main.point1")}
            </p>
            <p>
              <div className="dot"></div> {t("main.point2")}
            </p>
            <p>
              <div className="dot"></div> {t("main.point3")}
            </p>
          </div>

          
        </div>
      </div>
      <Katprodukti />
      <Appform />
      <Footer />
    </div>
  );
};

export default Main;
