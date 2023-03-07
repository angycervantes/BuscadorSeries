import { instance } from './instance'

export const getSeries = async ({ num = 1 }) => {
  const { data } = await instance.get(`/shows?page=${num}`)
  console.log(data)
  return data
}
// https://api.tvmaze.com/shows?page=1
