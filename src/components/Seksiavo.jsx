import { useTranslation } from "react-i18next";
import UniversalSlider from "./UniversalSlider";
import Avoa1 from "../assets/avo1.jpg";
import Avoa2 from "../assets/0e2c73e7547574da58d3596f541dfc0435f357db.jpg";
import Avoa3 from "../assets/16266b6b7b37d5d766e1f03fb489c42a352c2b3c.jpg";
import Avoa4 from "../assets/4679e13105c16ceb14fe30665be5adf7fc2863e7.jpg";
import Avoa5 from "../assets/a6c6447d48a5d471a51cddcb5a7fe8eac0784908.jpg";
import Avoa6 from "../assets/d0fb652af880fcef5b479fdc0e4e6cac2f5534c1.jpg";
import Avoa7 from "../assets/8bb127015574fc62b967dd2171df9401b531bca8.jpg";
import Avoa8 from "../assets/6ff12d82bd76e23f3e532ac6c47adfb7a7896cca.jpg";

import Avob1 from "../assets/avo2.jpg";
import Avob2 from "../assets/5f9931e4cf6e4e8565ed331e787c6005fdc6a0c4.jpg"

const SeksIavo = () => {
  const { t } = useTranslation();

  const items = t("universal.seksIavo.items", { returnObjects: true });

  // Har bir card uchun images massivini tayyorlash
  const mappedItems = items.map((item, index) => ({
    ...item,
    images:
      index === 0
        ? [Avoa1,Avoa2,Avoa3,Avoa4,Avoa5,Avoa6,Avoa7,Avoa8,]   // 1-card (keyinchalik bu massivga qo‘shimcha rasm qo‘shishingiz mumkin)
        : [Avob1, Avob2],  // 2-card
  }));

  return (
    <UniversalSlider
      title={t("universal.seksIavo.title")}
      items={mappedItems}
    />
  );
};

export default SeksIavo;
