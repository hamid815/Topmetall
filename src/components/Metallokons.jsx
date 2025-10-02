import { useTranslation } from "react-i18next";
import UniversalSlider from "./UniversalSlider";
import Metal1 from "../assets/metal1.jpg";
import Metalb1 from "../assets/metal2.jpg";
import Metalb2 from "../assets/ada0dc6ca104c707f3e39ae7f03d093b636c96bb.jpg";
import Metalb3 from "../assets/50f0cafa744de832801cde1bf359a5e8739b5e87.jpg";
import Metalb4 from "../assets/407fd147bcf56a9f30a8c38b84800747bcbb8896.jpg";
import Metalb5 from "../assets/ce5a95579a29985d051c3d0056322b485b3358d1.jpg";
import Metalb6 from "../assets/4433b4c9656f9dfcc6523e66b9a6202988c94807.jpg";
import Metalb7 from "../assets/10bb150d15b7ec5fe126ec012270e280e13aeac2.jpg";


import Metalc1 from "../assets/metal3.jpg";
import Metalc2 from "../assets/a36410223ffac294f167bcc6a06e1c72318ff8ec.jpg";
import Metalc3 from "../assets/00971c03106a271aaf3ea5c7d773e518f6d846ea.jpg";
import Metalc4 from "../assets/08c4db3cda92d991380e968f1326041fe471c61b.jpg";
import Metalc5 from "../assets/b8379cc93cff2e231600b12973897de3e1c2bd5f.jpg";
import Metalc6 from "../assets/730736952ae8479f22cba5668ce23f0147f222a9.jpg";
import Metalc7 from "../assets/624ffd4f4c355198ae56af46935e10aef671c248.jpg";
import Metalc8 from "../assets/6991de247ddb4c8544b578a492a54d0f45661f5d.jpg";
import Metalc9 from "../assets/c1b9622c79f426aff0faadd759a3923bf8afb1e7.jpg";
import Metalc10 from "../assets/371560ddd6ae05f5a0ee9ecfc980d47ca36051fd.jpg";
import Metalc11 from "../assets/0f77fda2ffe21033dadf587c01c6dbf1bea29125.jpg";
import Metalc12 from "../assets/56c8eac8bf4c56ef62b51febb640adf181f21e27.jpg";
import Metalc13 from "../assets/a92d273eab872d7e89d2e360f56417343e0ec37b.jpg";

import Metal4 from "../assets/metal4.jpg";

const Metallokons = () => {
  const { t } = useTranslation();

  const items = t("universal.metallokons.items", { returnObjects: true });

  // Har bir card uchun alohida rasmlar beramiz
  const mappedItems = items.map((item, index) => ({
    ...item,
    images:
      index === 0
        ? [Metal1]          // 1-card
        : index === 1
        ? [Metalb1,Metalb2,Metalb3,Metalb4,Metalb5,Metalb6,Metalb7]          // 2-card
        : index === 2
        ? [Metalc1,Metalc2,Metalc3,Metalc4,Metalc5,Metalc6,Metalc7,Metalc8,Metalc9,Metalc10,Metalc11,Metalc12,Metalc13]          // 3-card
        : [Metal4],         // 4-card
  }));

  return (
    <UniversalSlider
      title={t("universal.metallokons.title")}
      items={mappedItems}
    />
  );
};

export default Metallokons;
