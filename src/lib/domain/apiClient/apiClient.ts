import axios from 'axios';

const baseURL = import.meta.env.VITE_APP_URL;
const appId = import.meta.env.VITE_APP_ID;
const appKey = import.meta.env.VITE_APP_KEY;

export const apiClient = axios.create({
  baseURL: baseURL,
  headers: {
    Accept: 'application/json',
    app_id: `${appId}`,
    app_key: `${appKey}`,
    ResourceVersion: 'v4',
  }
});

apiClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
