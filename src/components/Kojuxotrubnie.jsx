import { useTranslation } from "react-i18next";
import UniversalSlider from "./UniversalSlider";
import Kojux1 from "../assets/kojuxotrubnie.jpg";
import Kojux2 from "../assets/f4954a33ef6c4af9218946bb1eb047d89bfaa4f9.jpg";
import Kojux3 from "../assets/b25da8403efe066fec2e57a542c2d35a31bc599e.jpg";
import Kojux4 from "../assets/fa5491dda2debc7e72f34dd9538e1d919232737b.jpg";


const Kojuxotruvennoe = () => {
  const { t } = useTranslation();

  const items = t("universal.kojuxotruvennoe.items", { returnObjects: true });

  // Bitta card uchun images massivi
  const mappedItems = items.map((item) => ({
    ...item,
    images: [Kojux1,Kojux2,Kojux3,Kojux4,], // keyinchalik boshqa rasmlar qo‘shilsa shu massivga kiritasiz
  }));

  return (
    <UniversalSlider
      title={t("universal.kojuxotruvennoe.title")}
      items={mappedItems}
    />
  );
};

export default Kojuxotruvennoe;
