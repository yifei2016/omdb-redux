import axios from 'axios';

const BASE_URL = 'http://www.omdbapi.com/';

export const searchShow = (searchParam) => (
  axios.get(BASE_URL, {
    params: {
      apikey: '541531cc',
      t: searchParam,
      Season: 1
    }
  })
    .then(response => {
      let result = response.data;
      return result;
    })
)

export const getEpisode = (searchParam) => (
  axios.get(BASE_URL, {
    params: {
      apikey: '541531cc',
      i: searchParam,
      plot: 'short',
      r: 'json'
    }
  })
)

    