import MoviesService from "../../../Api/movies";
import Loader from "../../../components/atoms/Loader";
import HomeTemplate from "../../../components/templates/HomeTemplate";
import { movieRCFormatTest } from "../../../interfaces";
import { useQuery } from "react-query";
import { BASE_URL } from "../../../Api/config";
import { useEffect, useState } from "react";
import { fetchTransformAllMovieInfo, fetchAllMovieInfo } from "../../../functions";

const HomePage = () => {
  const [trendingMovies, setTredingMovies] = useState([])
  // const {
  //   isLoading,
  //   error,
  //   isError,
  //   data: allMovies,
  // }: {
  //   data: movieRCFormatTest[] | undefined;
  //   isLoading: boolean;
  //   error: unknown; //el tipado del error se debe hacer cuando se establezca que se enviara de error
  //   isError: boolean;
  // } = useQuery({
  //   queryKey: ["allMovies"],
  //   queryFn: () => MoviesService.getAllMovies(),
  // });
  const getTrendingMovies = async () => {
    const data = await fetch(`${BASE_URL}/trending/movie/week?api_key=b3166e823fd7ba5ac26db5f541dd0870&language=es-ES`,{method:"GET"})
    const dataJson = await data.json()
   setTredingMovies(dataJson.results)
  }
  useEffect(() => {
    getTrendingMovies()
  },[]);

  console.log("tre",trendingMovies)

  // if (isLoading) return <Loader />;
  // else if (isError) return <div>{JSON.stringify(error)}</div>;
  // //se establecera una página 404 de
  if (trendingMovies !== undefined)
    return (
      <div>
        <HomeTemplate data={trendingMovies} />
      </div>
    );
};

export default HomePage;
