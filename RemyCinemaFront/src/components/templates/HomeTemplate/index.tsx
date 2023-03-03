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
  return (
    <div>
      <HomeSlider />
      <CardListGrid
        data={data && data.slice(0, 5)}
        title="Películas en cartelera"
      />
      <CardListGrid data={data && data.slice(0, 5)} title="Próximos estrenos" />
      <ProccessBuyInfo />
      <Footer />
    </div>
  );
};

export default HomeTemplate;
