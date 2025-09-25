import { useTranslation } from "react-i18next";
import UniversalSlider from "./UniversalSlider";
import Kojux1 from "../assets/kojuxotrubnie.jpg";

const Kojuxotruvennoe = () => {
  const { t } = useTranslation();

  const items = t("universal.kojuxotruvennoe.items", { returnObjects: true });
  const images = [Kojux1];

  const mappedItems = items.map((item, index) => ({
    ...item,
    img: images[index],
  }));

  return (
    <UniversalSlider
      title={t("universal.kojuxotruvennoe.title")}
      items={mappedItems}
    />
  );
};

export default Kojuxotruvennoe;
