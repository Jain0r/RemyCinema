import { useEffect, useState } from "react";
import MoviesService from "../Api/movies";
import { movieRCFormatTest } from "../interfaces";
import { initialMovieRCFormatTest } from "../interfaces/initials";

const useGetMovieById = (id: number) => {
  const [data, setData] = useState<movieRCFormatTest | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMovieById = async () => {
    await MoviesService.getMovieById(id)
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };
  //
  useEffect(() => {
    fetchMovieById();
  }, [id]);

  return {
    data: data ?? initialMovieRCFormatTest,
    loading,
    error,
  };
};

export default useGetMovieById;
