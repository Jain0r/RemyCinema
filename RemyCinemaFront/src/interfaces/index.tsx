//AddMovieFormProps

export interface initialAddMovieFormProps {
  release_date_movie: string;
  restrictions_movie: string;
  idioms_movie: string[];
  available_movie: string[];
  status_movie: string;
}
export interface initialAddMovieFormAPIProps {
  release_date_movie: string;
  restrictions_movie: restrictionMovie;
  idioms_movie: idiomMovie[];
  available_movie: availableMovie[];
  status_movie: statusMovie;
}

//MovieAllInfoTransform

export interface movieRCFormat {
  //esta info se obtendra de la API TheMovieDB v3
  id_movie: number;
  title_movie: string;
  duration_movie: number;
  sinopsis_movie: string;
  trailers_movie: string;
  poster_movie: string;
  genres_movie: Genre[];
  directors_movie: string;
  //esta info pondremos nosotros
  release_date_movie: string;
  restrictions_movie: restrictionMovie;
  idioms_movie?: idiomMovie[];
  available_movie?: availableMovie[];
  status_movie?: statusMovie;
}

//MovieAllinfo

export interface restrictionMovie {
  id: number;
  value: string;
  description: string;
}
export interface availableMovie {
  id: number;
  format: string;
}
export interface idiomMovie {
  id: number;
  idiom: string;
}
export interface statusMovie {
  id: number;
  status: string;
}

export interface AllMovieInfo
  extends FetchMovieCreditsResponse,
    FetchMovieDetailsResponse,
    FetchVideosMovie {}
//MovieDetails
export interface FetchMovieDetailsResponse {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection?: any;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Productioncompany[];
  production_countries: Productioncountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Spokenlanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieByQuery {
  adult: boolean;
  backdrop_path?: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
export interface Spokenlanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface Productioncountry {
  iso_3166_1: string;
  name: string;
}

export interface Productioncompany {
  id: number;
  logo_path?: any;
  name: string;
  origin_country: string;
}

export interface Genre {
  id: number;
  name: string;
}

//MovieCredits

export interface FetchMovieCreditsResponse {
  id: number;
  cast: Cast[];
  crew: Crew[];
}

export interface Crew {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path?: string;
  credit_id: string;
  department: string;
  job: string;
}

export interface Cast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path?: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

//MovieTrailer
export interface FetchVideosMovie {
  id: number;
  results: Result[];
}

export interface Result {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string; //con esta key se concatena con el YOUTUBE_PATH y te saca el trailer
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

//Seats

export interface Seat {
  id_seat: number;
  id_sala: number;
  row_asiento: string;
  column_asiento: number;
  status_asiento?: string;
}

export interface Ticket {
  id_ticket: number;
  type_ticket: string;
  price_ticket: number;
  cant_ticket?: number;
}

export interface Food {
  id_food: number;
  name_food: string;
  stock_food: number;
  description_food: string;
  price_food: number;
  type_food: string;
  image_food?: string;
  cant_food?: number;
}

export interface Combo {
  id_combo: number;
  name_combo: string;
  price_combo: number;
  description_combo: string;
  image_combo?: string;
  cant_combo?: number;
}

export interface OrderInfo {
  selectedSeats: Seat[];
  selectedTickets: Ticket[];
  selectedFoods: Food[];
  selectedCombos: Combo[];
}
