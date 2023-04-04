import * as Yup from "yup";
export const AddPerformanceFormSchema = Yup.object().shape({
  performanceMovie: Yup.string().required("El campo es requerido"),
  performanceFormat: Yup.string().required("El campo es requerido"),
  performanceIdiom: Yup.string().required("El campo es requerido"),
  scheduleStartPerformance: Yup.date().typeError("Eliga una fecha válida"),
});
