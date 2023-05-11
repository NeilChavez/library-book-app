import { useSearch } from '../hooks/useSearch'
import { useNavigate } from 'react-router-dom'

export const FormSearch: React.FC = () => {
  const { query, setQuery } = useSearch()
  const navigate = useNavigate()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    setQuery('')
    navigate('/search/' + query)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value)
  }

  return (
    <form className="flex justify-center" onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        placeholder="The lord of the rings"
        value={query}
        onChange={handleChange}
        className="px-3 py-1"
        autoComplete='off'
      />
      <button className="text-mainBrand-2 font-bold ">Search</button>
    </form>
  )
}
