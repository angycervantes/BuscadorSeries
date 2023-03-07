import { useSeries } from '../hooks/useSeries'
import SeriesCard from '../components/SeriesCard'
import { SearchForm } from '../components/SearchForm.jsx'

function App () {
  const num = 1
  const SELECT_PROPS = 'id,name,summary,language,rating,image'
  const {
    series,
    isLoading,
    errors,
    searchSeries,
    resetSeries,
    isSearch
  } = useSeries(num, SELECT_PROPS)

  const mappingSeries =
    !errors && series &&
    series.map((serie) => ({
      ...serie,
      id: serie.show.id,
      name: serie.show.name,
      summary: serie.show.summary,
      idioma: serie.show.language,
      rating: serie.show.rating.average,
      image: serie?.show?.image?.medium,
      isFav: false
    }))

  return (
    <section className='container py-5'>
      <h1 className='text-center mb-5'> Buscador de series</h1>
      <SearchForm handleSubmit={searchSeries} />
      <div className='text-end my-3'>
        {isSearch && (
          <button className='btn btn-danger' onClick={resetSeries}>
            Reset
          </button>
        )}
      </div>
      {isLoading && <p className='text-center'>...Cargando</p>}
      {!isLoading && mappingSeries && ( //  aqui le cambio pinuts --> 
        <section className='row gy-4'>
          {mappingSeries.length === 0 && (
            <div className='alert alert-danger text-center' role='alert'>
              No se encontro resultado para esta busqueda
            </div>
          )}
          {mappingSeries !== 0 &&
             mappingSeries.map(serie => (
               <aside key={serie.show.id} className='col-3'>
                 <SeriesCard {...serie} />
               </aside>
             ))}
        </section>
      )}
    </section>
  )
}

export default App
