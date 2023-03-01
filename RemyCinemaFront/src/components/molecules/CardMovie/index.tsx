import React from "react";
import { POSTER_PATH } from "../../../Api/config";
import { movieRCFormat } from "../../../interfaces";
import imagen1 from "../../../assets/imagen.jpg";
import { CgDetailsMore } from "react-icons/cg";
import { HiOutlineTicket } from "react-icons/hi";
import "./index.scss";
import Button from "../../atoms/Button";

// interface CardMovieProps {
//   data: movieRCFormat;
// }

const CardMovie = () => {
  return (
    <div className="cardmovie_container">
      <img
        src={imagen1}
        // src={`${POSTER_PATH}/${data.poster_movie}`}
        // alt={data.title_movie}
      ></img>
      <div className="cardmovie_buttons_container">
        <Button
          text="Comprar"
          type="button"
          icon={<HiOutlineTicket />}
          onClick={() => console.log("hoa")}
          className="fifth_button"
        ></Button>
        <Button
          text="Detalles"
          type="button"
          icon={<CgDetailsMore />}
          onClick={() => console.log("hoa")}
          className="tertiary_button"
        ></Button>
      </div>
    </div>
  );
};

export default CardMovie;
