import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../../components/atoms/Loader";
import MovieDetailsTemplate from "../../../components/templates/MovieDetailsTemplate";
import useGetMovieById from "../../../hooks/useGetMovieById";

const MovieDetailsPage = () => {
  const params = useParams(); // useParams trae un objeto donde los valores de los parametros (en este caso id) puedes ser string | undefined
  const paramsId = params?.id !== undefined ? parseInt(params?.id) : 1; // aca validamos si es undefined devolvera 1 pero si no lo es hara un parseInt de este string (caracter numerico)
  const [id, setId] = useState<number>(paramsId); // ahora seteamos un id para pasarlo al customhook ahora ya asegurandonos de que es un numero
  const { loading, data, error } = useGetMovieById(id); //traemos lo que retorna el customhook

  useEffect(() => {
    setId(paramsId); // ahora para que react haga el llamado del customhook cada vez que cambie el params
  }, [params.id]); // lo que hacemos es setear nuevamente nuestro valor de estado id con params.id cada vez que cambie el params.id
  // de esta forma se hara el llamado del customhook y se volvera a pintar el dom cada vez que detecte cambio en el params.id(url:id)
  if (error) {
    return (
      <div>
        <p>{JSON.stringify(error)}</p>
      </div>
    );
  }
  return (
    <div>
      {loading && data ? <Loader /> : <MovieDetailsTemplate data={data} />}
    </div>
  );
};

export default MovieDetailsPage;
