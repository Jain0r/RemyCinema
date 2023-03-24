import Api from ".";
import { BASE_URL_API } from "./config";

export default class IdiomsService {
  static async getAllIdioms() {
    const rsp = await Api.get(`${BASE_URL_API}/idioms`);
    const rspJson = await rsp.json();
    if (rsp.status !== 200) {
      throw new Error(rspJson.message);
    } else {
      return rspJson.result;
    }
  }
}
