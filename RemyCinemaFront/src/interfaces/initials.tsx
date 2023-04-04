import { FunctionData, HallRC, TableTodoColumnType } from ".";

//

export const initialMovieByQuery = {
  adult: false,
  backdrop_path: "",
  genre_ids: [],
  id: 0,
  original_language: "",
  original_title: "",
  overview: "",
  popularity: 0,
  poster_path: "",
  release_date: "",
  title: "",
  video: false,
  vote_average: 0,
  vote_count: 0,
};

//

//
export const dataCinemasFake: Array<FunctionData> = [
  {
    id: 1,
    cinema_name: "RC Lima Plaza Norte",
    city_name: "Lima",
  },
  {
    id: 2,
    cinema_name: "RC Lima Mall de Comas",
    city_name: "Lima",
  },
  {
    id: 3,
    cinema_name: "RC Lima Mall de Sur",
    city_name: "Lima",
  },
  {
    id: 4,
    cinema_name: "RC Trujillo Centro",
    city_name: "Trujillo",
  },
  {
    id: 5,
    cinema_name: "RC Trujillo Real Plaza",
    city_name: "Trujillo",
  },
];

export const initialMovieRCFormat = {
  id_movie: 0,
  title_movie: "",
  duration_movie: 0,
  sinopsis_movie: "",
  trailer_movie: "",
  poster_movie: "",
  directors_movie: "",
  //esta info pondremos nosotros
  release_date_movie: "",
  restriction_movie: {
    id_restriction: 0,
    tag_restriction: "",
    descrp_restriction: "",
  },
  genres_movie: [],
  idioms_movie: [],
  formats_movie: [],
};

export const ColumsForMoviesTable: TableTodoColumnType[] = [
  {
    title: "#",
    dataIndex: "index_movie",
    key: "index_movie",
  },
  {
    title: "Nombre",
    dataIndex: "title_movie",
    key: "title_movie",
  },
  {
    title: "Estreno",
    dataIndex: "release_date_movie",
    key: "release_date_movie",
  },
  {
    title: "Restricción",
    dataIndex: "restriction_movie",
    key: "restriction_movie",
  },
  {
    title: "Duración",
    dataIndex: "duration_movie",
    key: "duration_movie",
  },
  {
    title: "Estado",
    dataIndex: "status_movie",
    key: "status_movie",
  },
  {
    title: "Acciones",
    dataIndex: "actions_movie",
    key: "actions_movie",
  },
];

export const ColumsForHallsTable: TableTodoColumnType[] = [
  {
    title: "#",
    dataIndex: "index_hall",
    key: "index_hall",
  },
  {
    title: "Tag",
    dataIndex: "tag_hall",
    key: "tag_hall",
  },
  {
    title: "Cine",
    dataIndex: "cinema_hall",
    key: "cinema_hall",
  },
  {
    title: "Tecnología",
    dataIndex: "formats_hall",
    key: "formats_hall",
  },

  {
    title: "Estado",
    dataIndex: "status_hall",
    key: "status_hall",
  },
  {
    title: "Acciones",
    dataIndex: "actions_halls",
    key: "actions_halls",
  },
];

export const initialHall: HallRC = {
  id_hall: 0,
  id_cinema: 0,
  tag_hall: "",
  hall_formats: [],
};
