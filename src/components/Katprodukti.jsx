import React from "react";
import "../components/Katalogprodukti.css";
import { Link } from "react-router-dom";
import Kt1 from "../assets/kt1.jpg";
import Kt2 from "../assets/kt2.jpg";
import Kt3 from "../assets/kt3.jpg";
import Kt4 from "../assets/kt4.jpg";
import Kt5 from "../assets/kt5.jpg";
import Kt6 from "../assets/kt6.jpg";
import Kt7 from "../assets/kt7.jpg";
import Kt8 from "../assets/kt8.jpg";
import { useTranslation } from "react-i18next";

const Katprodukti = () => {
  const { t } = useTranslation();

  return (
    <div className="katprodukti">
      <div className="kat-produkti-top">
        <div className="container">
          <h1>{t("katalog.title")}</h1>
        </div>
      </div>

      <div className="container">
        <div className="katalog-grid">
          <div className="katalog-item">
            <img src={Kt1} alt="" />
            <div className="katalog-label"></div>
            <div className="katalog-content">
              <p>{t("katalog.items.item1")}</p>
              <Link to="/telloobenniki">
                <button>{t("katalog.open")}</button>
              </Link>
            </div>
          </div>

          <div className="katalog-item">
            <img src={Kt2} alt="" />
            <div className="katalog-label"></div>
            <div className="katalog-content">
              <p>{t("katalog.items.item2")}</p>
              <Link to="/trubniypuchki">
                <button>{t("katalog.open")}</button>
              </Link>
            </div>
          </div>

          <div className="katalog-item">
            <img src={Kt3} alt="" />
            <div className="katalog-label"></div>
            <div className="katalog-content">
              <p>{t("katalog.items.item3")}</p>
              <Link to="/seksiaparat">
                <button>{t("katalog.open")}</button>
              </Link>
            </div>
          </div>

          <div className="katalog-item">
            <img src={Kt4} alt="" />
            <div className="katalog-label"></div>
            <div className="katalog-content">
              <p>{t("katalog.items.item4")}</p>
              <Link to="/yomkstniy">
                <button>{t("katalog.open")}</button>
              </Link>
            </div>
          </div>

          <div className="katalog-item">
            <img src={Kt5} alt="" />
            <div className="katalog-label"></div>
            <div className="katalog-content">
              <p>{t("katalog.items.item5")}</p>
              <Link to="/sepiratori">
                <button>{t("katalog.open")}</button>
              </Link>
            </div>
          </div>

          <div className="katalog-item">
            <img src={Kt7} alt="" />
            <div className="katalog-label"></div>
            <div className="katalog-content">
              <p>{t("katalog.items.item7")}</p>
              <Link to="/metalkonstruksiya">
                <button>{t("katalog.open")}</button>
              </Link>
            </div>
          </div>

          <div className="katalog-item">
            <img src={Kt8} alt="" />
            <div className="katalog-label"></div>
            <div className="katalog-content">
              <p>{t("katalog.items.item8")}</p>
              <Link to="/nestandartnoe">
                <button>{t("katalog.open")}</button>
              </Link>
            </div>
          </div>

          <div className="katalog-item">
            <img src={Kt6} alt="" />
            <div className="katalog-label"></div>
            <div className="katalog-content">
              <p>{t("katalog.items.item6")}</p>
              <Link to="/koloniy">
                <button>{t("katalog.open")}</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Katprodukti;
