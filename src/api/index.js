import axios from 'axios';

export const searchShow = (url,searchParam) => (
  axios.get(url, {
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

export const getEpisode = (url,searchParam) => (
  axios.get(url, {
    params: {
      apikey: '541531cc',
      i: searchParam,
      plot: 'short',
      r: 'json'
    }
  })
)

    