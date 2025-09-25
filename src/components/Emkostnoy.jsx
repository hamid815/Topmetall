import { useTranslation } from "react-i18next";
import UniversalSlider from "./UniversalSlider";
import Emkost1 from "../assets/emkost2.jpg";
import Emkost2 from "../assets/emkost1.jpg";

const Emkostnoy = () => {
  const { t } = useTranslation();

  // JSON ichidan obyektlarni olish
  const items = t("universal.emkostnoy.items", { returnObjects: true });

  // Rasmlarni qo‘shib map qilish
  const images = [Emkost1, Emkost2];
  const mappedItems = items.map((item, index) => ({
    ...item,
    img: images[index],
  }));

  return (
    <UniversalSlider
      title={t("universal.emkostnoy.title")}
      items={mappedItems}
    />
  );
};

export default Emkostnoy;
