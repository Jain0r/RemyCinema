import React from "react";
import { useQuery } from "react-query";
import CinemasService from "../../../Api/cinemas";
import FormatsService from "../../../Api/formats";
import HallsService from "../../../Api/halls";
import IdiomsService from "../../../Api/idioms";
import MoviesService from "../../../Api/movies";
import PerformancesService from "../../../Api/performances";
import Loader from "../../../components/atoms/Loader";
import AdminPerformancesTemplate from "../../../components/templates/AdminPerformancesTemplate";

import {
  CinemaRC,
  FormatMovie,
  HallRC,
  IdiomMovie,
  movieRCFormat,
  PerformanceMovie,
} from "../../../interfaces";

export interface InfoPerfomancesTemplate {
  movies: movieRCFormat[];
  formats: FormatMovie[];
  idioms: IdiomMovie[];
  performances: PerformanceMovie[];
  cinemas: CinemaRC[];
  halls: HallRC[];
}

const AdminPerformancesPage = () => {
  const {
    error: errorFormats,
    isLoading: isLoadingFormats,
    data: allFormats,
  } = useQuery({
    queryKey: ["formats"],
    queryFn: () => FormatsService.getAllFormats(),
  });
  const {
    error: errorIdioms,
    isLoading: isLoadingIdioms,
    data: allIdioms,
  } = useQuery({
    queryKey: ["idioms"],
    queryFn: () => IdiomsService.getAllIdioms(),
  });
  const {
    error: errorMovies,
    isLoading: isLoadingMovies,
    data: allMovies,
  } = useQuery({
    queryKey: ["movies"],
    queryFn: () => MoviesService.getAllMovies(),
  });
  const {
    error: errorPerformances,
    isLoading: isLoadingPerformaces,
    data: allPerformances,
  } = useQuery({
    queryKey: ["performances"],
    queryFn: () => PerformancesService.getAllPerformances(),
  });

  const {
    error: errorCinemas,
    isLoading: isLoadingCinemas,
    data: allCinemas,
  } = useQuery({
    queryKey: ["cinemas"],
    queryFn: () => CinemasService.getAllCinemas(),
  });
  const {
    error: errorHalls,
    isLoading: isLoadingHalls,
    data: allHalls,
  } = useQuery({
    queryKey: ["halls"],
    queryFn: () => HallsService.getAllHalls(),
  });


  const data: InfoPerfomancesTemplate = {
    formats: allFormats,
    idioms: allIdioms,
    movies: allMovies,
    performances: allPerformances,
    cinemas: allCinemas,
    halls: allHalls,
  };
  if (
    isLoadingFormats ||
    isLoadingIdioms ||
    isLoadingMovies ||
    isLoadingPerformaces ||
    isLoadingCinemas ||
    isLoadingHalls
  ) {
    return <Loader />;
  }
  return (
    <div>
      <AdminPerformancesTemplate data={data} />
    </div>
  );
};

export default AdminPerformancesPage;
