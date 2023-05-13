import { type SetStateAction, useEffect } from 'react'
import { type ItemsEntity } from '../types'
import { useFavoritesContext } from './useFavoritesContext'

interface FavoritesResult {
  favorites: ItemsEntity[]
  setFavorites: React.Dispatch<SetStateAction<ItemsEntity[]>>
  addFavorite: ({ book }: { book: ItemsEntity }) => void
  removeFavorite: ({ id }: { id: string }) => void
}

export const useFavorites = (): FavoritesResult => {
  const { favorites, setFavorites } = useFavoritesContext()
  const addFavorite = ({ book }: { book: ItemsEntity }): void => {
    setFavorites((prevState: ItemsEntity[]) => [...prevState, book])
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
