import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ergast.com/api/f1/drivers.json',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
