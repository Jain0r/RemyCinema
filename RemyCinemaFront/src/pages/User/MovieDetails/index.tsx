import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import MoviesService from "../../../Api/movies";
import Loader from "../../../components/atoms/Loader";
import MovieDetailsTemplate from "../../../components/templates/MovieDetailsTemplate";

const MovieDetailsPage = () => {
  const params = useParams(); // useParams trae un objeto donde los valores de los parametros (en este caso id) puedes ser string | undefined
  const paramsId = params?.id !== undefined ? parseInt(params?.id) : 1; // aca validamos si es undefined devolvera 1 pero si no lo es hara un parseInt de este string (caracter numerico)
  const [id, setId] = useState<number>(paramsId); // ahora seteamos un id para pasarlo al customhook ahora ya asegurandonos de que es un numero
  // const {
  //   isLoading,
  //   isError,
  //   data: dataMovie,
  //   error,
  // } = useQuery({
  //   queryKey: ["movieDetails", id], // lo recomendable es mantener el ID de la película en el array de la clave de caché. De esta manera, React Query podrá identificar de manera única la consulta de detalles de la película y volver a hacerla cada vez que sea necesario.
  //   queryFn: () => MoviesService.getMovieById(id),
  //   //cacheTime: por default es 5min // el cache se borrara solo si esta inactivo, es decir si cambiamos de página ya que sera una info que no estaremos observando en el momento
  //   //staleTime: 10000, // si la data no se cambia continuamente es recomendable indicar un staletime  el staletime establece el tiempo necesario que tendra que pasar para que la data en cache pase de ser fresh a stale osea a obsoleto y por ende se haga una nueva peticion fetch y pintar de nuevo la data
  //   //refetchOnMount: false, //true si se desea hacer un refetch cada vez q el componente es montado o false sino //defaultvalue true
  //   //refetchOnWindowFocus: true// hace un refetch al momento de focusear la pagina //defaultValue true
  //   //refetchInterval: 10000, // indica el intervalo en ms para hacer un refetch automatico en la página
  //   //refetchIntervalInBackground: true, // true si desea hacerse el refetch aun si el usuario no tiene el focus en la pagina
  // });
  const {
    isError,
    error,
    isLoading,
    data: dataMovie,
  } = useQuery({
    queryKey: ["movie"],
    queryFn: () => MoviesService.getMovieById(id),
  });
  useEffect(() => {
    setId(paramsId); // ahora para que react haga el llamado del customhook cada vez que cambie el params
  }, [params.id]); // lo que hacemos es setear nuevamente nuestro valor de estado id con params.id cada vez que cambie el params.id
  // de esta forma se hara el llamado del customhook y se volvera a pintar el dom cada vez que detecte cambio en el params.id(url:id)
  if (isLoading) return <Loader />;
  else if (isError) return <div>{JSON.stringify(error)}</div>;
  //se establecera una página 404 de
  else if (dataMovie !== undefined)
    return (
      <div>
        <MovieDetailsTemplate data={dataMovie} />
        {/* <MovieDetailsTemplate data={dataMovie} /> */}
      </div>
    );
};

export default MovieDetailsPage;
