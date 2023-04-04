import React, { useState } from "react";
import { BiCalendar } from "react-icons/bi";
import { TbTrash } from "react-icons/tb";
import {
  dataToOptionSelect,
  getCinemaById,
  getHallsByCinema,
  getHallsByFormat,
  getPerformancesByHall,
  intersectionArrays,
} from "../../../functions";
import {
  DataTableTodoHallType,
  FormatMovie,
  HallRC,
} from "../../../interfaces";
import { ColumsForHallsTable, initialHall } from "../../../interfaces/initials";
import { InfoPerfomancesTemplate } from "../../../pages/Admin/AdminPerformances";
import AdminSelect from "../../atoms/AdminSelect";
import AdminTableTodo from "../../molecules/AdminTableTodo";
import CardSchedulePerformance from "../../molecules/CardSchedulePerformance";
import ModalLayout from "../../molecules/ModalLayout";
import "./index.scss";
import useNotification from "../../../hooks/useNotification";
import { toast } from "react-toastify";

interface AdminHallsTemplateProps {
  data: InfoPerfomancesTemplate;
  onUpload: () => void;
}

interface FiltersHall {
  [key: string]: string;
  cinema_hall: string;
  format_hall: string;
}
const initialFiltersValues: FiltersHall = { cinema_hall: "", format_hall: "" };

const AdminHallsTemplate = ({ data, onUpload }: AdminHallsTemplateProps) => {
  const [filters, setFilters] = useState<FiltersHall>(initialFiltersValues);
  const [scheduleHall, setScheduleHall] = useState<boolean>(false);
  const { createNotification } = useNotification();
  const [currentHall, setCurrentHall] = useState<HallRC>(initialHall);

  const handleHallSchedule = (hall: HallRC) => {
    setCurrentHall(hall);
    setScheduleHall(true);
  };
  const formatDataSourceHalls = (halls: HallRC[]): DataTableTodoHallType[] => {
    return halls?.map(
      (hall: HallRC, index): DataTableTodoHallType => ({
        index_hall: index + 1,
        tag_hall: hall.tag_hall,
        cinema_hall: hall.cinema_info.name_cinema,
        formats_hall: hall.hall_formats
          .map((format: FormatMovie) => format.name_format)
          .join(", "),
        status_hall: (
          <>
            <p>Activo</p>
          </>
        ),
        actions_hall: (
          <div className="item_actions_container">
            <span
              className="update_action"
              onClick={() => handleHallSchedule(hall)}
            >
              <BiCalendar />
            </span>
            <span
              className="delete_action"
              onClick={() => console.log("eliminar", { id: hall.id_hall })}
            >
              <TbTrash />
            </span>
          </div>
        ),
      })
    );
  };
  const filteredHalls = (halls: HallRC[]): HallRC[] => {
    let hallsFiltered = halls;
    let resultsByFilter: any = [];
    for (const filterKey in filters) {
      const filterValue = filters[filterKey];
      if (filterValue) {
        switch (filterKey) {
          case "cinema_hall":
            resultsByFilter.push(
              getHallsByCinema(halls, data.cinemas, filters.cinema_hall)
            );
            break;
          case "format_hall":
            resultsByFilter.push(getHallsByFormat(halls, filters.format_hall));
            break;
          default:
            break;
        }
      }
    }
    if (resultsByFilter.length > 0) {
      hallsFiltered = intersectionArrays(resultsByFilter);
    }
    return hallsFiltered;
  };
  const handleFilters = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };
  const handleAlert = () => {
    createNotification({ text: "Texto informativo", type: "info" });
  };
  return (
    <div className="adminhalls_template_container">
      <div className="adminhalls_template main">
        <div className="adminhalls_list admin_section">
          <p className="admin_section_title">Lista de Salas</p>
          <AdminSelect
            name="cinema_hall"
            defaultValue="Filtrar por cine"
            value={filters.cinema_hall}
            options={dataToOptionSelect(data.cinemas, {
              idField: "id_cinema",
              valueField: "name_cinema",
              nameValueField: "name_cinema",
            })}
            onChange={(e) => handleFilters(e)}
          />
          <AdminSelect
            name="format_hall"
            defaultValue="Filtrar por formato"
            value={filters.formats_hall}
            options={dataToOptionSelect(data.formats, {
              idField: "id_format",
              valueField: "name_format",
              nameValueField: "name_format",
            })}
            onChange={(e) => handleFilters(e)}
          />
          <AdminTableTodo
            itemsPerPage={5}
            dataSource={formatDataSourceHalls(filteredHalls(data.halls))}
            headers={ColumsForHallsTable}
          />
          <ModalLayout
            isOpen={scheduleHall}
            maxWidth={600}
            onClose={() => setScheduleHall(false)}
            title={`Horario - Sala ${currentHall.tag_hall}`}
          >
            <CardSchedulePerformance
              data={data}
              onUpload={() => onUpload()}
              onClose={() => setScheduleHall(false)}
              dataHall={currentHall}
              appointments={getPerformancesByHall(
                data.performances,
                currentHall.id_hall
              )}
            />
          </ModalLayout>
        </div>
        <button onClick={handleAlert}></button>
      </div>
    </div>
  );
};

export default AdminHallsTemplate;
