import { SchedulerDateTime } from "@devexpress/dx-react-scheduler";
import { toast } from "react-toastify";
import MoviesServiceTMD from "../Api/moviesTMD";
import { OptionSelect } from "../components/atoms/AdminSelect";
import { PerformanceProps } from "../components/molecules/CardSchedulePerformance";
import {
  CinemaRC,
  Combo,
  Food,
  FormatMovie,
  HallRC,
  movieRCFormat,
  PerformanceMovie,
  Ticket,
} from "../interfaces";
import { initialMovieRCFormat } from "../interfaces/initials";
import moment from "moment";

export const convertToHrsandMins = (duration: number) => {
  const hrs = Math.trunc(duration / 60);
  const mins = duration % 60;
  return `${hrs}hrs ${mins}mins`;
};

export const convertToDayWeekandNumber = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dateIntFormat = date.toLocaleDateString("es-ES", options);
  const dayWeek = dateIntFormat.split(",")[0];
  const dayNumber = dateIntFormat.split(" ")[1];
  return `${dayWeek} ${dayNumber}`;
};

export const todayDate = new Date();
export const tomorrowDate = new Date(todayDate);
tomorrowDate.setDate(todayDate.getDate() + 1);
todayDate.setHours(0, 0, 0, 0);
tomorrowDate.setHours(0, 0, 0, 0);

export const getTomorrowDate = (date: Date): Date => {
  const tomorrowDate = new Date(date);
  tomorrowDate.setDate(date.getDate() + 1);
  todayDate.setHours(0, 0, 0, 0);
  tomorrowDate.setHours(0, 0, 0, 0);
  return tomorrowDate;
};

export const getYesterdayDate = (date: Date): Date => {
  const yesterdayDate = new Date(date);
  yesterdayDate.setDate(date.getDate() - 1);
  yesterdayDate.setHours(0, 0, 0, 0);
  yesterdayDate.setHours(0, 0, 0, 0);
  return yesterdayDate;
};

export const convertISODateToValid = (date: string) => {
  const validDate = new Date(date);
  const year = validDate.getFullYear();
  const month = validDate.getMonth() + 1;
  const day = validDate.getDate();
  const formattedDate = `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}`;
  return formattedDate;
};

//ShopFunctions

export const totalPriceTickets = (selectedTickets: Ticket[]) => {
  const reducer = (accumulator: any, currentValue: Ticket) =>
    currentValue?.cant_ticket
      ? accumulator + currentValue?.cant_ticket * currentValue?.price_ticket
      : 0;
  const priceTotalTickets = selectedTickets?.reduce(reducer, 0);
  return priceTotalTickets;
};

export const totalPriceFoods = (selectedFoods: Food[]) => {
  const reducer = (accumulator: any, currentValue: Food) =>
    currentValue?.cant_food
      ? accumulator + currentValue?.cant_food * currentValue?.price_food
      : 0;
  const priceTotalFoods = selectedFoods?.reduce(reducer, 0);
  return priceTotalFoods;
};

export const totalPriceCombos = (selectedCombos: Combo[]) => {
  const reducer = (accumulator: any, currentValue: Combo) =>
    currentValue?.cant_combo
      ? accumulator + currentValue?.cant_combo * currentValue?.price_combo
      : 0;
  const priceTotalCombos = selectedCombos?.reduce(reducer, 0);
  return priceTotalCombos;
};

export const totalCantFoods = (selectedFoods: Food[]) => {
  const reducer = (accumulator: any, currentValue: Food) =>
    currentValue?.cant_food ? accumulator + currentValue?.cant_food : 0;
  const cantTotalFoods = selectedFoods?.reduce(reducer, 0);
  return cantTotalFoods;
};

export const totalCantCombos = (selectedCombos: Combo[]) => {
  const reducer = (accumulator: any, currentValue: Combo) =>
    currentValue?.cant_combo ? accumulator + currentValue?.cant_combo : 0;
  const cantTotalCombos = selectedCombos?.reduce(reducer, 0);
  return cantTotalCombos;
};

//APIS
export const fetchAllMovieInfo = async (id: number) => {
  let result = {};
  await Promise.all([
    MoviesServiceTMD.getMovieDetails(id),
    MoviesServiceTMD.getMovieCredits(id),
    MoviesServiceTMD.getMovieTrailer(id),
  ])
    .then((values) => (result = { ...values[0], ...values[1], ...values[2] }))
    .catch((reason) => console.log(reason));
  return result;
};
export const fetchTransformAllMovieInfo = (allMovieData: any) => {
  let directors: string[] = [];
  allMovieData.crew
    ?.filter((crewMember: any) => crewMember.job === "Director")
    .map((director: any) => directors.push(director.name));
  return {
    titleMovie: allMovieData?.title,
    durationMovie: allMovieData?.runtime,
    sinopsisMovie: allMovieData?.overview,
    trailerMovie: allMovieData?.results
      ? allMovieData.results.slice(-1)[0]
        ? allMovieData.results.slice(-1)[0].key
        : ""
      : "", //devolviendo string del array original
    directorsMovie: directors?.length > 0 ? directors.join(", ") : "",
    posterMovie: allMovieData?.poster_path,
  };
};

export const getMovieStatus = (movie: movieRCFormat) => {
  if (movie.idioms_movie?.length > 0 && movie.formats_movie?.length > 0) {
    return "active";
  } else {
    return "inactive";
  }
};

export const dataToOptionSelect = (
  data: any[],
  config: { idField: string; valueField: string; nameValueField: string }
): OptionSelect[] => {
  return data.map((item) => ({
    idValue: item[config.idField],
    value: item[config.valueField],
    nameValue: item[config.nameValueField],
  }));
};

export const onShowMovies = (movies: movieRCFormat[]) => {
  const moviesOnShow = movies.filter(
    (movie: movieRCFormat) =>
      todayDate.getTime() >= new Date(movie.release_date_movie).getTime()
  );
  return moviesOnShow;
};

export const offShowMovies = (movies: movieRCFormat[]) => {
  const moviesOffShow = movies.filter(
    (movie: movieRCFormat) =>
      todayDate.getTime() < new Date(movie.release_date_movie).getTime()
  );
  return moviesOffShow;
};

export const intersectionArrays = (array: any[]) => {
  const intersection = array.reduce(
    (accumulator: any[], currentArray: any[]) => {
      return accumulator.filter((element) =>
        currentArray.some(
          (x: any) => JSON.stringify(x) === JSON.stringify(element)
        )
      );
    }
  );
  return intersection;
};

export const getHallsByCinema = (
  halls: HallRC[],
  cinemas: CinemaRC[],
  cinemaValue: string
): HallRC[] => {
  const hallsByCinema = halls.filter(
    (hall: HallRC) =>
      hall.cinema_info.id_cinema ===
      cinemas.find((cinema: CinemaRC) => cinema.name_cinema === cinemaValue)
        ?.id_cinema
  );
  return hallsByCinema;
};

export const getHallsByFormat = (
  halls: HallRC[],
  formatValue: string
): HallRC[] => {
  const hallsByFormat = halls?.filter(
    (hall: HallRC) =>
      hall.hall_formats?.some(
        (format: FormatMovie) => format?.name_format === formatValue
      ) === true
  );
  return hallsByFormat;
};

export const getMoviesByRestriction = (
  movies: movieRCFormat[],
  restrictionValue: string
): movieRCFormat[] => {
  const moviesByRestriction = movies?.filter(
    (movie: movieRCFormat) =>
      movie.restriction_movie?.tag_restriction === restrictionValue
  );
  return moviesByRestriction;
};

export const getMoviesByStatus = (
  movies: movieRCFormat[],
  statusValue: string
) => {
  const moviesByStatus = movies?.filter(
    (movie: movieRCFormat) => getMovieStatus(movie) === statusValue
  );
  return moviesByStatus;
};

export const sortMoviesByDate = (
  movies: movieRCFormat[],
  order: { maxToMin: boolean }
): movieRCFormat[] => {
  const sortedMoviesByDate = movies.sort((a, b) => {
    const dateA = new Date(a.release_date_movie);
    const dateB = new Date(b.release_date_movie);
    return order.maxToMin
      ? dateB.getTime() - dateA.getTime()
      : dateA.getTime() - dateB.getTime();
  });
  return sortedMoviesByDate;
};
export const sortMoviesByDuration = (
  movies: movieRCFormat[],
  order: { maxToMin: boolean }
): movieRCFormat[] => {
  const sortedMoviesByDuration = movies.sort((a, b) => {
    const durationA = a.duration_movie;
    const durationB = b.duration_movie;
    return order.maxToMin ? durationB - durationA : durationA - durationB;
  });
  return sortedMoviesByDuration;
};

export const getCinemaById = (
  cinemas: CinemaRC[],
  idCinema: number
): CinemaRC => {
  const cinema = cinemas.find(
    (cinema: CinemaRC) => cinema.id_cinema === idCinema
  );
  if (cinema) {
    return cinema;
  } else {
    return {
      id_cinema: 0,
      department_cinema: "",
      district_cinema: "",
      province_cinema: "",
      street_cinema: "",
      name_cinema: "",
    };
  }
};

export const getPerformancesByHall = (
  performances: PerformanceMovie[],
  id: number
): PerformanceProps[] => {
  const performancesBy = performances.filter(
    (performance: PerformanceMovie) => performance.hall_info.id_hall === id
  );
  const performancesData = performancesBy.map(
    (performance: PerformanceMovie) => ({
      idPerformance: performance.id_performance,
      startDate: performance.schedule_start_performance,
      endDate: performance.schedule_end_performance,
      titleMovie: performance.movie_info.title_movie,
      formatPerformance: performance.format_info.name_format,
      idiomPerformance: performance.idiom_info.name_idiom,
    })
  );
  return performancesData;
};

export const getMovieById = (
  movies: movieRCFormat[],
  id: number
): movieRCFormat => {
  const movie = movies.find((movie: movieRCFormat) => movie.id_movie === id);
  if (movie) {
    return movie;
  } else {
    return initialMovieRCFormat;
  }
};

export const siguienteMultiploDe5 = (numero: number) => {
  const multiploDe5 = Math.ceil(numero / 5);
  return multiploDe5 * 5;
};

export const trailersDurationMinutes = 10;

//DATES FUNCTIONS

export const dateToAMorPM = (date: SchedulerDateTime | undefined) => {
  if (date !== undefined) {
    const newDate = new Date(date);
    const dateTOLT = moment(newDate).format("LT");
    return dateTOLT;
  } else {
    return "--:--";
  }
};

export const dateToBDFormat = (date: Date) => {
  const dateUTC4 = moment(date).utcOffset("-04:00").toDate();
  const dateTOBD = moment(dateUTC4).format("YYYY-MM-DD HH:mm:ss");
  return dateTOBD;
};
