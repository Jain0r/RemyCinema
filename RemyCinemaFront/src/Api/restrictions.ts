import Api from ".";
import { BASE_URL_API } from "./config";

export default class RestrictionsService {
  static async getAllRestrictions() {
    const rsp = await Api.get(`${BASE_URL_API}/restrictions`);
    const dataJson = await rsp.json();
    return dataJson;
  }
}
