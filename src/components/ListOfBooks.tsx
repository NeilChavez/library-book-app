import { type ItemsEntity } from '../types'
import { Card as Book } from './Card'
import { SectionContainer } from './Container'
import { Heart } from './Heart'

interface Props {
  books: ItemsEntity[] | null
}

export const ListOfBooks: React.FC<Props> = ({ books }) => {
  return (
    <SectionContainer>
      <ul className="grid grid-cols-fluid gap-3 ">
        {books?.length === 0 && (
          <p>Sorry, there are no results for your search.</p>
        )}
        {books?.map((book) => {
          return (
            <Book key={book.id} book={book} isBook={true}>
              <Heart book={book} />
            </Book>
          )
        })}
      </ul>
    </SectionContainer>
  )
}
