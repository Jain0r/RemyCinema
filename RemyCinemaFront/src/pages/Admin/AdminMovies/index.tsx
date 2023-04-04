import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import FormatsService from "../../../Api/formats";
import GenresService from "../../../Api/genres";
import IdiomsService from "../../../Api/idioms";
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
    refetchInterval: 50000,
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
  const {
    data: formats,
    error: formatsError,
    isLoading: loadingFormats,
  } = useQuery({
    queryKey: ["allFormats"],
    queryFn: () => FormatsService.getAllFormats(),
  });
  const {
    data: idioms,
    error: idiomsError,
    isLoading: loadingIdioms,
  } = useQuery({
    queryKey: ["allIdioms"],
    queryFn: () => IdiomsService.getAllIdioms(),
  });

  const updateMovies = () => {
    refetchMovies();
  };

  if (
    loadingMovies ||
    loadingGenres ||
    loadingRestrictions ||
    loadingFormats ||
    loadingIdioms
  ) {
    return <Loader />;
  }
  if (moviesError || genresError || restrictionsError) {
    return (
      <div>
        <p>{JSON.stringify(moviesError)}</p>
        <p>{JSON.stringify(genresError)}</p>
        <p>{JSON.stringify(restrictionsError)}</p>
        <p>{JSON.stringify(idiomsError)}</p>
        <p>{JSON.stringify(formatsError)}</p>
      </div>
    );
  }

  return (
    <div>
      <AdminMoviesTemplate
        updateMovies={() => updateMovies()}
        info={{ movies, genres, restrictions, idioms, formats }}
      />
    </div>
  );
};

export default AdminMoviePage;
