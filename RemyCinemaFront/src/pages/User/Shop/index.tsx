import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ShopTemplate from "../../../components/templates/ShopTemplate";
import {
  fetchAllMovieInfo,
  fetchTransformAllMovieInfo,
} from "../../../functions";
import { transformMovieAllInfo } from "../../../interfaces";
import { initialTransformAllMovieData } from "../../../interfaces/initials";
import {
  setCombos,
  setFoods,
  setSeats,
  setTickets,
} from "../../../redux/actions/shopActions";

const ShopPage = () => {
  const [movieData, setMovieData] = useState<transformMovieAllInfo>(
    initialTransformAllMovieData
  );
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const params = useParams();

  const getMovieDetails = async () => {
    if (params.id !== undefined && params.id !== null) {
      await fetchAllMovieInfo(params.id)
        .then((data) => setMovieData(fetchTransformAllMovieInfo(data)))
        .then(() => setLoading(false))
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    getMovieDetails();
    dispatch(setTickets([]));
    dispatch(setSeats([]));
    dispatch(setFoods([]));
    dispatch(setCombos([]));
  }, [params]);
  return (
    <div>{loading ? <p>Loading...</p> : <ShopTemplate data={movieData} />}</div>
  );
};

export default ShopPage;
