import { Field, Form, Formik } from "formik";
import MoviesService from "../../../Api/movies";
import { convertISODateToValid, convertToHrsandMins } from "../../../functions";
import {
  GenreMovie,
  movieRCFormat,
  RestrictionMovie,
} from "../../../interfaces";
import Button from "../../atoms/Button";
import InputErrorMessage from "../../atoms/InputErrorMessage";
import RCInput from "../../atoms/RCInput";
import { AddMovieFormSchema } from "../AdminAddMovieForm/yupSchema";
import "./index.scss";

interface AdminUpdateMovieFormProps {
  dataMovie: movieRCFormat;
  genres: GenreMovie[];
  restrictions: RestrictionMovie[];
  updateMovies(): void;
}

interface initialUpdateMovieFormProps {
  releaseDateMovie: string;
  restrictionMovie: string;
  genresMovie: string[];
}
const AdminUpdateMovieForm = ({
  dataMovie,
  genres,
  restrictions,
  updateMovies,
}: AdminUpdateMovieFormProps) => {
  const initialValues: initialUpdateMovieFormProps = {
    releaseDateMovie: convertISODateToValid(dataMovie?.release_date_movie),
    restrictionMovie: dataMovie?.restriction_movie.tag_restriction,
    genresMovie: dataMovie?.genres_movie.map(
      (genre: GenreMovie) => genre.name_genre
    ),
  };
  const handleSubmit = (values: initialUpdateMovieFormProps) => {
    const genres_movie_API: GenreMovie[] = [];
    const restriction_movie_API = restrictions.find(
      (restriction: RestrictionMovie) =>
        restriction.tag_restriction === values.restrictionMovie
    );
    values.genresMovie.map((genre: string) => {
      const newValueGenre = genres.find(
        (item: GenreMovie) => item.name_genre === genre
      );
      if (newValueGenre) {
        genres_movie_API.push(newValueGenre);
      }
    });
    const newDataForAPI = {
      idMovie: dataMovie.id_movie,
      releaseDateMovie: values.releaseDateMovie,
      genresMovie: genres_movie_API,
      restrictionMovie: restriction_movie_API,
    };
    MoviesService.updateMovie(newDataForAPI)
      .then(() => updateMovies())
      .catch((error) => console.log(error));
  };
  return (
    <div className="adminupdateform_container">
      <div className="adminupdateform_main">
        <div className="info_input">
          <label htmlFor="title_movie">Título</label>
          <input
            id="title_movie"
            placeholder={dataMovie?.title_movie}
            type="text"
            disabled
          ></input>
        </div>
        <div className="info_input">
          <label htmlFor="sinopsis_movie">Sinopsis</label>
          <input
            id="sinopsis_movie"
            type="text"
            placeholder={dataMovie?.sinopsis_movie}
            disabled
          ></input>
        </div>
        <div className="info_input">
          <label htmlFor="duration_movie">Duración</label>
          <input
            id="duration_movie"
            type="text"
            placeholder={convertToHrsandMins(dataMovie?.duration_movie)}
            disabled
          ></input>
        </div>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={AddMovieFormSchema}
        >
          {({ errors }) => (
            <Form>
              <div className="related_primary_info">
                <RCInput
                  name="releaseDateMovie"
                  type="date"
                  label="Fecha de estreno"
                />
                <div className="selects_input">
                  <div className="select_input">
                    <p>Restricción</p>
                    <Field as="select" name="restrictionMovie">
                      <option value="">--Seleccione una restricción--</option>
                      {restrictions &&
                        restrictions?.map(
                          (ageRestriction: RestrictionMovie) => {
                            return (
                              <option
                                key={ageRestriction?.id_restriction}
                                value={ageRestriction?.tag_restriction}
                              >
                                {ageRestriction?.tag_restriction}
                              </option>
                            );
                          }
                        )}
                    </Field>
                    <InputErrorMessage
                      text={
                        errors.restrictionMovie ? errors.restrictionMovie : ""
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="checkbox_inputs_select">
                <div className="checkbox_input">
                  <p>Géneros</p>
                  <div className="checkbox_list">
                    {genres &&
                      genres?.map((genre: GenreMovie) => {
                        return (
                          <div key={genre?.id_genre} className="checkbox_item">
                            <Field
                              id={genre?.name_genre}
                              type="checkbox"
                              name="genresMovie"
                              value={genre?.name_genre}
                            />
                            <label htmlFor={genre?.name_genre}>
                              {genre?.name_genre}
                            </label>
                          </div>
                        );
                      })}
                  </div>
                  <InputErrorMessage
                    text={
                      errors?.genresMovie?.toString()
                        ? errors.genresMovie.toString()
                        : ""
                    }
                  />
                </div>
              </div>
              <Button
                text="Actualizar"
                onClick={() => console.log("hola")}
                type="submit"
                className="tertiary_button"
                styles={{
                  padding: "15px",
                  justifyContent: "center",
                  fontSize: "16px",
                }}
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AdminUpdateMovieForm;
