import React from "react";
import Tlogo from "../assets/Topmetalprologo.png";
import "../components/Footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div>
            <img src={Tlogo} alt="" className="header-logo" />
            <div className="footer-layer"></div>
            <p className="footer-text1">{t("footer.company")}</p>
          </div>

          <div className="footer-section">
            <h3>{t("footer.catalogTitle")}</h3>
            <div>
              <div>
                <p>{t("footer.catalog.heat")}</p>
                <p>{t("footer.catalog.tank")}</p>
                <p>{t("footer.catalog.separation")}</p>
              </div>
              <div className="foter-layer2"></div>
              <div>
                <p>{t("footer.catalog.column")}</p>
                <p>{t("footer.catalog.metal")}</p>
                <p>{t("footer.catalog.nonStandard")}</p>
              </div>
            </div>
          </div>

          <div className="footer-contact">
            <div>
              <p className="contact-tel">{t("footer.contact.phone")}</p>
              <p className="contact-pozition">
                <i className="bx bxl-telegram"></i> {t("footer.contact.telegram")}
              </p>
            </div>
            <p>{t("footer.contact.email")}</p>
          </div>
        </div>
        <p className="footer-bottom-tex">{t("footer.bottom")}</p>
      </div>
    </footer>
  );
};

export default Footer;
