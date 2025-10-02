import { useTranslation } from "react-i18next";
import UniversalSlider from "./UniversalSlider";
import Trubaa1 from "../assets/trubnie1.jpg";
import Trubaa2 from "../assets/43a77ebefe5809254b32998d0a9fe1ece484bde6.jpg";
import Trubaa3 from "../assets/983274629a5242ca82e516ac18445e2c071fa98c.jpg";

import Trubab1 from "../assets/trubnie2.jpg";
import Trubab2 from "../assets/9950721cfa928ce3f02b8df1e44bf817a3f2ce68.jpg";
import Trubab3 from "../assets/983274629a5242ca82e516ac18445e2c071fa98c.jpg";
import Trubab4 from "../assets/8802491562527524c20bc116e38d9dbc4769bc54.jpg";

import Trubac1 from "../assets/trubnie3.jpg";
import Trubac2 from "../assets/f390cda12980efd3d56e1a0a7490e5e20213bdb6.jpg";
import Trubac3 from "../assets/8802491562527524c20bc116e38d9dbc4769bc54.jpg";

import Trubad1 from "../assets/trubnie4.jpg";

import Trubae1 from "../assets/trubnie5.jpg";
import Trubae2 from "../assets/eef478fcf7d83a6efb5250f75883646ca1e79ca3.jpg";
import Trubae3 from "../assets/f25f4dfa9ac0223a17f7d73a6f41df76349d3901.jpg";

import Trubaf1 from "../assets/trubnie6.jpg";
import Trubaf2 from "../assets/afba229cf3f2ffbc21dffede9da559f7530290c1.jpg";
import Trubaf3 from "../assets/31eed376861900791c81e6aa59b36ea639eb56bc.jpg";
import Trubaf4 from "../assets/687352a3a7d4e2b6c2a6e610aecb1845fe437e32.jpg";
import Trubaf5 from "../assets/2a39cad3696364097a53a398fa2527e25d85355c.jpg";
import Trubaf6 from "../assets/00b8d62712f3c7a8ba6aba1cf188e6c5ba2192c3.jpg";
import Trubaf7 from "../assets/a0c79a519c93b3f1b6b1565f636f9f7e4cda280f.jpg";
import Trubaf8 from "../assets/12e681ac5bb9ab14094b41d3054f19d73c3d0f36.jpg";
import Trubaf9 from "../assets/1da7e1e5ee55099f3d8da2386a2a42bdde1eb3b1.jpg";
import Trubaf10 from "../assets/2f8da0a65c16993d4e83a8be55fdeaa412d0d36c.jpg";
import Trubaf11 from "../assets/eb1261659af322a133996745e786c744e3e0a8df.jpg";
import Trubaf12 from "../assets/fb543bb521940f4a93e2bdd640b8ebedee98b67d.jpg";
import Trubaf13 from "../assets/2e85beef2551176e906d98b361cb21cafac8f643.jpg";


const Trubnie = () => {
  const { t } = useTranslation();

  const items = t("universal.trubnie.items", { returnObjects: true });

  // Har bir card uchun alohida images massivini qo‘shamiz
  const mappedItems = items.map((item, index) => ({
    ...item,
    images:
      index === 0 ? [Trubaa1,Trubaa2,Trubaa3,] :
      index === 1 ? [Trubab1,Trubab2,Trubab3,Trubab4,] :
      index === 2 ? [Trubac1,Trubac2,Trubac3,] :
      index === 3 ? [Trubad1] :
      index === 4 ? [Trubae1,Trubae2,Trubae3,] :
      [Trubaf1,Trubaf2,Trubaf3,Trubaf4,Trubaf5,Trubaf6,Trubaf7,Trubaf8,Trubaf9,Trubaf10,Trubaf11,Trubaf12,Trubaf13,], // 6-card
  }));

  return (
    <UniversalSlider
      title={t("universal.trubnie.title")}
      items={mappedItems}
    />
  );
};

export default Trubnie;
