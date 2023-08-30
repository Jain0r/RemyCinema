import React, { useEffect, useState } from "react";
import AdminCardInfo from "../../atoms/AdminCardInfo";
import { MdMovieFilter } from "react-icons/md";
import Button from "../../atoms/Button";
import ModalLayout from "../../molecules/ModalLayout";
import AdminAddMovieProccess from "../../organisms/AdminAddMovieProccess";
import {
  DataTableTodoMovieType,
  filterTypesForTableMovies,
  infoFilterForMoviesPage,
  movieRCFormat,
} from "../../../interfaces";
import {
  convertToHrsandMins,
  dataToOptionSelect,
  getMoviesByRestriction,
  getMoviesByStatus,
  getMovieStatus,
  intersectionArrays,
  moviesStatus,
  sortMoviesByDate,
  sortMoviesByDuration,
} from "../../../functions";
import { HiPencilAlt } from "react-icons/hi";
import { TbTrash } from "react-icons/tb";
import AdminTableTodo from "../../molecules/AdminTableTodo";
import AdminUpdateMovieForm from "../../organisms/AdminUpdateMovieForm";
import {
  ColumsForMoviesTable,
  initialMovieRCFormat,
} from "../../../interfaces/initials";
import { FiSearch } from "react-icons/fi";
import AdminInput from "../../atoms/AdminInput";
import { FaSortAmountDown, FaSortAmountUp } from "react-icons/fa";
import { RiFilter3Fill } from "react-icons/ri";
import "./index.scss";
import AdminSelect from "../../atoms/AdminSelect";
import AdminCardList from "../../molecules/AdminCardList";

interface AdminMoviesTemplateProps {
  info: infoFilterForMoviesPage;
  updateMovies(): void;
}

const filterValues: filterTypesForTableMovies = {
  movies_status: "",
  movies_restriction: "",
  //agregar otro filtro si se desea
};

const AdminMoviesTemplate = ({
  info,
  updateMovies,
}: AdminMoviesTemplateProps) => {
  const [AddMovieModalForm, setAddMovieModalForm] = useState<boolean>(false);
  const [UpdateMovieModalForm, setUpdateMovieModalForm] =
    useState<boolean>(false);
  const [movieQuery, setMovieQuery] = useState<string>("");
  const [UpdateMovieInfo, setUpdateMovieInfo] =
    useState<movieRCFormat>(initialMovieRCFormat);
  const [sortedBy, setSortedBy] = useState<string>("");
  const [allMovies, setAllMovies] = useState<movieRCFormat[]>(info.movies);
  const [filters, setFilters] =
    useState<filterTypesForTableMovies>(filterValues);
  const [orderTypeMaxToMin, setOrderTypeMaxToMin] = useState<boolean>(true);

  useEffect(() => {
    setAllMovies(info.movies);
  }, [info.movies]);

  const formatDataSource = (
    movies: movieRCFormat[]
  ): DataTableTodoMovieType[] => {
    return movies?.map(
      (movie: movieRCFormat, index): DataTableTodoMovieType => ({
        index_movie: index + 1,
        title_movie: movie?.title_movie,
        release_date_movie: new Date(movie?.release_date_movie)
          .toLocaleString()
          .split(",")[0],
        restriction_movie: movie.restriction_movie?.tag_restriction,
        duration_movie: convertToHrsandMins(movie?.duration_movie),
        status_movie:
          getMovieStatus(movie) === "active" ? (
            <div className="status active">
              <span className="pulse"></span>
              <span>Activo</span>
            </div>
          ) : (
            <div className="status inactive">
              <span className="pulse"></span>
              <span>Inactivo</span>
            </div>
          ),

        actions_movie: (
          <div className="item_actions_container">
            <span
              className="update_action"
              onClick={() => handleOpenUpdate(movie)}
            >
              <HiPencilAlt />
            </span>
            <span
              className="delete_action"
              onClick={() => console.log("eliminar", { id: movie.id_movie })}
            >
              <TbTrash />
            </span>
          </div>
        ),
      })
    );
  };

  const allMoviesSorted = (): movieRCFormat[] => {
    let currentSortedBy = allMovies;
    switch (sortedBy) {
      case "date":
        currentSortedBy = sortMoviesByDate(allMovies, {
          maxToMin: orderTypeMaxToMin,
        });
        break;
      case "duration":
        currentSortedBy = sortMoviesByDuration(allMovies, {
          maxToMin: orderTypeMaxToMin,
        });
        break;
      default:
        break;
    }
    return currentSortedBy;
  };

  const filteredMovies = (movies: movieRCFormat[]): movieRCFormat[] => {
    let moviesFiltered = movies;
    let resultsByFilter: any = []; // se crea un array para almacenar los arrays que seran los resultados de cada filtro por separado
    for (const filterKey in filters) {
      // se recorre el objeto de filtros
      const filterValue = filters[filterKey]; // se obtiene el valor de cada filtro presente en el objeto
      if (filterValue) {
        // si se tiene un valor es decir el valor del filtro es diferente de ""
        switch (
          filterKey // se evalua para saber que filtro se va a aplicar y se procede a almacenar el array resultante del filtro
        ) {
          case "movies_restriction":
            resultsByFilter.push(
              getMoviesByRestriction(movies, filters.movies_restriction)
            );
            break;
          case "movies_status":
            resultsByFilter.push(
              getMoviesByStatus(movies, filters.movies_status)
            );
            break;
          default:
            break;
        }
      }
    }
    if (resultsByFilter.length > 0) {
      //ahora que se tiene el array con los arrays resultantes de cada filtro por separado , lo que se hace es interseccionarlo para obtener los valores que cumplen todos los filtros a la vez
      // se verifica si es q se tiene aplicado
      moviesFiltered = intersectionArrays(resultsByFilter);
    }
    return moviesFiltered;
  };

  const finalDataMovies = (): movieRCFormat[] => {
    if (movieQuery) {
      const moviesByQuery = allMoviesSorted().filter((movie: movieRCFormat) =>
        movie.title_movie
          ?.toLocaleLowerCase()
          .includes(movieQuery.toLocaleLowerCase())
      );
      return filteredMovies(moviesByQuery);
    } else {
      return filteredMovies(allMoviesSorted());
    }
  };
  const handleFiltersOptions = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleOpenUpdate = (data: movieRCFormat) => {
    setUpdateMovieInfo(data);
    setUpdateMovieModalForm(true);
  };
  const handleQueryMovie = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMovieQuery(e.target.value);
  };

  const handleSortOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortedBy(e.target.value);
  };

  // console.log("filters", filters);
  return (
    <div className="adminmovies_template_container">
      <div className="adminmovies_template_main">
        <div className="adminmovies_primary_info admin_section">
          <p className="admin_section_title">Información básica</p>
          <AdminCardList
            cardsInfo={[
              {
                icon: <MdMovieFilter />,
                color: "#baffc9",
                cant: info.movies?.length,
                title: "Péliculas totales",
              },
              {
                icon: <MdMovieFilter />,
                color: "#ffdfba",
                cant: moviesStatus(info.movies).moviesOnShow?.length,
                title: "Péliculas en cartelera",
              },
              {
                icon: <MdMovieFilter />,
                color: "#ffb3ba",
                cant: moviesStatus(info.movies).moviesOffShow?.length,
                title: "Péliculas por estrenar",
              },
            ]}
          />
        </div>
        <div className="adminmovies_list_movies_container admin_section">
          <div className="adminmovies_table_info">
            <div className="admin_top_container">
              <p className="admin_section_title">Lista de Películas</p>
              <Button
                type="button"
                onClick={() => setAddMovieModalForm(true)}
                text="+ Agregar película"
                className="tertiary_button"
                styles={{ padding: "15px 20px", borderRadius: "5px" }}
              ></Button>
            </div>
          </div>
          <div className="adminmovies_search_and_sort">
            <AdminInput
              type="text"
              validate={false}
              icon={<FiSearch />}
              name="movies_query"
              value={movieQuery}
              placeholder="Buscar película"
              onChange={(e) => handleQueryMovie(e)}
            />
            <div className="adminmovies_filters_container">
              <div className="adminmovies_filters_icon">
                <RiFilter3Fill />
              </div>
              <div className="adminmovies_filters_selects">
                <AdminSelect
                  value={filters.movies_restriction}
                  options={dataToOptionSelect(info.restrictions, {
                    idField: "id_restriction",
                    valueField: "tag_restriction",
                    nameValueField: "tag_restriction",
                  })}
                  onChange={(e) => handleFiltersOptions(e)}
                  name="movies_restriction"
                  defaultValue="Restricción"
                />
                <AdminSelect
                  value={filters.movies_status}
                  options={[
                    { idValue: 1, value: "active", nameValue: "Activo" },
                    { idValue: 2, value: "inactive", nameValue: "Inactivo" },
                  ]}
                  onChange={(e) => handleFiltersOptions(e)}
                  name="movies_status"
                  defaultValue="Estado"
                />
              </div>
            </div>
          </div>
          <div className="adminmovie_sort_container">
            <div
              onClick={() => setOrderTypeMaxToMin(!orderTypeMaxToMin)}
              className="adminmovie_sort_order"
            >
              {orderTypeMaxToMin ? <FaSortAmountUp /> : <FaSortAmountDown />}
            </div>
            <AdminSelect
              value={sortedBy}
              options={[
                { idValue: 1, value: "date", nameValue: "Fecha de Estreno" },
                { idValue: 2, value: "duration", nameValue: "Duración" },
              ]}
              onChange={(e) => handleSortOption(e)}
              name="movies_sort"
              defaultValue="Ordenar por"
            />
          </div>

          <AdminTableTodo
            itemsPerPage={5}
            headers={ColumsForMoviesTable}
            dataSource={formatDataSource(finalDataMovies())}
          />
        </div>
      </div>
      <ModalLayout
        title="Agregar Nueva Película "
        maxWidth={450}
        onClose={() => setAddMovieModalForm(false)}
        isOpen={AddMovieModalForm}
      >
        {
          <AdminAddMovieProccess
            onClose={() => setAddMovieModalForm(false)}
            updateMovies={() => updateMovies()}
            data={info}
          />
        }
      </ModalLayout>
      <ModalLayout
        title="Actualizar Película"
        maxWidth={450}
        onClose={() => setUpdateMovieModalForm(false)}
        isOpen={UpdateMovieModalForm}
      >
        <AdminUpdateMovieForm
          formats={info.formats}
          idioms={info.idioms}
          onClose={() => setUpdateMovieModalForm(false)}
          genres={info.genres}
          updateMovies={() => updateMovies()}
          restrictions={info.restrictions}
          dataMovie={UpdateMovieInfo}
        />
      </ModalLayout>
    </div>
  );
};

export default AdminMoviesTemplate;
