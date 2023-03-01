import * as Yup from "yup";
export const AddMovieFormSchema = Yup.object().shape({
    release_date_movie: Yup.string().required("El campo es requerido"),
    restrictions_movie: Yup.string().required("El campo es requerido"),
    idioms_movie: Yup.array(Yup.string().required("El campo es requerido")).min(1, "Debe seleccionar al menos una opción") ,
    available_movie: Yup.array(Yup.string().required("El campo es requerido")).min(1, "Debe seleccionar al menos una opción") ,
    status_movie:Yup.string().required("El campo es requerido")
}) 

