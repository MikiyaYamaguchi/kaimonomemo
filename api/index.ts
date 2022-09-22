import axios from "axios";

const myApi = axios.create({
  baseURL: "http://localhost:5000",
  responseType: "json"
});

export default {
  async postKaimonoData(data: any) {
    try {
      await myApi.post("", data);
    } catch (error) {
      console.error(error);
    }
  }
};
