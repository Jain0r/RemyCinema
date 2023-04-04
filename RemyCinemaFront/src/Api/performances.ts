import Api from ".";
import { BASE_URL_API } from "./config";

export default class PerformancesService {
  static async getAllPerformances() {
    const rsp = await Api.get(`${BASE_URL_API}/performances`);
    const rspJson = await rsp.json();
    if (rsp.status !== 200) {
      throw new Error(rspJson.message);
    } else {
      return rspJson.result;
    }
  }
  static async postPerformance(data: any) {
    const rsp = await Api.post(`${BASE_URL_API}/performances`, data);
    const rspJson = await rsp.json();
    console.log("status", rsp.status);
    if (rsp.status !== 200) {
      throw new Error(rspJson.message);
    } else {
      return rspJson;
    }
  }
}
