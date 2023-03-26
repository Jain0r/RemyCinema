import React, { useState } from "react";
import { BiCameraMovie } from "react-icons/bi";
import {
  filterTypesForTablePerformances,
  movieRCFormat,
} from "../../../interfaces";
import { InfoPerfomancesTemplate } from "../../../pages/Admin/AdminPerformances";
import AdminCardInfo from "../../atoms/AdminCardInfo";
import AdminSelect, { OptionSelect } from "../../atoms/AdminSelect";
import Button from "../../atoms/Button";
import "react-datepicker/dist/react-datepicker.css";
import "./index.scss";
import ModalLayout from "../../molecules/ModalLayout";
import AdminAddPerformanceForm from "../../organisms/AdminAddPerformanceForm";

interface AdminPerformancesTemplateProps {
  data: InfoPerfomancesTemplate;
}

const AdminPerformancesTemplate = ({
  data,
}: AdminPerformancesTemplateProps) => {
  const initialFilterValuesPerformances: filterTypesForTablePerformances = {
    performances_movies: "",
  };
  const [filters, setFilters] = useState<filterTypesForTablePerformances>(
    initialFilterValuesPerformances
  );
  const [modalAddPerformance, setModalAddPerformance] =
    useState<boolean>(false);

  const handleFiltersOptions = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };
  return (
    <div className="adminperformances_template_container">
      <div className="adminperformances_template_main">
        <div className="adminperformances_primary_info admin_section">
          <p className="admin_section_title">Información básica</p>
          <div className="adminperformances_lists_cards">
            <AdminCardInfo
              icon={<BiCameraMovie />}
              color="#baffc9"
              cant={2}
              title="Funciones ongoing"
            />
            <AdminCardInfo
              icon={<BiCameraMovie />}
              color="#ffdfba"
              cant={2}
              title="Funciones en espera"
            />
          </div>
        </div>
        <div className="adminperformances_list_performances_container admin_section">
          <div className="adminperformances_top_container">
            <p className="admin_section_title">Lista de funciones</p>
            <Button
              text="+ Agregar una función"
              className="tertiary_button"
              type="button"
              styles={{ padding: "15px 20px", borderRadius: "5px" }}
              onClick={() => setModalAddPerformance(true)}
            />
          </div>
          <AdminSelect
            defaultValue="Filtra por película"
            value={filters.performances_movies}
            inputName="performances_movies"
            onChange={(e) => handleFiltersOptions(e)}
            options={
              data?.movies &&
              data.movies?.reduce(
                (
                  accumulator: OptionSelect[],
                  currentValue: movieRCFormat
                ): OptionSelect[] => {
                  const option: OptionSelect = {
                    idValue: currentValue?.id_movie,
                    value: currentValue?.id_movie.toString(),
                    nameValue: currentValue?.title_movie,
                  };
                  accumulator.push(option);
                  return accumulator;
                },
                []
              )
            }
          />
        </div>
      </div>
      <ModalLayout
        isOpen={modalAddPerformance}
        maxWidth={600}
        onClose={() => setModalAddPerformance(false)}
        title="Añadir función"
      >
        <AdminAddPerformanceForm data={data} />
      </ModalLayout>
    </div>
  );
};

export default AdminPerformancesTemplate;
