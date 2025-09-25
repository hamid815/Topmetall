import { useTranslation } from "react-i18next";
import UniversalSlider from "./UniversalSlider";
import Sep1 from "../assets/separatsionnoe.jpg";

const Separatsionnoe = () => {
  const { t } = useTranslation();

  const items = t("universal.separatsionnoe.items", { returnObjects: true });
  const images = [Sep1];

  const mappedItems = items.map((item, index) => ({
    ...item,
    img: images[index],
  }));

  return (
    <UniversalSlider
      title={t("universal.separatsionnoe.title")}
      items={mappedItems}
    />
  );
};

export default Separatsionnoe;
