import React from "react";
import Tlogo from "../assets/Topmetalprologo.png";
import "../components/Footer.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div>
            <img src={Tlogo} alt="" className="header-logo" />
            <div className="footer-layer"></div>
            <div className="layer-footer"></div>

            {/* <p className="footer-text1">{t("footer.company")}</p> */}
          </div>

          <div className="footer-section">
            <h3>{t("footer.catalogTitle")}</h3>
            <div>
              <div>
                <Link to="/telloobenniki">
                  <p>{t("footer.catalog.heat")}</p>
                </Link>
                <Link to="/yomkstniy">
                  <p>{t("footer.catalog.tank")}</p>
                </Link>
                <Link to="/sepiratori">
                  <p>{t("footer.catalog.separation")}</p>
                </Link>
              </div>
              <div className="foter-layer2"></div>
              <div>
                <Link to="/koloniy">
                  <p>{t("footer.catalog.column")}</p>
                </Link>
                <Link to="/metalkonstruksiya">
                  <p>{t("footer.catalog.metal")}</p>
                </Link>
                <Link to="/nestandartnoe">
                  <p>{t("footer.catalog.nonStandard")}</p>
                </Link>
              </div>
            </div>
          </div>

          <div className="footer-contact">
            <div>
              <p className="contact-tel">{t("footer.contact.phone")}</p>

                <a href="https://t.me/ruslan1863093">
              <p className="contact-pozition">
                  <i className="bx bxl-telegram"></i>{" "}
                  {t("footer.contact.telegram")}
              </p>
                </a>
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
