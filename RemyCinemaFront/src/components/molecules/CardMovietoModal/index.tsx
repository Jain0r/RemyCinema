import { POSTER_PATH } from "../../../Api/config";
import { MovieByQuery } from "../../../interfaces";
import logo from "../../../assets/logo-transparent-png.png";
import "./index.scss";
import { BsCheck } from "react-icons/bs";
import Button from "../../atoms/Button";
import { initialMovieByQuery } from "../../../interfaces/initials";

interface CardMovieToModalProps {
  data: MovieByQuery;
  openModal(dataMovie: MovieByQuery): void;
  selectMovie(data: MovieByQuery): void;
  isSelected?: boolean;
}

const CardMovieToModal = ({
  data,
  openModal,
  isSelected,
  selectMovie,
}: CardMovieToModalProps) => {
  return (
    <div
      className={
        isSelected ? "card_movie_detail selected" : "card_movie_detail"
      }
    >
      <div className={isSelected ? "selected_icon selected" : "selected_icon"}>
        <BsCheck />
      </div>

      <img
        className={isSelected ? "selected" : ""}
        src={data?.poster_path ? `${POSTER_PATH}/${data?.poster_path}` : logo}
        alt={data?.title}
      ></img>
      <div className="card_movie_details_buttons">
        <Button
          text="Ver detalles"
          type="button"
          onClick={() => openModal(data)}
          className="fifth_button"
        ></Button>
        <Button
          text={isSelected ? "Deseleccionar" : "Seleccionar"}
          type="button"
          onClick={
            isSelected
              ? () => selectMovie(initialMovieByQuery)
              : () => selectMovie(data)
          }
          className="tertiary_button"
        ></Button>
      </div>
    </div>
  );
};

export default CardMovieToModal;
