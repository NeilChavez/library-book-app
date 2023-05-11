import { type ItemsEntity } from '../types'
import { ListOfBooks } from './ListOfBooks'
import { LoaderList } from './LoaderList'

interface Props {
  books: ItemsEntity[] | null
  isLoading: boolean
}
export const Books: React.FC<Props> = ({ books, isLoading }) => {
  return (
    <>
      {isLoading
        ? <LoaderList />
        : <ListOfBooks books={books} />
      }
    </>
  )
}
