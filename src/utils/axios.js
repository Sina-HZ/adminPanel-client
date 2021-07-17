import axios from 'axios';
import ApiRoutes from './apiRoutes';

const AxiosInstance = axios.create();

AxiosInstance.defaults.baseURL = ApiRoutes.baseUrl;

export const removeUserAuthorization = async () => {
  AxiosInstance.defaults.headers.common['Authorization'] = ``;
  localStorage.removeItem('Authorization');
};

export const setUserAuthorization = async (token) => {
  if (token) {
    AxiosInstance.defaults.headers.common['Authorization'] = `${token}`;
    localStorage.setItem('Authorization', token)
  }
};

export default AxiosInstance;
