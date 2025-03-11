import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/nyt';

export const getNews = async (year: string, month: string) => {
  const response = await axios.get(`${BASE_URL}/${year}/${month}`);
  return response.data.response.docs;
};