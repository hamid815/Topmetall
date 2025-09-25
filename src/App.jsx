import "./App.css";
import React from "react";
import "boxicons/css/boxicons.min.css";
import Main from "./components/Main";
import Okompani from "./components/Okompani";
import Realproyekti from "./components/Realproyekti";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Telloobenniki from "./components/Telloobenniki";
import Trubnie from "./components/Trubniypuchki";
import Seksiiapparat from "./components/Seksiiapparat";
import Yomkstniy from "./components/Yomkistniy";
import Sepiratori from "./components/Sepiratori";
import Kolonniy from "./components/Kolonniy";
import Metalkostruksiya from "./components/Metalkonstruksiya";
import Nestandartnoe from "./components/Nestandartnoeinfo";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      {/* <Header />
        <div className="container">
        <div className="app-content">
            <h1 className="gradient-text">
              ПРОМЫШЛЕННОЕ И ТЕХНОЛОГИЧЕСКОЕ ОБОРУДОВАНИЕ ДЛЯ НЕФТЕГАЗОВОЙ,
              ХИМИЧЕСКОЙ И ДРУГИХ ОТРАСЛЕЙ, КРУПНОТОННАЖНЫЕ МЕТАЛЛОКОНСТРУКЦИИ
              </h1>
              <div>
              <p><div className="dot"></div> Собственное производство</p>
              <p><div className="dot"></div> Контроль качества на всех этапах</p>
              <p><div className="dot"></div> Производство под заказ нестандартного оборудования</p>
            </div>
            
            <div>
            <h4 className="vniz">Вниз <img src={Vniz} alt="" /></h4>
            </div>
            </div>
            </div>
            <Katprodukti />
            <Appform/>
            <Footer/> */}

      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/okompani" element={<Okompani />} />
          <Route path="/realproyekti" element={<Realproyekti />} />

          <Route path="/telloobenniki" element={<Telloobenniki />} />
          <Route path="/trubniypuchki" element={<Trubnie/>}/>
          <Route path="/seksiaparat" element={<Seksiiapparat/>}/>
          <Route path="/yomkstniy" element={<Yomkstniy/>}/>
          <Route path="/sepiratori" element={<Sepiratori/>}/>
          <Route path="/koloniy" element={<Kolonniy/>}/>
          <Route path="/metalkonstruksiya" element={<Metalkostruksiya/>}/>
          <Route path="/nestandartnoe" element={<Nestandartnoe/>}/>

          





        </Routes>
      </Router>
    </div>
  );
}

export default App;
