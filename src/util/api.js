import axios from 'axios'

const api = (s) => axios.get(
  'https://www.omdbapi.com/',
  { params: { apikey: process.env.REACT_APP_OMDB_KEY, type: 'movie', s } },
)
  .then(({ data: { Search =[] } }) => Search)
  .catch((e) => console.error(e))

export default api
