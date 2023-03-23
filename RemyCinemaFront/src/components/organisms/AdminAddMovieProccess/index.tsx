import React, { useState } from "react";
import { infoFilterForMoviesPage, MovieByQuery } from "../../../interfaces";
import { initialMovieByQuery } from "../../../interfaces/initials";
import ModalConfirmAction from "../../molecules/ModalConfirmAction";
import AdminAddMovieForm from "../AdminAddMovieForm";
import AdminSelectMovieByQuery from "../AdminSelectMovieByQuery";

interface AdminAddMovieProccessProps {
  data: infoFilterForMoviesPage;
}

const AdminAddMovieProccess = ({ data }: AdminAddMovieProccessProps) => {
  const [proccess, setProccess] = useState<number>(1);
  const [selectedMovie, setSelectedMovie] =
    useState<MovieByQuery>(initialMovieByQuery);
  const [modalInform, setModalInform] = useState<boolean>(false);

  console.log("moviesase", selectedMovie);
  const handleStep = (step: number) => {
    if (selectedMovie.id === 0) {
      setModalInform(true);
    } else {
      setProccess(2);
    }
  };
  return (
    <div>
      {proccess === 1 && (
        <AdminSelectMovieByQuery
          handleStep={(step: number) => handleStep(step)}
          setMovieData={(data: MovieByQuery) => setSelectedMovie(data)}
          movieData={selectedMovie}
        />
      )}
      {proccess === 2 && (
        <AdminAddMovieForm
          genres={data?.genres}
          restrictions={data?.restrictions}
          movieData={selectedMovie}
        />
      )}
      <ModalConfirmAction
        isOpen={modalInform}
        maxWidth={300}
        onClose={() => setModalInform(false)}
        title="Película no seleccionada"
        description="Debes seleccionar una pelicula para seguir el proceso de adición de pelicula en la Base de Datos"
      />
    </div>
  );
};

export default AdminAddMovieProccess;
