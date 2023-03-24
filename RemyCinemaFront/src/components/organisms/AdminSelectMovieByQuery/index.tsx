import React, { useState } from "react";
import { POSTER_PATH } from "../../../Api/config";
import MoviesService from "../../../Api/movies";
import MoviesServiceTMD from "../../../Api/moviesTMD";
import { MovieByQuery } from "../../../interfaces";
import { initialMovieByQuery } from "../../../interfaces/initials";
import Button from "../../atoms/Button";
import Loader from "../../atoms/Loader";
import CardMovieToModal from "../../molecules/CardMovietoModal";
import ModalLayout from "../../molecules/ModalLayout";
import "./index.scss";

interface AdminSelectMovieByQueryProps {
  movieData: MovieByQuery;
  setMovieData(data: MovieByQuery): void;
  handleStep(step: number): void;
}

const AdminSelectMovieByQuery = ({
  movieData,
  handleStep,
  setMovieData,
}: AdminSelectMovieByQueryProps) => {
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [modalInfoMovie, setModalInfoMovie] =
    useState<MovieByQuery>(initialMovieByQuery);
  const [showModalInfoMovie, setShowModalInfoMovie] = useState<boolean>(false);
  const [queryResults, setQueryResults] = useState<MovieByQuery[]>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleOpenModalInfo = (dataMovie: MovieByQuery) => {
    setModalInfoMovie(dataMovie);
    setShowModalInfoMovie(true);
  };

  const fetchMovieByQuery = () => {
    setMovieData(initialMovieByQuery);
    setLoading(true);
    getMovieByQuery();
  };
  const getMovieByQuery = async () => {
    await MoviesServiceTMD.getMoviesByQuery(query)
      .then((data) => setQueryResults(data.results))
      .then(() => setLoading(false))
      .catch((error) => console.log(error));
  };

  console.log(query);
  return (
    <div className="adminselect_movie">
      <p className="title_proccess">1. Seleccionar pelicula</p>
      <div className="input_movie_query">
        <input type="text" onChange={handleChange}></input>
        <Button
          className="fifth_button"
          type="button"
          text="Buscar"
          onClick={() => fetchMovieByQuery()}
        ></Button>
      </div>
      <div className="movie_query_results">
        {loading ? (
          <div>
            <Loader />
          </div>
        ) : queryResults?.length > 0 ? (
          queryResults &&
          queryResults?.map((result) => {
            return (
              <CardMovieToModal
                selectMovie={(data) => setMovieData(data)}
                isSelected={movieData?.id === result?.id ? true : false}
                openModal={(dataMovie) => handleOpenModalInfo(dataMovie)}
                key={result?.id}
                data={result}
              />
            );
          })
        ) : (
          <p className="movie_no_data_query">No hay data para mostrar.</p>
        )}
      </div>
      <ModalLayout
        maxWidth={350}
        isOpen={showModalInfoMovie}
        onClose={() => setShowModalInfoMovie(false)}
        title="Información básica"
      >
        <div className="current_movie_modal">
          <p className="current_movie_title">{modalInfoMovie?.title}</p>
          <div className="current_movie_main">
            <img
              src={`${POSTER_PATH}/${modalInfoMovie?.poster_path}`}
              alt={modalInfoMovie?.title}
            ></img>
            <div className="current_movie_overview">
              <span>Sipnosis:</span>
              <p>{modalInfoMovie?.overview}</p>
            </div>
          </div>
        </div>
      </ModalLayout>
      <p>Pelicula seleccionada: {movieData?.title}</p>
      <Button
        type="button"
        text="Siguiente"
        className="tertiary_button"
        onClick={() => handleStep(2)}
        styles={{
          padding: "15px",
          justifyContent: "center",
          fontSize: "16px",
        }}
      ></Button>
    </div>
  );
};

export default AdminSelectMovieByQuery;
