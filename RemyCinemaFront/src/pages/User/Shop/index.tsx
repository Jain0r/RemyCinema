import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import MoviesService from "../../../Api/movies";
import Loader from "../../../components/atoms/Loader";
import ShopTemplate from "../../../components/templates/ShopTemplate";
import {
  setCombos,
  setFoods,
  setSeats,
  setTickets,
} from "../../../redux/actions/shopActions";

const ShopPage = () => {
  const dispatch = useDispatch();
  const params = useParams(); // useParams trae un objeto donde los valores de los parametros (en este caso id) puedes ser string | undefined
  const paramsId = params?.id !== undefined ? parseInt(params?.id) : 1; // aca validamos si es undefined devolvera 1 pero si no lo es hara un parseInt de este string (caracter numerico)
  const [id, setId] = useState<number>(paramsId); // ahora seteamos un id para pasarlo al customhook ahora ya asegurandonos de que es un numero
  const {
    isLoading,
    isError,
    data: dataMovie,
    error,
  } = useQuery({
    queryKey: ["movieShopDetails", id], // lo recomendable es mantener el ID de la película en el array de la clave de caché. De esta manera, React Query podrá identificar de manera única la consulta de detalles de la película y volver a hacerla cada vez que sea necesario.
    queryFn: () => MoviesService.getMovieById(id),
  }); //traemos lo que retorna el customhook
  useEffect(() => {
    setId(paramsId); // cada vez que se cambie el params.id setearemos nuestro valor de estado id con el valor de paramsId
    dispatch(setTickets([])); // setearemos valores vacios al momento de cambiar el params.id
    dispatch(setSeats([]));
    dispatch(setFoods([]));
    dispatch(setCombos([]));
  }, [params.id]);
  if (isLoading) return <Loader />;
  else if (isError) return <div>{JSON.stringify(error)}</div>;
  else if (dataMovie !== undefined) {
    return (
      <div>
        <ShopTemplate data={dataMovie} />
      </div>
    );
  }
};

export default ShopPage;
