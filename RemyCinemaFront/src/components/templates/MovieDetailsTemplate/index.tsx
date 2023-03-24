import React, { useRef, useState } from "react";
import {
  convertToDayWeekandNumber,
  convertToHrsandMins,
  todayDate,
  tomorrowDate,
} from "../../../functions";
import { TbTicket } from "react-icons/tb";
import {
  FormatMovie,
  FunctionData,
  IdiomMovie,
  movieRCFormat,
} from "../../../interfaces";
import Button from "../../atoms/Button";
import "./index.scss";
import { POSTER_PATH } from "../../../Api/config";
import DropDownFilter from "../../molecules/DropDownFilter";
import { dataCinemasFake } from "../../../interfaces/initials";

interface MovieDetailsTemplateProps {
  data: movieRCFormat;
}
interface FilterFunctions {
  cinema_function: string;
  city_function: string;
  date_function: string;
}

const MovieDetailsTemplate = ({ data }: MovieDetailsTemplateProps) => {
  const selectFunctionRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const initialFilterValue: FilterFunctions = {
    cinema_function: "",
    city_function: "",
    date_function: `Hoy ${convertToDayWeekandNumber(todayDate)}`,
  };
  const [filter, setFilter] = useState<FilterFunctions>(initialFilterValue);

  console.log({ data });

  const handleChangeCinema = (cinema: string) => {
    console.log(cinema);
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
    console.log("entrando");
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

  console.log(filter);

  return (
    <div className="moviedetails_template_container">
      <div className="moviedetails_main ">
        <iframe
          className="moviedetails_trailer_video"
          src={
            data?.trailer_movie &&
            `https://www.youtube.com/embed/${data?.trailer_movie}`
          }
          frameBorder="0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className="moviedetails_sticky_info">
          <div className="moviedetails_relevant_info">
            <span className="moviedetails_title">{data?.title_movie}</span>
            <p className="moviedetails_primary_info">
              <span>
                {data?.genres_movie[0].name_genre &&
                  data?.genres_movie[0].name_genre}
              </span>
              <span>{convertToHrsandMins(data?.duration_movie)}</span>
              <span>
                {data?.restriction_movie &&
                  data.restriction_movie?.tag_restriction}
              </span>
            </p>
          </div>
          <Button
            type="button"
            icon={<TbTicket />}
            onClick={() => console.log("comprar")}
            text="Comprar"
            className="fifth_button"
          />
        </div>
        <div className="moviedetails_layout_info section">
          <div className="moviedetails_poster_path">
            <img
              src={`${POSTER_PATH}/${data?.poster_movie}`}
              alt={data?.title_movie}
            ></img>
          </div>

          <div className="moviedetails_about_info">
            <p className="moviedetails_sipnosis">Sinopsis.</p>
            <p className="moviedetails_overview">{data?.sinopsis_movie}</p>
            <ul>
              <li className="moviedetails_directors">
                <strong>Director(es)</strong>
                <div className="moviedetails_directors_all">
                  {data?.directors_movie ? (
                    <p>{data?.directors_movie}</p>
                  ) : (
                    <p>-</p>
                  )}
                </div>
              </li>
              <li className="moviedetails_idioms">
                <strong>Idioma</strong>
                <div className="moviedetails_idioms_options">
                  {data.idioms_available?.length > 0 ? (
                    data.idioms_available?.map((idiom: IdiomMovie) => {
                      return <p key={idiom.id_idiom}>{idiom.name_idiom}</p>;
                    })
                  ) : (
                    <p>-</p>
                  )}
                </div>
              </li>
              <li className="moviedetails_available">
                <strong>Disponible</strong>
                <div className="moviedetails_available_options">
                  {data.formats_available?.length > 0 ? (
                    data.formats_available?.map((format: FormatMovie) => {
                      return <p key={format.id_format}>{format.name_format}</p>;
                    })
                  ) : (
                    <p>-</p>
                  )}
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
                  <option
                    value={`Hoy  ${convertToDayWeekandNumber(todayDate)}`}
                  >
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
            <ul></ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsTemplate;
