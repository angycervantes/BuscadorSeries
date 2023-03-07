
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { instance } from '../services/instance'

function Cast () {
  const { id } = useParams()

  const [cast, setCast] = useState({})

  // const mappingTemporadas =
  //    temporadas.map((temporada) => ({
  //      ...temporada
  //    }))
  // console.log(temporada)

  useEffect(() => {
    instance
      .get(`https://api.tvmaze.com/shows/${id}/cast`)
      .then(({ data }) => setCast(data))
  }, [])

  const validateSeasons = Object.keys(cast)

  console.log(cast)

  return (
    <section className='row gy-4'>
      <h2 className='text-center'>Reparto</h2>
      {validateSeasons.length !== 0 && (
        cast.map(cas => (
          <aside key={cas.character.id} className='col-3'>
            <div className='row g-0'>
              <div className='col-md-6'>
                <img src={cas?.person?.image?.medium ? cas.person.image.medium : 'https://static.tvmaze.com/uploads/images/medium_portrait/198/495987.jpg'} className='img-fluid rounded-start' alt={cas.person.name} />
              </div>
              <div className='col-md-6 gx-3'>
                <div className='card-body'>
                  <p className='card-text'>{cas.person.name}</p>
                  <p> {cas.character.name}</p>
                </div>
              </div>
            </div>
          </aside>
        ))
      )}
    </section>
  )
}

export default Cast
