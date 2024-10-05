import axios from "axios";
import { storageKeys } from "../config/storageKeys";

const client = axios.create({
  baseURL: "http://localhost:3000"
});

client.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem(storageKeys.accessToken);
    if(accessToken) {
      config.headers.set('authorization', `Bearer ${accessToken}`);
    }
    return config;
  },
)

export default client;