import axios from "axios";

const useAxios = axios.create();
interface AxiosParams {
  url: string;
  params?: any;
  config?: any;
}
useAxios.defaults.timeout = 20000;

useAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default {
  get({ url, params = {}, config = {} }: AxiosParams) {
    return useAxios.get(url, { params, ...config });
  },
  post({ url, params, config }: AxiosParams) {
    return useAxios.post(url, params, config);
  },
  put({ url, params, config }: AxiosParams) {
    return useAxios.put(url, params, config);
  },
  delete({ url, params, config }: AxiosParams) {
    return useAxios.delete(url, { params, ...config });
  },
};
