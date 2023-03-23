import Api from ".";
import { BASE_URL_API } from "./config";

export default class StatusService {
  static async getAllStatus() {
    const rsp = await Api.get(`${BASE_URL_API}/status`);
    const dataJson = await rsp.json();
    return dataJson;
  }
}
