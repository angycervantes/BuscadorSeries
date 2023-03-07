
export const SearchForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className='input-group'>
        <input
          name='search-input'
          type='search'
          className='form-control'
          placeholder='Buscar Series'
          required
        />
        <button className='btn btn-primary'>➡️</button>
      </div>
    </form>
  )
}
