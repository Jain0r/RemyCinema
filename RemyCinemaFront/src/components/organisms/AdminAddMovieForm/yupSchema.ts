import * as Yup from "yup";
export const AddMovieFormSchema = Yup.object().shape({
  releaseDateMovie: Yup.string().required("El campo es requerido"),
  restrictionMovie: Yup.string().required("El campo es requerido"),
  genresMovie: Yup.array(Yup.string().required("El campo es requerido")).min(
    1,
    "Debe seleccionar al menos una categoría"
  ),
  idiomsMovie: Yup.array(Yup.string().required("El campo es requerido")).min(
    1,
    "Debe seleccionar al menos un idioma"
  ),
  formatsMovie: Yup.array(Yup.string().required("El campo es requerido")).min(
    1,
    "Debe seleccionar al menos un idioma"
  ),
});
