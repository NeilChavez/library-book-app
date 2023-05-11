import { type ItemsEntity } from '../types'
import { ListOfBooks } from './ListOfBooks'
import { EmptyState } from './EmptyState'
import { emptyFavorites } from '../consts'

interface Props {
  favorites: ItemsEntity[]
}
export const ListFavorites: React.FC<Props> = ({ favorites }) => {
  return (
    <>
      <h2 className=" text-center text-2xl pb-8">
        These are your favorite books:
      </h2>
      {favorites.length > 0
        ? <ListOfBooks books={favorites} />
        : <EmptyState>{emptyFavorites}</EmptyState>
      }
    </>
  )
}
