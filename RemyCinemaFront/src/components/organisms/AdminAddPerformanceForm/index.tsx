import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { CinemaRC, FormatMovie, HallRC } from "../../../interfaces";
import { InfoPerfomancesTemplate } from "../../../pages/Admin/AdminPerformances";
import AdminSelect, { OptionSelect } from "../../atoms/AdminSelect";

interface AdminAddPerformanceFormProps {
  data: InfoPerfomancesTemplate;
}

interface performanceSchedule {
  schedule_start_performance: Date | null;
  schedule_end_performance: Date | null;
}

interface AddPerformanceForm {
  performance_cinema: string;
  performance_movie: string;
  performance_hall: string;
  performance_format: string;
  performance_idiom: string;
  schedule_start_performance: Date | null;
  schedule_end_performance: Date | null;
}

const initialFormValues: AddPerformanceForm = {
  performance_cinema: "",
  performance_movie: "",
  performance_hall: "",
  performance_format: "",
  performance_idiom: "",
  schedule_start_performance: new Date(),
  schedule_end_performance: null,
};

const AdminAddPerformanceForm = ({ data }: AdminAddPerformanceFormProps) => {
  const [formPerformance, setFormPerformance] =
    useState<AddPerformanceForm>(initialFormValues);
  const excludedTimes = [
    { start: "2023-03-14 10:30:00", end: "2023-03-14 13:30:00" },
    { start: "2023-03-14 15:00:00", end: "2023-03-14 17:00:00" },
  ].flatMap((interval) => {
    const start = new Date(interval.start);
    const end = new Date(interval.end);
    const times = [];

    while (start < end) {
      times.push(new Date(start));
      start.setMinutes(start.getMinutes() + 1);
    }
    return times;
  });
  const handleStartSchedule = (date: Date | null) => {
    setFormPerformance({
      ...formPerformance,
      schedule_start_performance: date,
    });
  };

  const handlePerformanceForm = (e: React.ChangeEvent<HTMLSelectElement>) => {
    switch (e.target.name) {
      case "performance_cinema":
        setFormPerformance({
          ...initialFormValues,
          [e.target.name]: e.target.value,
        });
        break;
      case "performance_hall":
        setFormPerformance({
          ...formPerformance,
          performance_format: initialFormValues.performance_format,
          [e.target.name]: e.target.value,
        });
        break;
      default:
        setFormPerformance({
          ...formPerformance,
          [e.target.name]: e.target.value,
        });
        break;
    }
  };
  console.log({ formPerformance });
  const getFormatsByHall = (id: number) => {
    const hall = data.halls.find((hall: HallRC) => hall.id_hall === id);
    if (hall) {
      return hall.hall_formats;
    } else {
      return [];
    }
  };

  const handleRawChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
  };
  return (
    <div>
      <AdminSelect
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          handlePerformanceForm(e)
        }
        value={formPerformance.performance_cinema}
        defaultValue="Escoge el cine"
        inputName="performance_cinema"
        options={data.cinemas.reduce(
          (
            accumulator: OptionSelect[],
            currentCinema: CinemaRC
          ): OptionSelect[] => {
            const option: OptionSelect = {
              idValue: currentCinema.id_cinema,
              value: currentCinema.id_cinema.toString(),
              nameValue: currentCinema.name_cinema,
            };
            accumulator.push(option);
            return accumulator;
          },
          []
        )}
      />
      <AdminSelect
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          handlePerformanceForm(e)
        }
        disabled={formPerformance.performance_cinema ? false : true}
        defaultValue="Escoge una sala"
        inputName="performance_hall"
        value={formPerformance.performance_hall}
        options={data.halls
          .filter(
            (hall: HallRC) =>
              hall.id_cinema === Number(formPerformance.performance_cinema)
          )
          .reduce(
            (
              accumulator: OptionSelect[],
              currentHall: HallRC
            ): OptionSelect[] => {
              const option: OptionSelect = {
                idValue: currentHall.id_hall,
                value: currentHall.id_hall.toString(),
                nameValue: currentHall.tag_hall,
              };
              accumulator.push(option);
              return accumulator;
            },
            []
          )}
      />
      <AdminSelect
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          handlePerformanceForm(e)
        }
        value={formPerformance.performance_format}
        disabled={formPerformance.performance_hall ? false : true}
        defaultValue="Escoge el formato"
        inputName="performance_format"
        options={getFormatsByHall(
          Number(formPerformance?.performance_hall)
        ).reduce(
          (
            accumulator: OptionSelect[],
            currentFormat: FormatMovie
          ): OptionSelect[] => {
            const option: OptionSelect = {
              idValue: currentFormat.id_format,
              value: currentFormat.id_format.toString(),
              nameValue: currentFormat.name_format,
            };
            accumulator.push(option);
            return accumulator;
          },
          []
        )}
      />
      <DatePicker
        selected={formPerformance.schedule_start_performance}
        onChange={(date: Date | null) => handleStartSchedule(date)}
        excludeTimes={excludedTimes}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={1}
        dateFormat="MMMM d, yyyy h:mm aa"
        onChangeRaw={handleRawChange}
      />
    </div>
  );
};

export default AdminAddPerformanceForm;
