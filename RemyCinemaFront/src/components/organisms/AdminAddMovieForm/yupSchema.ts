import * as Yup from "yup";
export const AddMovieFormSchema = Yup.object().shape({
  releaseDateMovie: Yup.string().required("El campo es requerido"),
  restrictionMovie: Yup.string().required("El campo es requerido"),
  genresMovie: Yup.array(Yup.string().required("El campo es requeridi")).min(
    1,
    "Debe seleccionar al menos una categoría"
  ),
});
