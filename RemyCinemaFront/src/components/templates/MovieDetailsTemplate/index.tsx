import React, { useEffect, useRef, useState } from "react";
import {
  convertToDayWeekandNumber,
  convertToHrsandMins,
} from "../../../functions";
import { TbTicket } from "react-icons/tb";
import { movieRCFormatTest } from "../../../interfaces";
import Button from "../../atoms/Button";
import "./index.scss";
import { POSTER_PATH } from "../../../Api/config";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import routes from "../../../shared/navigation";

interface MovieDetailsTemplateProps {
  data: movieRCFormatTest;
}
interface FilterFunctions {
  cinema_function: string;
  city_function: string;
  date_function: string;
}
interface FunctionData {
  id: number;
  cinema_name: string;
  city_name: string;
}

const dataFake: Array<FunctionData> = [
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

const MovieDetailsTemplate = ({ data }: MovieDetailsTemplateProps) => {
  const todayDate = new Date();
  const tomorrowDate = new Date(todayDate);
  const selectFunctionRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  tomorrowDate.setDate(todayDate.getDate() + 1);
  todayDate.setHours(0, 0, 0, 0);
  tomorrowDate.setHours(0, 0, 0, 0);

  const initialFilterValue: FilterFunctions = {
    cinema_function: "",
    city_function: "",
    date_function: todayDate.toISOString(),
  };
  const [filter, setFilter] = useState<FilterFunctions>(initialFilterValue);

  useEffect(() => {
    console.log("render");
  });

  const handleChangeCinema = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    if (e.target.value.length > 0) {
      setFilter({
        ...filter,
        [e.target.name]: e.target.value,
        city_function: e.target.value.split(" ")[1],
      });
    } else {
      setFilter({
        ...filter,
        [e.target.name]: e.target.value,
      });
    }
  };
  const handleChangeCity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter({
      ...initialFilterValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeDate = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("entrando");
    setFilter({
      ...filter,
      [e.target.name]: e.target.value,
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

  const scrollToSelectFunction = () => {
    var access = selectFunctionRef?.current;
    access?.scrollIntoView({ behavior: "smooth" });
  };

  console.log(filter);

  return (
    <div className="moviedetails_template_container">
      <div className="moviedetails_main ">
        <iframe
          className="moviedetails_trailer_video"
          src={
            data?.trailerMovie &&
            `https://www.youtube.com/embed/${data?.trailerMovie}`
          }
          frameBorder="0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className="moviedetails_sticky_info">
          <div className="moviedetails_relevant_info">
            <span className="moviedetails_title">{data?.titleMovie}</span>
            <p className="moviedetails_primary_info">
              <span>{data?.genresMovie && data?.genresMovie}</span>
              <span>{convertToHrsandMins(data?.durationMovie)}</span>
            </p>
          </div>
          <Button
            type="button"
            icon={<TbTicket />}
            onClick={() => scrollToSelectFunction()}
            text="Comprar"
            className="fifth_button"
          />
        </div>
        <div className="moviedetails_layout_info section">
          <div className="moviedetails_poster_path">
            <img
              src={`${POSTER_PATH}/${data?.posterMovie}`}
              alt={data?.titleMovie}
            ></img>
          </div>

          <div className="moviedetails_about_info">
            <p className="moviedetails_sipnosis">Sinopsis.</p>
            <p className="moviedetails_overview">{data?.sinopsisMovie}</p>
            <ul>
              <li className="moviedetails_directors">
                <strong>Director(es)</strong>
                <div className="moviedetails_directors_all">
                  {data?.directorsMovie ? data?.directorsMovie : <p>-</p>}
                </div>
              </li>
              <li className="moviedetails_idioms">
                <strong>Idioma</strong>
                <div className="moviedetails_idioms_options">
                  <p>Subtitulada</p>
                  <p>Doblada</p>
                </div>
              </li>
              <li className="moviedetails_available">
                <strong>Disponible</strong>
                <div className="moviedetails_available_options">
                  <p>REGULAR</p>
                  <p>2D</p>
                  <p>PRIME</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div
          ref={selectFunctionRef}
          className="moviedetails_select_function section"
        >
          <p className="moviedetails_select_title">
            La función perfecta para ti.
          </p>
          <div className="moviedetails_selects_area">
            <div className="moviedetails_selects_container">
              <ul>
                <li>
                  <div className="select_dropdown_layout ">
                    <div className="select_title">
                      <span>Por ciudad</span>
                      <MdOutlineKeyboardArrowDown />
                    </div>
                    <div className="select_label">
                      <span>
                        {filter?.city_function
                          ? filter?.city_function
                          : "Dónde estás"}
                      </span>
                    </div>
                  </div>
                  <select
                    id="city_function"
                    name="city_function"
                    onChange={handleChangeCity}
                    value={filter?.city_function}
                  >
                    <option value="">Dónde estás</option>
                    <option value="Lima">Lima</option>
                    <option value="Trujillo">Trujillo</option>
                  </select>
                </li>
                <li>
                  <div className="select_dropdown_layout ">
                    <div className="select_title">
                      <span>Por cine</span>
                      <MdOutlineKeyboardArrowDown />
                    </div>
                    <div className="select_label">
                      <span>
                        {filter?.cinema_function
                          ? filter?.cinema_function
                          : "Elige tu cineplanet"}
                      </span>
                    </div>
                  </div>
                  <select
                    id="cinema_function"
                    name="cinema_function"
                    onChange={handleChangeCinema}
                    value={filter?.cinema_function}
                  >
                    <option value="">Elige tu cineplanet</option>
                    {filteredCinemas(dataFake).map((cinema: any) => {
                      return (
                        <option key={cinema.id} value={cinema.cinema_name}>
                          {cinema.cinema_name}
                        </option>
                      );
                    })}
                  </select>
                </li>
                <li>
                  <div className="select_dropdown_layout ">
                    <div className="select_title">
                      <span>Por fecha</span>
                      <MdOutlineKeyboardArrowDown />
                    </div>
                    <div className="select_label">
                      <span>
                        {`${
                          Date.parse(filter.date_function) >
                          Date.parse(todayDate.toISOString())
                            ? "Mañana"
                            : "Hoy"
                        } ${convertToDayWeekandNumber(
                          new Date(filter.date_function)
                        )}`}
                      </span>
                    </div>
                  </div>
                  <select
                    name="date_function"
                    onChange={handleChangeDate}
                    value={filter.date_function}
                  >
                    <option value={todayDate.toISOString()}>
                      Hoy {convertToDayWeekandNumber(todayDate)}
                    </option>
                    <option value={tomorrowDate.toISOString()}>
                      Mañana {convertToDayWeekandNumber(tomorrowDate)}
                    </option>
                  </select>
                </li>
              </ul>
            </div>
            <ul></ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsTemplate;
