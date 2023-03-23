import Api from ".";
import { BASE_URL_API } from "./config";

export default class IdiomsService {
  static async getAllIdioms() {
    const rsp = await Api.get(`${BASE_URL_API}/idioms`);
    const dataJson = await rsp.json();
    return dataJson;
  }
}
