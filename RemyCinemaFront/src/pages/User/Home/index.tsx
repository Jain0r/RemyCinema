import MoviesService from "../../../Api/movies";
import Loader from "../../../components/atoms/Loader";
import HomeTemplate from "../../../components/templates/HomeTemplate";
import { movieRCFormat, ResponseFormat } from "../../../interfaces";
import { useQuery } from "react-query";

const HomePage = () => {
  const {
    isLoading,
    error,
    isError,
    data: allMovies,
  }: {
    data: movieRCFormat[] | undefined;
    isLoading: boolean;
    error: unknown; //el tipado del error se debe hacer cuando se establezca que se enviara de error
    isError: boolean;
  } = useQuery({
    queryKey: ["allMovies"],
    queryFn: () => MoviesService.getAllMovies(),
  });
  if (isLoading) return <Loader />;
  else if (isError) return <div>{JSON.stringify(error)}</div>;
  //se establecera una página 404 de
  else if (allMovies !== undefined)
    return (
      <div>
        <HomeTemplate data={allMovies} />
      </div>
    );
};

export default HomePage;
