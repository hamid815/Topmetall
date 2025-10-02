import { useTranslation } from "react-i18next";
import UniversalSlider from "./UniversalSlider";
import Sep1 from "../assets/separatsionnoe.jpg";
import Sep2 from "../assets/c864743655a3f91579a08a0702fe87283952485c.jpg"

const Separatsionnoe = () => {
  const { t } = useTranslation();

  const items = t("universal.separatsionnoe.items", { returnObjects: true });

  
  const mappedItems = items.map((item) => ({
    ...item,
    images: [Sep1, Sep2],
  }));

  return (
    <UniversalSlider
      title={t("universal.separatsionnoe.title")}
      items={mappedItems}
    />
  );
};

export default Separatsionnoe;
