import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import GenresService from "../../../Api/genres";
import MoviesService from "../../../Api/movies";
import RestrictionsService from "../../../Api/restrictions";
import Loader from "../../../components/atoms/Loader";
import AdminMoviesTemplate from "../../../components/templates/AdminMoviesTemplate";

const AdminMoviePage = () => {
  const {
    data: movies,
    error: moviesError,
    isLoading: loadingMovies,
    refetch: refetchMovies,
  } = useQuery({
    queryKey: ["allMoviesAdmin"],
    queryFn: () => MoviesService.getAllMovies(),
  });
  const {
    data: genres,
    error: genresError,
    isLoading: loadingGenres,
  } = useQuery({
    queryKey: ["allGenresAdmin"],
    queryFn: () => GenresService.getAllGenres(),
  });
  const {
    data: restrictions,
    error: restrictionsError,
    isLoading: loadingRestrictions,
  } = useQuery({
    queryKey: ["allRestrictionsAdmin"],
    queryFn: () => RestrictionsService.getAllRestrictions(),
  });

  const updateMovies = () => {
    refetchMovies();
  };

  if (loadingMovies || loadingGenres || loadingRestrictions) {
    return <Loader />;
  }
  if (moviesError || genresError || restrictionsError) {
    return (
      <div>
        <p>{JSON.stringify(moviesError)}</p>
        <p>{JSON.stringify(genresError)}</p>
        <p>{JSON.stringify(restrictionsError)}</p>
      </div>
    );
  }

  return (
    <div>
      <AdminMoviesTemplate
        updateMovies={() => updateMovies()}
        info={{ movies, genres, restrictions }}
      />
    </div>
  );
};

export default AdminMoviePage;
