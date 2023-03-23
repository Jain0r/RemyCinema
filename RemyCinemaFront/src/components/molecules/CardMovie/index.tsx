import { POSTER_PATH } from "../../../Api/config";
import { movieRCFormat } from "../../../interfaces";
import logo from "../../../assets/logo-transparent-png.png";
import { CgDetailsMore } from "react-icons/cg";
import { HiOutlineTicket } from "react-icons/hi";
import "./index.scss";
import Button from "../../atoms/Button";
import { useNavigate } from "react-router-dom";
import routes from "../../../shared/navigation";

interface CardMovieProps {
  data: movieRCFormat;
}

const CardMovie = ({ data }: CardMovieProps) => {
  const navigate = useNavigate();

  return (
    <div className="cardmovie_container">
      <img
        src={data?.poster_movie ? `${POSTER_PATH}/${data.poster_movie}` : logo}
        alt={data?.title_movie}
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
          onClick={() =>
            navigate(`${routes.mainRoutes.movies}/${data.id_movie}`)
          }
          className="tertiary_button"
        ></Button>
      </div>
    </div>
  );
};

export default CardMovie;
