import Api from ".";
import { BASE_URL_API } from "./config";

export default class StatusService {
  static async getAllStatus() {
    const rsp = await Api.get(`${BASE_URL_API}/status`);
    const rspJson = await rsp.json();
    if (rsp.status !== 200) {
      throw new Error(rspJson.message);
    } else {
      return rspJson.result;
    }
  }
}
