import Api from ".";
import { BASE_URL_API } from "./config";

export default class GenresService {
  static async getAllGenres() {
    const rsp = await Api.get(`${BASE_URL_API}/genres`);
    const dataJson = await rsp.json();
    return dataJson;
  }
}
