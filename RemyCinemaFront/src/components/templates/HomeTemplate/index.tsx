import { offShowMovies, onShowMovies } from "../../../functions";
import { movieRCFormat } from "../../../interfaces";
import CardListGrid from "../../organisms/CardListGrid";
import HomeSlider from "../../organisms/HomeSlider";
import ProccessBuyInfo from "../../organisms/ProccessBuyInfo";
import "./index.scss";

interface HomeTemplateProps {
  data: movieRCFormat[];
}

const HomeTemplate = ({ data }: HomeTemplateProps) => {
  console.log("dataRC", data);
  return (
    <div>
      <HomeSlider />
      <CardListGrid
        title="Películas en cartelera"
        data={onShowMovies(data).slice(0, 5)}
      />
      <CardListGrid
        title="Próximos estrenos"
        data={offShowMovies(data).slice(0, 5)}
      />
      {/* <CardListGrid
        data={data && data.slice(0, 5)}
        title="Películas en cartelera"
      />
      <CardListGrid data={data && data.slice(0, 5)} title="Próximos estrenos" /> */}
      <ProccessBuyInfo />
    </div>
  );
};

export default HomeTemplate;
