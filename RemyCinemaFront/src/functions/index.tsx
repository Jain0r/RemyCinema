import MoviesServiceTMD from "../Api/moviesTMD";
import { Combo, Food, movieRCFormat, Ticket } from "../interfaces";

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
      ? allMovieData.results.slice(-1)[0].key
      : "", //devolviendo string del array original
    directorsMovie: directors?.length > 0 ? directors.join(", ") : "",
    posterMovie: allMovieData?.poster_path,
    genresMovie: allMovieData?.genres[0].name,
  };
};


