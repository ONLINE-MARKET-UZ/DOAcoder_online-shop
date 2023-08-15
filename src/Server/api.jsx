import axios from "./axios";


const API = {
  getProduct: async function () {
    return axios.get("/products");
  }
};
export default API;