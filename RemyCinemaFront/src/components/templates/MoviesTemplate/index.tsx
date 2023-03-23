import React, { useState } from "react";
import {
  convertToDayWeekandNumber,
  todayDate,
  tomorrowDate,
} from "../../../functions";
import { FunctionData } from "../../../interfaces";
import { dataCinemasFake } from "../../../interfaces/initials";
import DropDownFilter from "../../molecules/DropDownFilter";
import "./index.scss";
interface FilterFunctions {
  cinema_function: string;
  city_function: string;
  date_function: string;
}

const MoviesTemplate = () => {
  const initialFilterValue: FilterFunctions = {
    cinema_function: "",
    city_function: "",
    date_function: `Hoy ${convertToDayWeekandNumber(todayDate)}`,
  };
  const [filter, setFilter] = useState<FilterFunctions>(initialFilterValue);

  const handleChangeCinema = (cinema: string) => {
    if (cinema.length > 0) {
      setFilter({
        ...filter,
        cinema_function: cinema,
        city_function: cinema.split(" ")[1],
      });
    } else {
      setFilter({
        ...filter,
        cinema_function: cinema,
      });
    }
  };
  const handleChangeCity = (city: string) => {
    setFilter({
      ...initialFilterValue,
      city_function: city,
    });
  };

  const handleChangeDate = (date: string) => {
    setFilter({
      ...filter,
      date_function: date,
    });
  };

  const filteredCinemas = (data: Array<FunctionData>) => {
    if (filter.city_function) {
      const cinemas = data.filter(
        (item: FunctionData) => item.city_name === filter.city_function
      );
      return cinemas;
    } else {
      return data;
    }
  };
  return (
    <div className="moviestemplate_container">
      <div className="moviestemplate_main section">
        <p className="moviestemplate_title">Peliculas</p>
        <div className="moviestemplate_selects_container">
          <DropDownFilter
            onChange={(city) => handleChangeCity(city)}
            name="city_function"
            defaultShown="Dónde estas"
            value={filter?.city_function ? filter?.city_function : ""}
            filterLabel="Por Ciudad"
          >
            <>
              <option value="">--Dónde Estas--</option>
              <option value="Lima">Lima</option>
              <option value="Trujillo">Trujillo</option>
            </>
          </DropDownFilter>
          <DropDownFilter
            onChange={(cinema) => handleChangeCinema(cinema)}
            name="cinema_function"
            defaultShown="Elige tu cineplanet"
            value={filter?.cinema_function ? filter?.cinema_function : ""}
            filterLabel="Por Cine"
          >
            <>
              <option value="">--Elige Tu Cineplanet--</option>
              {filteredCinemas(dataCinemasFake).map((cinema: any) => {
                return (
                  <option key={cinema.id} value={cinema.cinema_name}>
                    {cinema.cinema_name}
                  </option>
                );
              })}
            </>
          </DropDownFilter>
          <DropDownFilter
            value={filter?.date_function ? filter?.date_function : ""}
            onChange={(date) => handleChangeDate(date)}
            name="date_function"
            defaultShown={`Hoy ${convertToDayWeekandNumber(todayDate)}`}
            filterLabel="Por Fecha"
          >
            <>
              <option value={`Hoy  ${convertToDayWeekandNumber(todayDate)}`}>
                Hoy {convertToDayWeekandNumber(todayDate)}
              </option>
              <option
                value={`Mañana ${convertToDayWeekandNumber(tomorrowDate)}`}
              >
                Mañana {convertToDayWeekandNumber(tomorrowDate)}
              </option>
            </>
          </DropDownFilter>
        </div>
        <div className="">

        </div>

      </div>
    </div>
  );
};

export default MoviesTemplate;
