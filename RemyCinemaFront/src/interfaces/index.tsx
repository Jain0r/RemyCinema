//AddMovieFormProps

export interface initialAddMovieFormAPIProps {
  releaseDateMovie: string;
  restrictionMovie: RestrictionMovie;
  idiomsMovie: IdiomMovie[];
  formatsMovie: FormatMovie[];
  statusMovie: string;
}

export interface movieRCFormat {
  //esta info se obtendra de la API TheMovieDB v3
  id_movie?: number;
  title_movie: string;
  duration_movie: number;
  sinopsis_movie: string;
  trailer_movie: string;
  poster_movie: string;
  directors_movie: string;
  //esta info pondremos nosotros
  release_date_movie: string;
  restriction_movie: RestrictionMovie;
  genres_movie: GenreMovie[];
  idioms_available: IdiomMovie[];
  formats_available: FormatMovie[];
}

//THEMOVIEDB RESPONSES

//MoviebyQuery

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

//MovieDetails

//MovieCredits

//MovieTrailer

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

//functionselect

export interface FunctionData {
  id: number;
  cinema_name: string;
  city_name: string;
}

export interface GenreMovie {
  id_genre: number;
  name_genre: string;
}

export interface FormatMovie {
  id_format: number;
  name_format: string;
}

export interface IdiomMovie {
  id_idiom: number;
  name_idiom: string;
}

export interface RestrictionMovie {
  id_restriction: number;
  tag_restriction: string;
  descrp_restriction: string;
}

export interface StatusMovie {
  id_status: number;
  name_status: string;
}

export interface ResponseFormat {
  status: string;
  message: string;
  result?: any;
}

//tabletodo

export interface TableTodoColumnType {
  title: string;
  dataIndex: string;
  key: string;
}

export interface filterTypesForTableMovies {
  [key: string]: string; //aca indicamos que el objeto puede tener cualquier propiedad cuyo valor sera un string
  movies_status: string;
  movies_restriction: string;
}

export interface DataTableTodoMovieType {
  index_movie: number;
  actions_movie: JSX.Element;
  duration_movie: string;
  release_date_movie: string;
  title_movie: string;
  status_movie: JSX.Element;
  restriction_movie: string;
}

export interface infoFilterForMoviesPage {
  movies: movieRCFormat[];
  genres: GenreMovie[];
  restrictions: RestrictionMovie[];
}
