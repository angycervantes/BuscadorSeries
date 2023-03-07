
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { instance } from '../services/instance'

function Temporadas () {
  const { id } = useParams()

  const [seasons, setSeasons] = useState({})

  useEffect(() => {
    instance
      .get(`https://api.tvmaze.com/shows/${id}/seasons`)
      .then(({ data }) => setSeasons(data))
  }, [])

  const validateSeasons = Object.keys(seasons)

  console.log(seasons)

  return (
    <section className='row gy-4'>
      <h2 className='text-center'>temporadas</h2>
      {validateSeasons.length !== 0 && (
        seasons.map(season => (
          <aside key={season.id} className='col-3'>
            <img src={season?.image?.medium ? season.image.medium : 'https://www.elfinanciero.com.mx/resizer/d_jxiqvD_EkbzH5WaX3sHFuliEE=/400x225/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/elfinanciero/JWYEZDBPRVEHXCDARBVLXFAZNM.jpeg'} className='rounded' alt={season.number} />
            <h5>Season:_{season.number}</h5>
            <p>episodios:_{season.episodeOrder}</p>
          </aside>
        ))
      )}
    </section>
  )
}

export default Temporadas
