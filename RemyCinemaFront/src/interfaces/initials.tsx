import {
  FetchAllMovieInfo,
  FetchMovieCreditsResponse,
  FetchMovieDetailsResponse,
  FetchVideosMovie,
  movieRCFormatTest,
} from ".";

export const initialMovieRCFormatTest: movieRCFormatTest = {
  idMovie: 0,
  titleMovie: "",
  durationMovie: 0,
  sinopsisMovie: "",
  trailerMovie: "",
  restrictionsMovie: "",
  directorsMovie: "",
  idiomsMovie: "",
  availableMovie: "",
  posterMovie: "",
  genresMovie: "",
  releaseDateMovie: "",
  statusMovie: "",
};
export const initialFetchDetailsMovie: FetchMovieDetailsResponse = {
  adult: false,
  backdrop_path: "",
  belongs_to_collection: null,
  budget: 0,
  genres: [],
  homepage: "",
  id: 0,
  imdb_id: "",
  original_language: "",
  original_title: "",
  overview: "",
  popularity: 0,
  poster_path: "",
  production_companies: [],
  production_countries: [],
  release_date: "",
  revenue: 0,
  runtime: 0,
  spoken_languages: [],
  status: "",
  tagline: "",
  title: "",
  video: false,
  vote_average: 0,
  vote_count: 0,
};
export const initialFetchCreditsMovie: FetchMovieCreditsResponse = {
  id: 0,
  cast: [],
  crew: [],
};

export const initialFetchVideosMovie: FetchVideosMovie = {
  id: 0,
  results: [],
};

export const initialAllMovieData: FetchAllMovieInfo = {
  ...initialFetchCreditsMovie,
  ...initialFetchDetailsMovie,
  ...initialFetchVideosMovie,
};

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

export const initialAvailableMovieFormat = [
  { id: 1, format: "2D" },
  { id: 2, format: "3D" },
  { id: 3, format: "prime" },
  { id: 4, format: "regular" },
];
export const initialIdiomsMovie = [
  { id: 1, idiom: "español" },
  { id: 2, idiom: "subtitulada" },
];
export const initialRestrictionsAge = [
  { id: 1, value: "+A", description: "apta para todos los públicos." },
  {
    id: 2,
    value: "+7",
    description: "no recomendada para menores de siete años.",
  },
  {
    id: 3,
    value: "+12",
    description: "no recomendada para menores de 12 años.",
  },
  {
    id: 4,
    value: "+16",
    description: "no recomendada para menores de 16 años.",
  },
  {
    id: 5,
    value: "+18",
    description: "no recomendada para menores de 18 años",
  },
];
export const initialStatusMovie = [
  { id: 1, status: "en cartelera" },
  { id: 2, status: "por estrenar" },
];

//
