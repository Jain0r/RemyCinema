import Api from ".";
import { BASE_URL_API } from "./config";

export default class FormatsService {
  static async getAllFormats() {
    const rsp = await Api.get(`${BASE_URL_API}/formats`);
    const dataJson = await rsp.json();
    return dataJson;
  }
}
