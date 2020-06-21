import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/'
});

instance.interceptors.request.use(function(config) {
  const token = localStorage.getItem('token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

export default instance;
