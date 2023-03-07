import { useState } from 'react'

export function ButtonIsFav ({ isFavProp }) {
  const [isFav, setIsFav] = useState(isFavProp)
  return (
    <button className='btn text-end' onClick={() => setIsFav(!isFav)}>
      {isFav ? '❤️' : '🤍'}
    </button>
  )
}
