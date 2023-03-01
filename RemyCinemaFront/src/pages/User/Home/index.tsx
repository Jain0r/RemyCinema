import { useState } from "react";
import { BASE_URL } from "../../../Api/config";
import HomeTemplate from "../../../components/templates/HomeTemplate";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  return (
    <div>
      <HomeTemplate />
    </div>
  );
};

export default HomePage;
