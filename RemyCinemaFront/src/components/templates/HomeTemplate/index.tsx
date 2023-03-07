import { useState } from "react";
import { movieRCFormatTest } from "../../../interfaces";
import Loader from "../../atoms/Loader";
import CardListGrid from "../../organisms/CardListGrid";
import Footer from "../../organisms/Footer";
import HomeSlider from "../../organisms/HomeSlider";
import ProccessBuyInfo from "../../organisms/ProccessBuyInfo";
import "./index.scss";

interface HomeTemplateProps {
  data: movieRCFormatTest[];
}

const HomeTemplate = ({ data }: HomeTemplateProps) => {


  
  console.log("data",data)
  return (
    <div>
      <HomeSlider />
      <CardListGrid title="Películas en cartelera" data={data && data.slice(0,5)}  />
      <CardListGrid title="Próximos estrenos" data={data && data.slice(5,10)}  />
      {/* <CardListGrid
        data={data && data.slice(0, 5)}
        title="Películas en cartelera"
      />
      <CardListGrid data={data && data.slice(0, 5)} title="Próximos estrenos" /> */}
      <ProccessBuyInfo />
      <Footer />
    </div>
  );
};

export default HomeTemplate;
