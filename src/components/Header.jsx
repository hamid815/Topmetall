import { useState } from "react";
import { useTranslation } from "react-i18next";
import Tlogo from "../assets/Topmetalprologo.png";
import "../components/Header.css";
import language from "../assets/language.png";
import { Link } from "react-router-dom";
import Menu from "../assets/menu.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "ru" ? "en" : "ru";
    i18n.changeLanguage(newLang);
  };

  return (
    <header>
      <div className="container">
        <div className="header">
          <button onClick={() => setIsOpen(true)}>
            <img src={Menu} alt="menu" className="menu" />
          </button>

          <img src={Tlogo} alt="Top Metal Pro Logo" className="header-logo" />

          <nav className="header-nav">
            <ul>
              <li>
                <Link to="/">
                  <div className="dot dot-white"></div> {t("nav.catalog")}
                </Link>
              </li>
              <li>
                <Link to="/okompani">
                  <div className="dot dot-white"></div> {t("nav.company")}
                </Link>
              </li>
              <li>
                <Link to="/realproyekti">
                  <div className="dot dot-white"></div> {t("nav.projects")}
                </Link>
              </li>
            </ul>
          </nav>

          <div className="header-contact">
            <div>
              <h4>
                <i className="bx bxs-phone"></i> +998 90 186 30 93
              </h4>
              <h4>{t("contact.email")}: topmetpro@gmail.com</h4>
            </div>
            <button onClick={toggleLanguage}>
              <img src={language} alt="Language" className="language-icon" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobil modal */}
      {isOpen && (
        <div className="mobile-modal">
          <div className="mobile-modal-header">
            <img src={Tlogo} alt="Logo" className="header-logo" />
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              ✕
            </button>
          </div>

          <nav className="mobile-nav">
            <ul>
              <li>
                <Link to="/" onClick={() => setIsOpen(false)}>
                  <div className="dot"></div> {t("nav.catalog")}
                </Link>
              </li>
              <li>
                <Link to="/okompani" onClick={() => setIsOpen(false)}>
                  <div className="dot"></div> {t("nav.company")}
                </Link>
              </li>
              <li>
                <Link to="/realproyekti" onClick={() => setIsOpen(false)}>
                  <div className="dot"></div> {t("nav.projects")}
                </Link>
              </li>
            </ul>
          </nav>

          <div className="hide-contact">
            <div>
              <h4 className="hide-cont">
                <i className="bx bxs-phone"></i> +998 90 186 30 93
              </h4>
              <h4 className="hide-cont">
                <i className="bx bxs-phone"></i> +998 90 989 00 08
              </h4>
              <h4>{t("contact.email")}: topmetpro@gmail.com</h4>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
