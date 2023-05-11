import { type ItemsEntity } from '../types'
import { useFavorites } from '../hooks/useFavorites'
import { HeartFavorite, HeartOutline } from './Icons'

interface Props {
  book: ItemsEntity
}
export const Heart: React.FC<Props> = ({ book }) => {
  const { favorites, addFavorite, removeFavorite } = useFavorites()

  const isFavorite = favorites.some((favorite) => favorite.id === book.id)

  const handleClick = (): void => {
    isFavorite ? removeFavorite({ id: book.id }) : addFavorite({ book })
  }

  return (
    <div
      className="absolute bottom-[20%] right-0 w-8 h-8 flex justify-center items-center bg-slate-800 cursor-pointer rounded hover:scale-100 "
      onClick={() => {
        handleClick()
      }}
    >
      {isFavorite ? <HeartFavorite /> : <HeartOutline />}
    </div>
  )
}
