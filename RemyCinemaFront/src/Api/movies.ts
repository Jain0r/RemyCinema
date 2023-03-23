import Api from ".";
import { BASE_URL_API } from "./config";
//al usar react query ya no es necesario hacer un try catch
//esto es debido que react query se maneja la gestion de errores de manera automatica
//por ende no es necesario envolver la llamda http en un bloque try catch

//si ya no se usara react query entonces tendrias que envolver la llamada
// en un bloque try catch para manejar el error
export default class MoviesService {
  static async getAllMovies() {
    const rsp = await Api.get(`${BASE_URL_API}/movies`);
    const dataJson = await rsp.json();
    return dataJson.result;
  }
  static async getMovieById(id: number) {
    const rsp = await Api.get(`${BASE_URL_API}/movies/${id}`);
    const dataJson = await rsp.json();
    return dataJson.result;
  }
  static async postMovie(data: any) {
    const rsp = await Api.post(`${BASE_URL_API}/movies`, data);
    const dataJson = await rsp.json();
    return dataJson;
  }
  static async updateMovie(data: any) {
    const rsp = await Api.put(`${BASE_URL_API}/movies`, data);
    const dataJson = await rsp.json();
    return dataJson;
  }
}
