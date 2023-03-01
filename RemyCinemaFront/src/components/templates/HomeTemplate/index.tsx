import CardListGrid from "../../organisms/CardListGrid";
import Footer from "../../organisms/Footer";
import HomeSlider from "../../organisms/HomeSlider";
import ProccessBuyInfo from "../../organisms/ProccessBuyInfo";
import "./index.scss";

const HomeTemplate = () => {
  return (
    <div>
      <HomeSlider />
      <CardListGrid title="Películas en cartelera" />
      <CardListGrid title="Próximos estrenos" />
      <ProccessBuyInfo />
      <Footer />
    </div>
  );
};

export default HomeTemplate;
