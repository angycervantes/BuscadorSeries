import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { instance } from '../services/instance'
import Temporadas from './Temporadas'
import Cast from '../components/Cast'

function Details () {
  const { id } = useParams()

  const [serie, setSeries] = useState({})

  useEffect(() => {
    instance
      .get(`https://api.tvmaze.com/shows/${id}`)
      .then(({ data }) => setSeries(data))
  }, [])
  const validateSeries = Object.keys(serie)

  return (
    <section className='container py-4'>
      <Link className='btn btn-primary' to='/'> Home </Link>
      {validateSeries.length !== 0 && (
        <article className='row g-0'>
          <div className='col-md-3'>
            <img src={serie?.image?.medium ? serie.image.medium : 'https://static.tvmaze.com/uploads/images/medium_portrait/198/495987.jpg'} className='mx-auto col-10 gy-2' alt={serie.name} />
          </div>
          <div className='col-md-8 gy-5'>
            <div className='card-body'>
              <h3>{serie.name}</h3>
              <p dangerouslySetInnerHTML={{ __html: serie.summary }}></p>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'> Idiomas:{serie.language}</li>
                <li className='list-group-item'> ⭐️{serie.rating.average}</li>
                <li className='list-group-item'> Género:{serie.genres}</li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <Temporadas />
              <Cast />
            </div>
          </div>
        </article>
      )}
    </section>
  )
}

export default Details
