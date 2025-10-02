import { useTranslation } from "react-i18next";
import UniversalSlider from "./UniversalSlider";
import Emkosta1 from "../assets/emkost2.jpg";
import Emkosta2 from "../assets/9da6dea2492e48e5bfa5495ee7cf5f0f2a4f0548.jpg"; // qo‘shimcha rasm
import Emkosta3 from "../assets/c24d6d0dbcb8ef466141f4f1e27ee97cc50ff344 (1).jpg"; 
import Emkosta4 from "../assets/8b740cd84df863f1d731ae5653d7ba56c07b59c3.jpg"; 
import Emkosta5 from "../assets/4cfa9e1018cf6d1685894a100868d9ed7bcc0af0.jpg"; 
import Emkosta6 from "../assets/ee6602b2c5649a5ab35ac0fff0a58fc8bf9c0b49.jpg"; 
import Emkosta7 from "../assets/dce07f1767e449c95c89e1703ca719dc5c83be43.jpg"; 
import Emkosta8 from "../assets/8ff679c4c39b7bc655808589eebe7d86779bc701 (1).jpg"; 


import Emkostb1 from "../assets/emkost1.jpg";


const Emkostnoy = () => {
  const { t } = useTranslation();

  // JSON ichidan obyektlarni olish
  const items = t("universal.emkostnoy.items", { returnObjects: true });

  // Rasmlarni qo‘shib map qilish
  const mappedItems = items.map((item, index) => ({
    ...item,
    images:
      index === 0
        ? [Emkosta1, Emkosta2, Emkosta3, Emkosta4, Emkosta5, Emkosta6, Emkosta7, Emkosta8] // 1-chi loyihaga bir nechta rasm
        : [Emkostb1], // 2-chi loyihaga boshqa rasmlar
  }));

  return (
    <UniversalSlider
      title={t("universal.emkostnoy.title")}
      items={mappedItems}
    />
  );
};

export default Emkostnoy;
