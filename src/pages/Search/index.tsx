import { useParams } from 'react-router-dom'
import { useBooks } from '../../hooks/useBooks'
import { formatWord } from '../../services/formatWord'
import { Books } from '../../components/Books'

export const Search: React.FC = () => {
  const { keyword } = useParams()
  const { booksResults, isLoading } = useBooks({ querySearch: keyword })

  const hasSearched = (keyword !== null && keyword !== undefined)
    ? `You searched for: ${formatWord(keyword)}`
    : 'Start your search!'
  return (
    <main className="py-1">
      {<h2 className='text-center pb-8 text-2xl'>{hasSearched}</h2>}
      <Books books={booksResults} isLoading={isLoading} />
    </main>
  )
}
