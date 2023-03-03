import React, { useState } from "react";
import AdminCardInfo from "../../atoms/AdminCardInfo";
import { MdMovieFilter } from "react-icons/md";
import "./index.scss";
import Button from "../../atoms/Button";
import ModalLayout from "../../molecules/ModalLayout";
import AdminAddMovieForm from "../../organisms/AdminAddMovieForm";
import AdminAddMovieProccess from "../../organisms/AdminAddMovieProccess";
const AdminMoviesTemplate = () => {
  const [AddMovieModalForm, setAddMovieModalForm] = useState<boolean>(false);
  return (
    <div className="adminmovies_template_container">
      <div className="adminmovies_list_cards">
        <AdminCardInfo
          icon={<MdMovieFilter />}
          color="#baffc9"
          cant={250}
          title="Péliculas totales"
        />
        <AdminCardInfo
          icon={<MdMovieFilter />}
          color="#ffdfba"
          cant={4}
          title="Péliculas en estreno"
        />
        <AdminCardInfo
          icon={<MdMovieFilter />}
          color="#ffb3ba"
          cant={15}
          title="Péliculas en cartelera"
        />
        <AdminCardInfo
          icon={<MdMovieFilter />}
          color="#ffffba"
          cant={5}
          title="Péliculas en pre-venta"
        />
        <AdminCardInfo
          icon={<MdMovieFilter />}
          color="#bae1ff"
          cant={12}
          title="Péliculas por estrenar"
        />
      </div>
      <div>
        <Button
          type="button"
          onClick={() => setAddMovieModalForm(true)}
          text="Agregar película"
          className="secondary_button"
        ></Button>
        <ModalLayout
          title="Agregar Nueva Película "
          maxWidth={450}
          onClose={() => setAddMovieModalForm(false)}
          isOpen={AddMovieModalForm}
        >
          {<AdminAddMovieProccess />}
        </ModalLayout>
      </div>
    </div>
  );
};

export default AdminMoviesTemplate;
