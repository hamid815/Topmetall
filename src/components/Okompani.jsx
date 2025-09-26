
  import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Okompani.css";
import "./Katalogprodukti.css";
// import Infookompani from "../assets/video.mp4";

import Video from "../video/video.mp4?url"
import Mipartnyor from "./Mipartnyor";
import Certificate from "./Certificate";

import { useTranslation } from "react-i18next";


import Kp1 from "../assets/kp1.png";
import Kp2 from "../assets/kp2.png";
import Kp3 from "../assets/kp3.png";
import Kp4 from "../assets/kp4.png";
import Kp5 from "../assets/kp5.png";
import Kp6 from "../assets/kp6.png";
import Kp7 from "../assets/kp7.png";
import Kp8 from "../assets/kp8.png";
import Kp9 from "../assets/kp9.png";
import Kp10 from "../assets/kp10.png";
import Kp11 from "../assets/kp11.png";
import Kp12 from "../assets/kp12.png";



const Okompani = () => {
  const { t } = useTranslation();

  return (
    <div className="Okompani">
      <Header />
      <div className="container">
        <h3 className="okompani-yul">
          {t("okompani.back")} <p>→</p> <h2>{t("okompani.title")}</h2>
        </h3>
      </div>
      <div className="kat-produkti-top">
        <div className="container">
          <h1>{t("okompani.companyName")}</h1>
        </div>
      </div>

      <div className="container">
        <div className="info-main">
          <div className="info-main-img">
            {/* <img src={Infookompani} alt="Company info" /> */}
            <video width="600" src={Video}  controls autoPlay loop muted>
              
            </video>
          </div>
          <div className="info-kompani">
            <h2>{t("okompani.title")}</h2>
            <h3>{t("okompani.about")}</h3>

            <div>
              <div>
                <div className="dot"></div>
                <h3>{t("okompani.points.own")}</h3>
              </div>
              <div>
                <div className="dot"></div>
                <h3>{t("okompani.points.control")}</h3>
              </div>
              <div>
                <div className="dot"></div>
                <h3>{t("okompani.points.complex")}</h3>
              </div>
            </div>
          </div>
        </div>
        <Mipartnyor />
      </div>

      {/* Kompani partnyori */}
      <div className="kom-partnyori">
        <div className="container">
          <h3 className="container-subtitle">{t("okompani.partners.subtitle")}</h3>
          <h2 className="container-title">{t("okompani.partners.title")}</h2>
          <div className="kom-partnyori-list">
            <div className="kom-partnyori-item"><img src={Kp1} alt="Partner 1" className="kompani-img" /></div>
            <div className="kom-partnyori-item"><img src={Kp2} alt="Partner 2" className="kompani-img" /></div>
            <div className="kom-partnyori-item"><img src={Kp3} alt="Partner 3" className="kompani-img" /></div>
            <div className="kom-partnyori-item"><img src={Kp4} alt="Partner 4" className="kompani-img katta-rasm" /></div>
            <div className="kom-partnyori-item"><img src={Kp5} alt="Partner 5" className="kompani-img katta-rasm"  /></div>
            <div className="kom-partnyori-item"><img src={Kp6} alt="Partner 6" className="kompani-img" /></div>
            <div className="kom-partnyori-item"><img src={Kp7} alt="Partner 7" className="kompani-img katta-rasm" /></div>
            <div className="kom-partnyori-item"><img src={Kp8} alt="Partner 8" className="kompani-img" /></div>
            <div className="kom-partnyori-item"><img src={Kp9} alt="Partner 9" className="kompani-img katta-rasm" /></div>
            <div className="kom-partnyori-item"><img src={Kp10} alt="Partner 10" className="kompani-img katta-rasm" /></div>
            <div className="kom-partnyori-item"><img src={Kp11} alt="Partner 11" className="kompani-img katta-rasm" /></div>
            <div className="kom-partnyori-item"><img src={Kp12} alt="Partner 12" className="kompani-img katta-rasm" /></div>
          </div>
        </div>
      </div>

      <Certificate />
      <Footer />
    </div>
  );
};

export default Okompani;


