import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import RCInput from "../../atoms/RCInput";
import {
  fetchAllMovieInfo,
  fetchTransformAllMovieInfo,
} from "../../../functions";
import "./index.scss";
import { AddMovieFormSchema } from "./yupSchema";
import {
  idiomMovie,
  restrictionMovie,
  statusMovie,
  availableMovie,
  initialAddMovieFormProps,
  MovieByQuery,
} from "../../../interfaces";
import {
  initialAvailableMovieFormat,
  initialIdiomsMovie,
  initialRestrictionsAge,
  initialStatusMovie,
} from "../../../interfaces/initials";
import InputErrorMessage from "../../atoms/InputErrorMessage";
import Button from "../../atoms/Button";
import MoviesService from "../../../Api/movies";

interface AdminAddMovieFormProps {
  movieData: MovieByQuery;
}

const AdminAddMovieForm = ({ movieData }: AdminAddMovieFormProps) => {
  const initialValues: initialAddMovieFormProps = {
    release_date_movie: "",
    restrictions_movie: "",
    idioms_movie: [],
    available_movie: [],
    status_movie: "",
  };
  const handleSubmit = async (values: initialAddMovieFormProps) => {
    const data = await fetchAllMovieInfo(movieData?.id);
    const tranformDataMovie = fetchTransformAllMovieInfo(data);
    const testMovieData = {
      ...tranformDataMovie,
      ...values,
      genres_movie: tranformDataMovie.genres_movie[0].name,
      idioms_movie: values.idioms_movie.join(","),
      available_movie: values.available_movie.join(","),
    };
    console.log("aea", JSON.stringify(testMovieData));
    MoviesService.postMovie(testMovieData);
    // const available_movie_API: availableMovie[] = [];
    // const idioms_movie_API: idiomMovie[] = [];
    // const status_movie_API = initialStatusMovie.find(
    //   (status: statusMovie) => status.status === values.status_movie
    // );
    // const restrictions_movie_API = initialRestrictionsAge.find(
    //   (restriction: restrictionMovie) =>
    //     restriction.value === values.restrictions_movie
    // );
    // values.available_movie.map((format: string) => {
    //   const newValueFormat = initialAvailableMovieFormat.find(
    //     (item: availableMovie) => item.format === format
    //   );
    //   if (newValueFormat) {
    //     available_movie_API.push(newValueFormat);
    //   }
    // });
    // values.idioms_movie.map((idiom: string) => {
    //   const newValueIdiom = initialIdiomsMovie.find(
    //     (item: idiomMovie) => item.idiom === idiom
    //   );
    //   if (newValueIdiom) {
    //     idioms_movie_API.push(newValueIdiom);
    //   }
    // });
    // const newDataFormAPI = {
    //   ...newDataMovie,
    //   ...values,
    //   available_movie: available_movie_API,
    //   idioms_movie: idioms_movie_API,
    //   restrictions_movie: restrictions_movie_API,
    //   status_movie: status_movie_API,
    // };
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
            <RCInput
              name="release_date_movie"
              type="date"
              label="Fecha de estreno"
            />
            <div className="selects_input">
              <div className="select_input">
                <p>Restricción</p>
                <Field as="select" name="restrictions_movie">
                  <option value="">--Seleccione una restricción--</option>
                  {initialRestrictionsAge &&
                    initialRestrictionsAge?.map(
                      (ageRestriction: restrictionMovie) => {
                        return (
                          <option
                            key={ageRestriction?.id}
                            value={ageRestriction?.value}
                          >
                            {ageRestriction?.value}
                          </option>
                        );
                      }
                    )}
                </Field>
                <InputErrorMessage
                  text={
                    errors.restrictions_movie ? errors.restrictions_movie : ""
                  }
                />
              </div>
              <div className="select_input">
                <p>Estado de la película</p>
                <Field as="select" name="status_movie">
                  <option value="">--Seleccione un estado--</option>
                  {initialStatusMovie &&
                    initialStatusMovie.map((status: statusMovie) => {
                      return (
                        <option key={status?.id} value={status?.status}>
                          {status?.status}
                        </option>
                      );
                    })}
                </Field>
                <InputErrorMessage
                  text={errors?.status_movie ? errors?.status_movie : ""}
                />
              </div>
            </div>
            <div className="checkbox_inputs_select">
              <div className="checkbox_input">
                <p>Formatos disponibles</p>
                <div className="checkbox_list">
                  {initialAvailableMovieFormat &&
                    initialAvailableMovieFormat.map(
                      (format: availableMovie) => {
                        return (
                          <div key={format?.id} className="checkbox_item">
                            <Field
                              id={format?.format}
                              type="checkbox"
                              name="available_movie"
                              value={format?.format}
                            />
                            <label htmlFor={format?.format}>
                              {format?.format}
                            </label>
                          </div>
                        );
                      }
                    )}
                </div>
                <InputErrorMessage
                  text={
                    errors?.available_movie?.toString()
                      ? errors?.available_movie.toString()
                      : ""
                  }
                />
              </div>
              <div className="checkbox_input">
                <p>Idiomas disponibles</p>
                <div className="checkbox_list">
                  {initialIdiomsMovie &&
                    initialIdiomsMovie.map((idiom: idiomMovie) => {
                      return (
                        <div key={idiom?.id} className="checkbox_item">
                          <Field
                            id={idiom?.idiom}
                            key={idiom?.id}
                            type="checkbox"
                            name="idioms_movie"
                            value={idiom?.idiom}
                          />
                          <label htmlFor={idiom?.idiom}>{idiom?.idiom}</label>
                        </div>
                      );
                    })}
                </div>
                <InputErrorMessage
                  text={
                    errors?.idioms_movie?.toString()
                      ? errors?.idioms_movie.toString()
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
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AdminAddMovieForm;
