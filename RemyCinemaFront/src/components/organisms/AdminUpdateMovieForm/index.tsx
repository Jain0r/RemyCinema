import { Field, Form, Formik } from "formik";
import { toast } from "react-toastify";
import MoviesService from "../../../Api/movies";
import { convertISODateToValid } from "../../../functions";
import {
  FormatMovie,
  GenreMovie,
  IdiomMovie,
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
  formats: FormatMovie[];
  idioms: IdiomMovie[];
  onClose(): void;
  restrictions: RestrictionMovie[];
  updateMovies(): void;
}

interface initialUpdateMovieFormProps {
  releaseDateMovie: string;
  restrictionMovie: string;
  genresMovie: string[];
  idiomsMovie: string[];
  formatsMovie: string[];
}
const AdminUpdateMovieForm = ({
  dataMovie,
  formats,
  idioms,
  genres,
  restrictions,
  updateMovies,
  onClose,
}: AdminUpdateMovieFormProps) => {
  const initialValues: initialUpdateMovieFormProps = {
    releaseDateMovie: convertISODateToValid(dataMovie?.release_date_movie),
    restrictionMovie: dataMovie.restriction_movie?.tag_restriction,
    idiomsMovie: dataMovie.idioms_movie?.map(
      (idiom: IdiomMovie) => idiom.name_idiom
    ),
    formatsMovie: dataMovie.formats_movie?.map(
      (format: FormatMovie) => format.name_format
    ),
    genresMovie: dataMovie.genres_movie?.map(
      (genre: GenreMovie) => genre.name_genre
    ),
  };
  const handleSubmit = (values: initialUpdateMovieFormProps) => {
    const genresMovie: GenreMovie[] = [];
    const idiomsMovie: IdiomMovie[] = [];
    const formatsMovie: FormatMovie[] = [];
    const restrictionMovie = restrictions.find(
      (restriction: RestrictionMovie) =>
        restriction.tag_restriction === values.restrictionMovie
    );
    values.genresMovie.map((genre: string) => {
      const newValueGenre = genres.find(
        (item: GenreMovie) => item.name_genre === genre
      );
      if (newValueGenre) {
        genresMovie.push(newValueGenre);
      }
    });
    values.formatsMovie.map((format: string) => {
      const newValueFormat = formats.find(
        (item: FormatMovie) => item.name_format === format
      );
      if (newValueFormat) {
        formatsMovie.push(newValueFormat);
      }
    });
    values.idiomsMovie.map((idiom: string) => {
      const newValueIdiom = idioms.find(
        (item: IdiomMovie) => item.name_idiom === idiom
      );
      if (newValueIdiom) {
        idiomsMovie.push(newValueIdiom);
      }
    });
    const newDataFormAPI = {
      releaseDateMovie: values.releaseDateMovie,
      restrictionMovie,
      genresMovie,
      formatsMovie,
      idiomsMovie,
    };
    MoviesService.updateMovie(dataMovie.id_movie, newDataFormAPI)
      .then((result) =>
        toast.success(result.message, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        })
      )
      .then(() => updateMovies())
      .catch((error) =>
        toast.error(`${error}`, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        })
      )
      .finally(() => onClose());
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
                <div className="checkbox_input">
                  <p>Idiomas</p>
                  <div className="checkbox_list">
                    {idioms &&
                      idioms?.map((idiom: IdiomMovie) => {
                        return (
                          <div key={idiom?.id_idiom} className="checkbox_item">
                            <Field
                              id={idiom?.id_idiom.toString()}
                              type="checkbox"
                              name="idiomsMovie"
                              value={idiom?.name_idiom}
                            />
                            <label htmlFor={idiom?.id_idiom.toString()}>
                              {idiom?.name_idiom}
                            </label>
                          </div>
                        );
                      })}
                  </div>
                  <InputErrorMessage
                    text={
                      errors.idiomsMovie?.toString()
                        ? errors.idiomsMovie?.toString()
                        : ""
                    }
                  />
                </div>
                <div className="checkbox_input">
                  <p>Formatos</p>
                  <div className="checkbox_list">
                    {formats &&
                      formats?.map((format: FormatMovie) => {
                        return (
                          <div
                            key={format?.id_format}
                            className="checkbox_item"
                          >
                            <Field
                              id={format?.id_format.toString()}
                              type="checkbox"
                              name="formatsMovie"
                              value={format?.name_format}
                            />
                            <label htmlFor={format.id_format.toString()}>
                              {format?.name_format}
                            </label>
                          </div>
                        );
                      })}
                  </div>
                  <InputErrorMessage
                    text={
                      errors.formatsMovie?.toString()
                        ? errors.formatsMovie?.toString()
                        : ""
                    }
                  />
                </div>
              </div>

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
