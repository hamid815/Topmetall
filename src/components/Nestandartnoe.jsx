import { useTranslation } from "react-i18next";
import UniversalSlider from "./UniversalSlider";
import Nest1 from "../assets/nest.jpg";
import Nest2 from "../assets/09bf3bb1fcff8ad04e2f27a9ce1c3b4dd01a9f34.jpg";
import Nest3 from "../assets/9e1534fd4aab901b23fe212dbab4b719807c5767.jpg";
import Nest4 from "../assets/cea59a9992f9ebd55ea305010bf2da91d3b55851.jpg";
import Nest5 from "../assets/2e534c1bf9baf975e5d7e13ab3328e147290442b.jpg";
import Nest6 from "../assets/25d73b619222cf4372c3ca7c4eb5d565a4c7b149.jpg";
import Nest7 from "../assets/32245400cc156d5e887dcb7f4ad1cca44f44077a.jpg";
import Nest8 from "../assets/b874c71105d11b1eb23844f3639ba7c5cb01a2e2.jpg";
import Nest9 from "../assets/2e705c53a638699a4b6420b1505210f0e7eecd84.jpg";
import Nest10 from "../assets/d6ae65dc0149af75794ac7fd60c504fc1ce9b65e.jpg";
import Nest11 from "../assets/5306d019665dbc0de24617df9bd1b1e1850f37f7.jpg";
import Nest12 from "../assets/8b3870df2e7849722c366ef2b7f3eea9e275f729.jpg";
import Nest13 from "../assets/3715ae71c36f2ca6fb70888412ac244df47c2e29.jpg";


const Nestandartnoe = () => {
  const { t } = useTranslation();

  // JSON ichidan obyektlarni olish
  const items = t("universal.nestandartnoe.items", { returnObjects: true });

  // Bitta card uchun ham images massivini beramiz
  const mappedItems = items.map((item) => ({
    ...item,
    images: [Nest1,Nest2,Nest3,Nest4,Nest5,Nest6,Nest7,Nest8,Nest9,Nest10,Nest11,Nest12,Nest13,], // agar keyinchalik ko‘p rasm qo‘shmoqchi bo‘lsangiz shu massivga qo‘shib yuborasiz
  }));

  return (
    <UniversalSlider
      title={t("universal.nestandartnoe.title")}
      items={mappedItems}
    />
  );
};

export default Nestandartnoe;
