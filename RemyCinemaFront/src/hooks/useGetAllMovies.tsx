import { useState, useEffect } from "react";
import MoviesService from "../Api/movies";
import { movieRCFormatTest } from "../interfaces";

const useGetAllMovies = () => {
  const [data, setData] = useState<movieRCFormatTest[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAllMovies = async () => {
    await MoviesService.getAllMovies()
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchAllMovies();
  }, []);

  return { data: data ?? [], loading, error };
};

export default useGetAllMovies;
