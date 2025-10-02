import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const links = [
    { path: "/telloobenniki", label: t("info.sidebar.telloobmenniki") },
    { path: "/trubniypuchki", label: t("info.sidebar.trubnie") },
    { path: "/seksiaparat", label: t("info.sidebar.seksiaparat") },
    { path: "/yomkstniy", label: t("info.sidebar.emkostnoe") },
    { path: "/sepiratori", label: t("info.sidebar.separatori") },
    { path: "/koloniy", label: t("info.sidebar.kolonniy") },
    { path: "/nestandartnoe", label: t("info.sidebar.nestandartnoe") },
    { path: "/metalkonstruksiya", label: t("info.sidebar.metallokons") },
  ];

  return (
    <div className="sidebar">
      <div>
        {links.map((link, index) => {
          const isActive = location.pathname === link.path;
          return (
            <Link key={index} to={link.path}>
              <div className={isActive ? "active" : "unactive"}>
                {" "}
                <div className={isActive ? "active-div" : "unactivediv"}></div>
                <h3 className={isActive ? "activate-text" : "unactive-text"}>
                  {link.label}
                </h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
