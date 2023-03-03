import * as Yup from "yup";
export const AddMovieFormSchema = Yup.object().shape({
    releaseDateMovie: Yup.string().required("El campo es requerido"),
    restrictionsMovie: Yup.string().required("El campo es requerido"),
    idiomsMovie: Yup.array(Yup.string().required("El campo es requerido")).min(1, "Debe seleccionar al menos una opción") ,
    availableMovie: Yup.array(Yup.string().required("El campo es requerido")).min(1, "Debe seleccionar al menos una opción") ,
    statusMovie:Yup.string().required("El campo es requerido")
}) 

