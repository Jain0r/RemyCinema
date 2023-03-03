import { useEffect, useState } from "react";
import { BASE_URL } from "../../../Api/config";
import MoviesService from "../../../Api/movies";
import Loader from "../../../components/atoms/Loader";
import HomeTemplate from "../../../components/templates/HomeTemplate";
import useGetAllMovies from "../../../hooks/useGetAllMovies";
import { movieRCFormatTest } from "../../../interfaces";

const HomePage = () => {
  const { loading, data, error } = useGetAllMovies();
  console.log(data);

  if (data !== null) {
    return <div>{loading ? <Loader /> : <HomeTemplate data={data} />}</div>;
  }
};

export default HomePage;
