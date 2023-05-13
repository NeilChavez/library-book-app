import { useContext } from 'react'
import { FavoritesContext } from '../context/FavContext'
import { type FavoriteContextValue } from '../types'

export const useFavoritesContext = (): FavoriteContextValue => {
  const context = useContext(FavoritesContext)

  if (context === null || context === undefined) {
    throw new Error(
      'useFavorites has to be used within <FavoritesContextProvider> component'
    )
  }
  const { favorites, setFavorites } = context

  return { favorites, setFavorites }
}
