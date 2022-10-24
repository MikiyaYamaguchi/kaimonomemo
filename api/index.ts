import axios from "axios";

const myApi = axios.create({
  baseURL: "https://kaimonomemo-api.herokuapp.com",
  responseType: "json"
});

export default {
  async getKaimonoData(id: string) {
    try {
      const response = await myApi.get(`/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  async postKaimonoData(data: any, id: any) {
    try {
      await myApi.post(`/${id}`, data);
    } catch (error) {
      console.error(error);
    }
  },
  async deleteKaimonoData() {
    try {
      await myApi.delete('/data_delete/');
    } catch (error) {
      console.error(error);
    }
  }
};
