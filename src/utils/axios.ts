import axios from "axios";
import { storageKeys } from "../config/storageKeys";

const client = axios.create({
  baseURL: "https://cutnow-client-backend-462529521907.us-central1.run.app"
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