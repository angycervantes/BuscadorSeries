import { ButtonIsFav } from './ButtonIsFav'
import { Link } from 'react-router-dom'

const SeriesCard = ({ id, name = '', summary = '', idioma = '', rating = '', image, isFav }) => {
  return (
    <div className='card'>
      <div className='row'>
        <img className='mx-auto col-8 gy-2' src={image} alt={name} />
      </div>
      <ButtonIsFav isFavProp={isFav} />
      <div className='card-body'>
        <h5 className='card-title'> {id} Title {name}</h5>
        <div className='card-text' dangerouslySetInnerHTML={{ __html: summary }} />
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'> Idiomas:{idioma}</li>
          <li className='list-group-item'> ⭐️{rating}</li>
        </ul>
        <Link className='card-link' to={`/shows/${id}`}>Ver más </Link>
      </div>
    </div>
  )
}
export default SeriesCard
