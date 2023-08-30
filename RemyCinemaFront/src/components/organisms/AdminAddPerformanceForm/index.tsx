import { Form, Formik } from "formik";
import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import {
  dataToOptionSelect,
  dateToBDFormat,
  getMovieById,
  intersectionArrays,
  siguienteMultiploDe5,
  trailersDurationMinutes,
} from "../../../functions";
import { HallRC } from "../../../interfaces";
import { InfoPerfomancesTemplate } from "../../../pages/Admin/AdminPerformances";
import AdminSelect from "../../atoms/AdminSelect";
import Button from "../../atoms/Button";
import { AddPerformanceFormSchema } from "./yupSchema";
import "./index.scss";
import InputErrorMessage from "../../atoms/InputErrorMessage";
import PerformancesService from "../../../Api/performances";
import useNotification from "../../../hooks/useNotification";
import { PerformanceProps } from "../../molecules/CardSchedulePerformance";

interface AdminAddPerformanceFormProps {
  data: InfoPerfomancesTemplate;
  dataHall: HallRC;
  appointments: PerformanceProps[];
  currentDate: string | number | Date;
  onClose: () => void;
  onUpload: () => void;
}

interface AddPerformanceForm {
  performanceMovie: string;
  performanceFormat: string;
  performanceIdiom: string;
  scheduleStartPerformance: Date | null;
}

const AdminAddPerformanceForm = ({
  data,
  dataHall,
  currentDate,
  appointments,
  onClose,
  onUpload,
}: AdminAddPerformanceFormProps) => {
  const initialFormValues: AddPerformanceForm = {
    performanceMovie: "",
    performanceFormat: "",
    performanceIdiom: "",
    scheduleStartPerformance: currentDate
      ? new Date(new Date(currentDate).setHours(13, 0, 0, 0))
      : new Date(new Date().setHours(13, 0, 0, 0)),
  };

  const minTime = new Date(0, 0, 0, 13, 0); // 1:00 PM
  const maxTime = new Date(0, 0, 1, 22, 20); // 10:20 PM
  const { createNotification } = useNotification();
  const handleSubmit = (values: AddPerformanceForm) => {
    if (values.scheduleStartPerformance !== null) {
      const scheduleEndPerformance = new Date(
        values.scheduleStartPerformance?.getTime() +
          siguienteMultiploDe5(
            getMovieById(data.movies, Number(values.performanceMovie))
              .duration_movie + trailersDurationMinutes
          ) *
            60000
      );
      //verificar 2 casos si el inicio del intervalo a verificar esta dentro del intervalo de los performances ya existentes
      // o si el final del intervalo a verificar esta dentro ...
      const verifiedDate = appointments.some(
        (performance: PerformanceProps) => {
          return (
            (values.scheduleStartPerformance &&
              values.scheduleStartPerformance >
                new Date(
                  new Date(performance.schedule_start_performance).getTime() -
                    40 * 60000
                ) &&
              values.scheduleStartPerformance &&
              values.scheduleStartPerformance <
                new Date(
                  new Date(performance.schedule_end_performance).getTime() +
                    40 * 60000
                )) ||
            (scheduleEndPerformance >
              new Date(
                new Date(performance.schedule_start_performance).getTime() -
                  40 * 60000
              ) &&
              scheduleEndPerformance <
                new Date(
                  new Date(performance.schedule_end_performance).getTime() +
                    40 * 60000
                ))
          );
        }
      );
      if (verifiedDate) {
        createNotification({
          type: "info",
          text: "Existe cruce de horarios",
          duration: 2000,
        });
      } else {
        console.log("pasa");
        const performanceDataForAPI = {
          idMovie: Number(values.performanceMovie),
          idHall: dataHall.id_hall,
          idFormat: Number(values.performanceFormat),
          idIdiom: Number(values.performanceIdiom),
          scheduleStartPerformance: dateToBDFormat(
            values.scheduleStartPerformance
          ),
          scheduleEndPerformance: dateToBDFormat(scheduleEndPerformance),
        };
        PerformancesService.postPerformance(performanceDataForAPI)
          .then((result) =>
            createNotification({
              type: "success",
              text: result.message,
              duration: 2000,
            })
          )
          .then(() => onUpload())
          .catch((error) =>
            createNotification({
              type: "error",
              text: JSON.stringify(error),
              duration: 2000,
            })
          )
          .finally(() => onClose());
      }
    }
  };

  return (
    <div className="addperformanceform_container">
      <Formik
        initialValues={initialFormValues}
        validationSchema={AddPerformanceFormSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, values, setFieldValue, setFormikState }) => (
          <Form>
            <p>Fecha</p>
            <ReactDatePicker
              name="scheduleStartPerformance"
              showTimeSelect
              dateFormat="MMMM d, yyyy h:mm aa"
              selected={values.scheduleStartPerformance}
              onChange={(date) =>
                date
                  ? setFieldValue("scheduleStartPerformance", date)
                  : setFieldValue(
                      "scheduleStartPerformance",
                      initialFormValues.scheduleStartPerformance
                    )
              }
              onKeyDown={(e) => e.preventDefault()}
              timeIntervals={5}
              minTime={minTime}
              maxTime={maxTime}
            />
            <InputErrorMessage
              text={
                errors.scheduleStartPerformance
                  ? errors.scheduleStartPerformance
                  : ""
              }
            />
            <AdminSelect
              label="Película"
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setFormikState((prevState) => ({
                  ...prevState,
                  values: {
                    ...initialFormValues,
                    scheduleStartPerformance: values.scheduleStartPerformance,
                    [e.target.name]: e.target.value,
                  },
                }))
              }
              options={dataToOptionSelect(data.movies, {
                idField: "id_movie",
                valueField: "id_movie",
                nameValueField: "title_movie",
              })}
              name="performanceMovie"
              defaultValue="Escoge la película"
              value={values.performanceMovie}
              validate={true}
            />
            <AdminSelect
              label="Formato"
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setFieldValue(e.target.name, e.target.value)
              }
              value={values.performanceFormat}
              disabled={values.performanceMovie ? false : true}
              defaultValue="Escoge el formato"
              name="performanceFormat"
              options={dataToOptionSelect(
                intersectionArrays([
                  dataHall.hall_formats,
                  getMovieById(data.movies, Number(values.performanceMovie))
                    ?.formats_movie,
                ]),
                {
                  idField: "id_format",
                  valueField: "id_format",
                  nameValueField: "name_format",
                }
              )}
              validate={true}
            />
            <AdminSelect
              label="Idioma"
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setFieldValue(e.target.name, e.target.value)
              }
              value={values.performanceIdiom}
              disabled={values.performanceMovie ? false : true}
              defaultValue="Escoge el idioma"
              name="performanceIdiom"
              options={dataToOptionSelect(
                getMovieById(data.movies, Number(values.performanceMovie))
                  .idioms_movie,
                {
                  idField: "id_idiom",
                  valueField: "id_idiom",
                  nameValueField: "name_idiom",
                }
              )}
              validate={true}
            />
            <Button
              styles={{
                justifyContent: "center",
                padding: "15px",
                fontSize: "14px",
              }}
              text="Agregar"
              className="tertiary_button"
              type="submit"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AdminAddPerformanceForm;
