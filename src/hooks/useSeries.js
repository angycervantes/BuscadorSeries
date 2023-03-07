import { useEffect, useState } from 'react'
import { getSeries } from '../services'
import { instance } from '../services/instance'

export const useSeries = (num) => {
  const [series, setSeries] = useState([])
  const [isLoading, setIsloading] = useState(true)
  const [errors, setErrors] = useState(null)
  const [isSearch, setIsSearch] = useState(false)

  const fetchSeries = async () => {
    try {
      const { series } = await getSeries({ num })
      setSeries(series)
    } catch (error) {
      setErrors(error)
    } finally {
      setIsloading(false)
    }
  }

  const resetSeries = async () => {
    setIsloading(true)
    try {
      const { data } = await instance.get(
        `/shows?page=${num}`
      )
      setSeries(data)
    } catch (error) {
      setErrors(error)
    } finally {
      setIsloading(false)
    }
    setIsSearch(false)
  }

  const searchSeries = async (event) => {
    event.preventDefault()
    const searchInput = event.target['search-input'].value
    console.log(searchInput)
    // if (searchInput === '') return
    setIsloading(true)

    try {
      const { data } = await instance.get(
        `/search/shows?q=${searchInput}`
      )
      console.log(data)
      setSeries(data)
      event.target.reset()
    } catch (error) {
      setErrors(error)
    } finally {
      setIsloading(false)
    }

    setIsSearch(true)
  }
  useEffect(() => {
    fetchSeries()
  }, [])

  return { series, isLoading, errors, resetSeries, searchSeries, isSearch }
}
