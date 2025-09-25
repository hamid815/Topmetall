import { useTranslation } from "react-i18next";
import UniversalSlider from "./UniversalSlider";
import Metal1 from "../assets/metal1.jpg";
import Metal2 from "../assets/metal2.jpg";
import Metal3 from "../assets/metal3.jpg";
import Metal4 from "../assets/metal4.jpg";

const Metallokons = () => {
  const { t } = useTranslation();

  const items = t("universal.metallokons.items", { returnObjects: true });

  const images = [Metal1, Metal2, Metal3, Metal4];
  const mappedItems = items.map((item, index) => ({
    ...item,
    img: images[index],
  }));

  return (
    <UniversalSlider
      title={t("universal.metallokons.title")}
      items={mappedItems}
    />
  );
};

export default Metallokons;
