import Api from ".";
import { BASE_URL_API } from "./config";

export default class FormatsService {
  static async getAllFormats() {
    const rsp = await Api.get(`${BASE_URL_API}/formats`);
    const rspJson = await rsp.json();
    if (rsp.status !== 200) {
      throw new Error(rspJson.message);
    } else {
      return rspJson.result;
    }
  }
}
