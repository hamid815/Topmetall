import { useTranslation } from "react-i18next";
import UniversalSlider from "./UniversalSlider";
import Truba1 from "../assets/trubnie1.jpg";
import Truba2 from "../assets/trubnie2.jpg";
import Truba3 from "../assets/trubnie3.jpg";
import Truba4 from "../assets/trubnie4.jpg";
import Truba5 from "../assets/trubnie5.jpg";
import Truba6 from "../assets/trubnie6.jpg";

const Trubnie = () => {
  const { t } = useTranslation();

  const items = t("universal.trubnie.items", { returnObjects: true });
  const images = [Truba1, Truba2, Truba3, Truba4, Truba5, Truba6];

  const mappedItems = items.map((item, index) => ({
    ...item,
    img: images[index],
  }));

  return (
    <UniversalSlider
      title={t("universal.trubnie.title")}
      items={mappedItems}
    />
  );
};

export default Trubnie;
