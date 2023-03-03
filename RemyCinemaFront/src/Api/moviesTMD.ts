import Api from ".";
import { API_KEY, API_LANGUAGE, BASE_URL, BASE_URL_API } from "./config";

const BASE_CONFIG_API =
  "?" + new URLSearchParams({ api_key: API_KEY, language: API_LANGUAGE });

//al usar react query ya no es necesario hacer un try catch
//esto es debido que react query se maneja la gestion de errores de manera automatica
//por ende no es necesario envolver la llamda http en un bloque try catch
export default class MoviesServiceTMD {
  static async getMovieDetails(id: number) {
    try {
      const rsp = await Api.get(`${BASE_URL}/movie/${id}` + BASE_CONFIG_API);
      const rspJson = await rsp.json();
      return rspJson;
    } catch (error) {
      console.log("error", error);
    }
  }
  static async getMovieCredits(id: number) {
    try {
      const rsp = await Api.get(
        `${BASE_URL}/movie/${id}/credits` + BASE_CONFIG_API
      );
      const rspJson = await rsp.json();
      return rspJson;
    } catch (error) {
      console.log("error", error);
    }
  }
  static async getMovieTrailer(id: number) {
    try {
      const rsp = await Api.get(
        `${BASE_URL}/movie/${id}/videos` + BASE_CONFIG_API
      );
      const rspJson = await rsp.json();
      return rspJson;
    } catch (error) {
      console.log("error", error);
    }
  }
  static async getMoviesByQuery(query: string) {
    try {
      console.log("llega aca", query);

      const rsp = await Api.get(
        `${BASE_URL}/search/movie` +
          BASE_CONFIG_API +
          "&" +
          new URLSearchParams({ query: query })
      );
      const rspJson = await rsp.json();
      return rspJson;
    } catch (error) {
      console.log(error);
    }
  }
}
