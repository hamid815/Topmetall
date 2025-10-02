import React from "react";
import Header from "./Header";
import "./Okompani.css";
import Emkostnoy from "./Emkostnoy";
import Metallokons from "./Metallokons";
import Nestandartnoe from "./Nestandartnoe";
import SeksIavo from "./Seksiavo";
import Separatsionnoe from "./Separatsionnoe";
import Kojuxotruvennoe from "./Kojuxotrubnie";
import Trubnie from "./Trubnie";
import Footer from "./Footer";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const Realproyekti = () => {
  const { t } = useTranslation();

  return (
    <div className="real-proyekti">
      <Header />
      <div className="container">
        <h3 className="okompani-yul">
          <Link to="/">{t("realproyekti.back")}</Link>
           <p>→</p>{" "}
          <h2>{t("realproyekti.companyInfo")}</h2>
        </h3>
      </div>
      <div className="kat-produkti-top">
        <div className="container">
          <h1>{t("realproyekti.title")}</h1>
        </div>
      </div>
      <Kojuxotruvennoe />
      <Trubnie />
      <SeksIavo />
      <Emkostnoy />
      <Separatsionnoe />
      <Nestandartnoe />
      <Metallokons />
      <Footer />
    </div>
  );
};

export default Realproyekti;
