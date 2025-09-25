import { useTranslation } from "react-i18next";
import UniversalSlider from "./UniversalSlider";
import Nest1 from "../assets/nest.jpg";

const Nestandartnoe = () => {
  const { t } = useTranslation();

  // JSON ichidan obyektlarni olish
  const items = t("universal.nestandartnoe.items", { returnObjects: true });

  // Rasmlarni qo‘shib map qilish
  const images = [Nest1];
  const mappedItems = items.map((item, index) => ({
    ...item,
    img: images[index],
  }));

  return (
    <UniversalSlider
      title={t("universal.nestandartnoe.title")}
      items={mappedItems}
    />
  );
};

export default Nestandartnoe;
