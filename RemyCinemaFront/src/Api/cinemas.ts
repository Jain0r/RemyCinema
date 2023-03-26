import Api from ".";
import { BASE_URL_API } from "./config";

export default class CinemasService {
  static async getAllCinemas() {
    const rsp = await Api.get(`${BASE_URL_API}/cinemas`);
    const rspJson = await rsp.json();
    if (rsp.status !== 200) {
      throw new Error(rspJson.message);
    } else {
      return rspJson.result;
    }
  }
}
