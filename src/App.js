import React from "react";
// import "./App.css";
import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { AboutUs } from "./components/AboutUs";
import { Footer } from "./components/Footer";
import { FrontPage } from "./components/FrontPage";
import Headroom from "react-headroom";

import bannerMaterial from "./const/bannerMaterial.js";

function App() {
  return (
    <container>
      <Headroom>
        <Header />
      </Headroom>
      <FrontPage></FrontPage>
      {bannerMaterial.map((val, index) => {
        return (
          <Banner
            key={index}
            index={index}
            imgSrc={val.imgSrc}
            text={val.text}
            subText={val.subText}
          />
        );
      })}
      <AboutUs />
      <Footer />
    </container>
  );
}

export default App;
