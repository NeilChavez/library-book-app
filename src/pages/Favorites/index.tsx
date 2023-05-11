import { useFavorites } from '../../hooks/useFavorites'
import { ListFavorites } from '../../components/ListFavorites'

export const Favorites: React.FC = () => {
  const { favorites } = useFavorites()
  return <ListFavorites favorites={favorites} />
}
