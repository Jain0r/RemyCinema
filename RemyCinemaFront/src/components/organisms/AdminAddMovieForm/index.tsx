import { Formik, Form, Field } from "formik";
import RCInput from "../../atoms/RCInput";
import {
  fetchAllMovieInfo,
  fetchTransformAllMovieInfo,
} from "../../../functions";
import "./index.scss";
import { AddMovieFormSchema } from "./yupSchema";
import {
  GenreMovie,
  MovieByQuery,
  RestrictionMovie,
} from "../../../interfaces";
import InputErrorMessage from "../../atoms/InputErrorMessage";
import Button from "../../atoms/Button";
import MoviesService from "../../../Api/movies";

interface AdminAddMovieFormProps {
  movieData: MovieByQuery;
  genres: GenreMovie[];
  restrictions: RestrictionMovie[];
}

interface initialAddMovieFormProps {
  releaseDateMovie: string;
  restrictionMovie: string;
  genresMovie: string[];
}

const AdminAddMovieForm = ({
  movieData,
  genres,
  restrictions,
}: AdminAddMovieFormProps) => {
  const initialValues: initialAddMovieFormProps = {
    releaseDateMovie: "",
    restrictionMovie: "",
    genresMovie: [],
  };

  const handleSubmit = async (values: initialAddMovieFormProps) => {
    const data = await fetchAllMovieInfo(movieData?.id);
    const tranformDataMovie = fetchTransformAllMovieInfo(data);
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
    const newDataFormAPI = {
      ...tranformDataMovie,
      releaseDateMovie: values.releaseDateMovie,
      genresMovie: genres_movie_API,
      restrictionMovie: restriction_movie_API,
    };
    console.log("dataFinal", newDataFormAPI);
    MoviesService.postMovie(newDataFormAPI)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  return (
    <div className="add_movie_form_container">
      <p className="title_proccess">2. Añadir datos pertinentes</p>
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
                      restrictions?.map((ageRestriction: RestrictionMovie) => {
                        return (
                          <option
                            key={ageRestriction?.id_restriction}
                            value={ageRestriction?.tag_restriction}
                          >
                            {ageRestriction?.tag_restriction}
                          </option>
                        );
                      })}
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
              text="Agregar"
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
  );
};

export default AdminAddMovieForm;
