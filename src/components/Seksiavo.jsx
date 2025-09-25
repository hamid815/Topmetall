import { useTranslation } from "react-i18next";
import UniversalSlider from "./UniversalSlider";
import Avo1 from "../assets/avo1.jpg";
import Avo2 from "../assets/avo2.jpg";

const SeksIavo = () => {
  const { t } = useTranslation();

  const items = t("universal.seksIavo.items", { returnObjects: true });
  const images = [Avo1, Avo2];

  const mappedItems = items.map((item, index) => ({
    ...item,
    img: images[index],
  }));

  return (
    <UniversalSlider
      title={t("universal.seksIavo.title")}
      items={mappedItems}
    />
  );
};

export default SeksIavo;
