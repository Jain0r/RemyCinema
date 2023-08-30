import { Formik, Form, Field } from "formik";
import {
  dataToOptionSelect,
  fetchAllMovieInfo,
  fetchTransformAllMovieInfo,
} from "../../../functions";
import "./index.scss";
import { AddMovieFormSchema } from "./yupSchema";
import {
  FormatMovie,
  GenreMovie,
  IdiomMovie,
  MovieByQuery,
  RestrictionMovie,
} from "../../../interfaces";
import InputErrorMessage from "../../atoms/InputErrorMessage";
import Button from "../../atoms/Button";
import MoviesService from "../../../Api/movies";
import AdminInput from "../../atoms/AdminInput";
import AdminSelect from "../../atoms/AdminSelect";
import useNotification from "../../../hooks/useNotification";

interface AdminAddMovieFormProps {
  movieData: MovieByQuery;
  genres: GenreMovie[];
  restrictions: RestrictionMovie[];
  idioms: IdiomMovie[];
  formats: FormatMovie[];
  updateMovies(): void;
  onClose(): void;
}

interface initialAddMovieFormProps {
  releaseDateMovie: string;
  restrictionMovie: string;
  genresMovie: string[];
  idiomsMovie: string[];
  formatsMovie: string[];
}

const AdminAddMovieForm = ({
  movieData,
  genres,
  restrictions,
  updateMovies,
  idioms,
  formats,
  onClose,
}: AdminAddMovieFormProps) => {
  const initialValues: initialAddMovieFormProps = {
    releaseDateMovie: "",
    restrictionMovie: "",
    genresMovie: [],
    idiomsMovie: [],
    formatsMovie: [],
  };

  const handleSubmit = async (values: initialAddMovieFormProps) => {
    const data = await fetchAllMovieInfo(movieData?.id);
    const { createNotification } = useNotification();
    const tranformDataMovie = fetchTransformAllMovieInfo(data); //posible error
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
      ...tranformDataMovie,
      releaseDateMovie: values.releaseDateMovie,
      restrictionMovie,
      genresMovie,
      formatsMovie,
      idiomsMovie,
    };
    console.log("dataFinal", newDataFormAPI);
    MoviesService.postMovie(newDataFormAPI)
      .then((result) =>
        createNotification({ type: "success", text: result, duration: 2000 })
      )
      .then(() => updateMovies())
      .catch((error) =>
        createNotification({
          type: "error",
          text: JSON.stringify(error),
          duration: 2000,
        })
      )
      .finally(() => onClose());
  };

  return (
    <div className="add_movie_form_container">
      <p className="title_proccess">2. Añadir datos pertinentes</p>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={AddMovieFormSchema}
      >
        {({ errors, values, setFormikState, setFieldValue }) => (
          <Form>
            <div className="related_primary_info">
              <AdminInput
                type="date"
                name="releaseDateMovie"
                label="Fecha de estreno"
                onChange={(e) => setFieldValue(e.target.name, e.target.value)}
                value={values.releaseDateMovie}
                validate={true}
              />

              <div className="selects_input">
                <div className="select_input">
                  <p>Restricción</p>
                  <AdminSelect
                    onChange={(e) =>
                      setFieldValue(e.target.name, e.target.value)
                    }
                    value={values.restrictionMovie}
                    options={dataToOptionSelect(restrictions, {
                      idField: "id_restriction",
                      valueField: "tag_restriction",
                      nameValueField: "tag_restriction",
                    })}
                    defaultValue="Seleccione una restricción"
                    name="restrictionMovie"
                    validate={true}
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
                        <div key={format?.id_format} className="checkbox_item">
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
