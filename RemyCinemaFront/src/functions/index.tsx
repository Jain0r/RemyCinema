import MoviesService from "../Api/movies";
import {
  AllMovieInfo,
  Combo,
  Food,
  Ticket,
  transformMovieAllInfo,
} from "../interfaces";
import { initialAllMovieData } from "../interfaces/initials";

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
export const fetchAllMovieInfo = async (id: number): Promise<AllMovieInfo> => {
  let result = initialAllMovieData;
  await Promise.all([
    MoviesService.getMovieDetails(id),
    MoviesService.getMovieCredits(id),
    MoviesService.getMovieTrailer(id),
  ])
    .then((values) => (result = { ...values[0], ...values[1], ...values[2] }))
    .catch((reason) => console.log(reason));
  return result;
};
export const fetchTransformAllMovieInfo = (
  allMovieData: AllMovieInfo
): transformMovieAllInfo => {
  let directors: string[] = [];
  allMovieData.crew
    .filter((crewMember) => crewMember.job === "Director")
    .map((director) => directors.push(director.name));

  return {
    id_movie: allMovieData.id,
    title_movie: allMovieData.title,
    duration_movie: allMovieData.runtime,
    sinopsis_movie: allMovieData.overview,
    restrictions_movie: "A",
    trailers_movie: allMovieData.results.slice(-1)[0].key, //devolviendo string del array original
    directors_movie: directors.join(", "),
    poster_movie: allMovieData.poster_path,
    genres_movie: allMovieData.genres,
    release_date_movie: allMovieData.release_date,
  };
};

// export default function createCointainer() {
//   const portalId = "notifyContainer";
//   let element = document.getElementById(portalId);
//   if (element) {
//     return element;
//   }
//   element = document.createElement("div");
//   element.setAttribute("id", portalId);
//   element.className = "notifies_container";
//   document.body.appendChild(element);
//   return element;
// }
