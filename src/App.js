import React from "react";
// import "./App.css";
import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { AboutUs } from "./components/AboutUs";
import { Footer } from "./components/Footer";
import Headroom from "react-headroom";

import bannerMaterial from "./const/bannerMaterial.js";

function App() {
  return (
    <container>
      <Headroom>
        <Header />
      </Headroom>
      {bannerMaterial.map((val, index) => {
        return (
          <Banner
            key={index}
            index={index}
            imgSrc={val.imgSrc}
            text={val.text}
          />
        );
      })}
      <AboutUs />
      <Footer />
    </container>
  );
}

export default App;
