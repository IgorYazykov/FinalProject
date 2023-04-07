import axios from 'axios';

export default axios.create({
  baseURL: 'https://63f4faff3f99f5855dbb7d69.mockapi.io/api',
  headers: { 'Content-Type': 'application/json' },
});
