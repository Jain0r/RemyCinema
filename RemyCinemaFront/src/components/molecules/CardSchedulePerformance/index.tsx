import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import { AppointmentModel } from "@devexpress/dx-react-scheduler";
import "react-datepicker/dist/react-datepicker.css";
import {
  Scheduler,
  DayView,
  Appointments,
  AppointmentTooltip,
} from "@devexpress/dx-react-scheduler-material-ui";
import "./index.scss";
import {
  dateToAMorPM,
  getTomorrowDate,
  getYesterdayDate,
  todayDate,
} from "../../../functions";
import Button from "../../atoms/Button";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { TbArrowAutofitLeft } from "react-icons/tb";
import ReactDatePicker from "react-datepicker";
import { FormatMovie, HallRC } from "../../../interfaces";
import FormatMovieContainer from "../../atoms/FormatMovieContainer";
import ModalLayout from "../ModalLayout";
import AdminAddPerformanceForm from "../../organisms/AdminAddPerformanceForm";
import { InfoPerfomancesTemplate } from "../../../pages/Admin/AdminPerformances";

export interface PerformanceProps extends AppointmentModel {
  startDate: string;
  endDate: string;
  titleMovie: string;
  formatPerformance: string;
  idiomPerformance: string;
}

interface CustomAppointmentProps extends Appointments.AppointmentProps {
  style?: React.CSSProperties;
}
const AppointmentComponent = ({
  children,
  style,
  ...restProps
}: CustomAppointmentProps) => (
  <Appointments.Appointment
    {...restProps}
    style={{
      ...style,
      display: "flex",
      backgroundColor: "#004a8c",
      borderRadius: "8px",
    }}
  >
    {children}
  </Appointments.Appointment>
);

const AppointmentContent = ({ data }: Appointments.AppointmentContentProps) => {
  return (
    <div className="appointment_content_container">
      <p className="title_appointment">{data.titleMovie}</p>
      <p className="hours_info_appointment">
        {`${dateToAMorPM(data.startDate)} - ${dateToAMorPM(data.endDate)}`}
      </p>
      <div className="primary_info_appointment">
        <p>{data.formatPerformance}</p>
        <p>{data.idiomPerformance}</p>
      </div>
    </div>
  );
};
const AppointmentTooltipContent = ({
  appointmentData,
}: AppointmentTooltip.ContentProps) => {
  console.log(appointmentData);
  return <p>xd</p>;
};

interface CardSchedulePerformanceProps {
  appointments: PerformanceProps[];
  dataHall: HallRC;
  data: InfoPerfomancesTemplate;
  onClose: () => void;
  onUpload: () => void;
}

const CardSchedulePerformance = ({
  appointments,
  dataHall,
  data,
  onClose,
  onUpload,
}: CardSchedulePerformanceProps) => {
  const [currentDate, setCurrentDate] = useState<Date>(todayDate);
  const [totalAppointments, setTotalAppointments] =
    useState<PerformanceProps[]>(appointments);
  const [modalAddPerformance, setModalAddPerformance] =
    useState<boolean>(false);

  useEffect(() => {
    setTotalAppointments(appointments);
  }, [appointments]);

  const handleChangeDate = (date: Date | null) => {
    if (date !== null) {
      setCurrentDate(date);
    } else {
      setCurrentDate(new Date());
    }
  };

  console.log({ dataHall, appointments });
  return (
    <div className="cardschedule_performances_container">
      <div className="cardschedule_hall_info">
        <div className="hall_info">
          <p>Cine:</p>
          <p>{dataHall.cinema_info.name_cinema} </p>
        </div>

        <div className="hall_info">
          <p>Tecnologías:</p>
          <p>
            {dataHall.hall_formats &&
              dataHall.hall_formats.map((format: FormatMovie) => {
                return (
                  <FormatMovieContainer
                    key={format.id_format}
                    text={format.name_format}
                  />
                );
              })}
          </p>
        </div>
      </div>
      <div className="cardschedule_options_date">
        <div className="cardschedule_calendar">
          <p>Fecha:</p>
          <ReactDatePicker
            selected={currentDate}
            onChange={(date) => handleChangeDate(date)}
          ></ReactDatePicker>
        </div>
        <div className="cardschedule_buttons">
          <Button
            text="Hoy día"
            type="button"
            icon={<TbArrowAutofitLeft />}
            styles={{ padding: "5px", borderRadius: "5px" }}
            className="tertiary_button inner"
            onClick={() => setCurrentDate(todayDate)}
          ></Button>
          <div className="cardschedule_buttons_manage_day">
            <Button
              type="button"
              icon={<MdKeyboardArrowLeft />}
              styles={{ padding: "2px", borderRadius: "5px" }}
              className="tertiary_button"
              onClick={() => setCurrentDate(getYesterdayDate(currentDate))}
            />
            <Button
              type="button"
              icon={<MdKeyboardArrowRight />}
              styles={{ padding: "2px", borderRadius: "5px" }}
              className="tertiary_button"
              onClick={() => setCurrentDate(getTomorrowDate(currentDate))}
            ></Button>
          </div>
        </div>
      </div>
      <Button
        text="+ Agregar función"
        className="tertiary_button"
        styles={{
          alignSelf: "flex-end",
          padding: "12px",
        }}
        type="button"
        onClick={() => setModalAddPerformance(true)}
      ></Button>
      <Paper>
        <Scheduler locale="es" data={totalAppointments} height={300}>
          <ViewState currentDate={currentDate} />
          <DayView startDayHour={0} endDayHour={24} />
          <Appointments
            appointmentComponent={AppointmentComponent}
            appointmentContentComponent={AppointmentContent}
          />
          <AppointmentTooltip
            contentComponent={AppointmentTooltipContent}
            showCloseButton
            showOpenButton
          />
        </Scheduler>
      </Paper>
      <ModalLayout
        maxWidth={350}
        title="Agregar función"
        isOpen={modalAddPerformance}
        onClose={() => setModalAddPerformance(false)}
      >
        <AdminAddPerformanceForm
          currentDate={currentDate}
          onUpload={() => onUpload()}
          onClose={() => setModalAddPerformance(false)}
          dataHall={dataHall}
          data={data}
        />
      </ModalLayout>
    </div>
  );
};

export default CardSchedulePerformance;
