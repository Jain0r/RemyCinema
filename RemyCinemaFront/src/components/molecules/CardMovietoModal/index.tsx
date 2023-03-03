import { POSTER_PATH } from "../../../Api/config";
import { MovieByQuery } from "../../../interfaces";
import logo from "../../../assets/logo-transparent-png.png";
import "./index.scss";

interface CardMovieToModalProps {
  data: MovieByQuery;
  openModal(dataMovie: MovieByQuery): void;
  isSelected?: boolean;
}

const CardMovieToModal = ({
  data,
  openModal,
  isSelected,
}: CardMovieToModalProps) => {
  return (
    <div
      className={
        isSelected ? "card_movie_detail selected" : "card_movie_detail"
      }
    >
      <img
        className={isSelected ? "selected" : ""}
        onClick={() => openModal(data)}
        src={data?.poster_path ? `${POSTER_PATH}/${data?.poster_path}` : logo}
        alt={data?.title}
      ></img>
    </div>
  );
};

export default CardMovieToModal;
