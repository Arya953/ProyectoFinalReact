import axios from 'axios';

const API_URL = 'https://www.swapi.tech/api/';

const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(`${API_URL}${endpoint}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data from API', error);
    return null;
  }
};

export { fetchData };
