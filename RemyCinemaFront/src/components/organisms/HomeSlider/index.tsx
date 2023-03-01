// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import imagen1 from "../../../assets/imagen.jpg";
import imagen2 from "../../../assets/imagen2.jpg";
import imagen3 from "../../../assets/imagen3.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./index.scss";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import CardSlider from "../../molecules/CardSlider";
const HomeSlider = () => {
  return (
    <div>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CardSlider
            backGroundImage={imagen1}
            isBuyable
            description="Es la trigésima primera entrega del Universo Cinematográfico de Marvel y la primera película de la Fase Cinco."
            title="Ant-Man Quantumania"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardSlider
            backGroundImage={imagen2}
            isBuyable
            description="Emotiva, divertida y emocionante a partes iguales, una cinta a la que no hay que juzgar por la exitosa franquicia de la cual se desprende y que conmoverá tanto a chicos como a adultos."
            title="El Gato con Botas: El Último Deseo"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardSlider
            backGroundImage={imagen3}
            isBuyable
            description="Tinja es una joven gimnasta que intenta desesperadamente complacer a su madre."
            title="Cría Siniestra"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSlider;
