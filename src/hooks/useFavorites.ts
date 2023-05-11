import { type SetStateAction, useContext, useEffect } from 'react'
import { type ItemsEntity } from '../types'
import { FavoritesContext } from '../context/FavContext'

interface FavoritesResult {
  favorites: ItemsEntity[]
  setFavorites: React.Dispatch<SetStateAction<ItemsEntity[]>>
  addFavorite: ({ book }: { book: ItemsEntity }) => void
  removeFavorite: ({ id }: { id: string }) => void
}

export const useFavorites = (): FavoritesResult => {
  const context = useContext(FavoritesContext)

  if (context === null || context === undefined) {
    throw new Error(
      'useFavorites has to be used within <FavoritesContext.Provider>'
    )
  }
  const { favorites, setFavorites } = context
  const addFavorite = ({ book }: { book: ItemsEntity }): void => {
    setFavorites(prevState => [...prevState, book])
  }
  const removeFavorite = ({ id }: { id: string }): void => {
    const newFavorites = favorites.filter((book) => book.id !== id)
    setFavorites(newFavorites)
  }
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  return {
    favorites,
    setFavorites,
    addFavorite,
    removeFavorite
  }
}
