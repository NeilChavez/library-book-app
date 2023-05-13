import { type ItemsEntity } from '../types'
import { CardBook } from './CardBook'
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
            <CardBook key={book.id} book={book}>
              <Heart book={book} />
            </CardBook>
          )
        })}
      </ul>
    </SectionContainer>
  )
}
