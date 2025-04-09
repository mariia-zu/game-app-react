import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '9b6bbd41cef84bbc8d0c866de26cf0cd'
  }
})