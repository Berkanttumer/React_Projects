import axios from 'axios';

async function fetchAPIData(endpoint) {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const API_URL = process.env.REACT_APP_API_URL;

  const res = await axios.get(
    `${API_URL}${endpoint}?api_key=${API_KEY}&language=en-us`
  );
  const data = res.data;

  return data;
}

export default fetchAPIData;
