import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetailsTemplate from "../../../components/templates/MovieDetailsTemplate";
import {
  fetchAllMovieInfo,
  fetchTransformAllMovieInfo,
} from "../../../functions";
import { transformMovieAllInfo } from "../../../interfaces";
import { initialTransformAllMovieData } from "../../../interfaces/initials";

const MovieDetailsPage = () => {
  const params = useParams();
  const [movie, setMovie] = useState<transformMovieAllInfo>(
    initialTransformAllMovieData
  ); //se tiene q inicializar con el interface pero con valores vacios
  const [loading, setLoading] = useState(true);

  const getAllMovieInfo = async () => {
    if (params.id !== undefined && params.id !== null) {
      await fetchAllMovieInfo(params.id)
        .then((data) => setMovie(fetchTransformAllMovieInfo(data)))
        .then(() => setLoading(false))
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    getAllMovieInfo();
  }, [params]);
  console.log("loading", loading);
  console.log("movie", movie);
  console.log("JSON", JSON.stringify(movie));

  return (
    <div>
      {loading && movie ? (
        <p>Loading...</p>
      ) : (
        <MovieDetailsTemplate data={movie} />
      )}
    </div>
  );
};

export default MovieDetailsPage;
