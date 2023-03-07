import axios from 'axios'

const API_URL = 'https://api.tvmaze.com'

export const instance = axios.create({
  baseURL: API_URL
})
