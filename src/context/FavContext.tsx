import { createContext, useState } from 'react'
import { type SetStateAction, type ReactNode } from 'react'
import { type ItemsEntity } from '../types'

interface Props {
  children: ReactNode
}
interface FavoriteContextValue {
  favorites: ItemsEntity[]
  setFavorites: React.Dispatch<SetStateAction<ItemsEntity[]>>
}

export const FavoritesContext = createContext<FavoriteContextValue | null>(null)

export const FavoritesContextProvider: React.FC<Props> = ({ children }) => {
  const [favorites, setFavorites] = useState<ItemsEntity[]>(() => {
    const favFromLocalStorage = window.localStorage.getItem('favorites')
    return favFromLocalStorage !== null && favFromLocalStorage !== undefined
      ? JSON.parse(favFromLocalStorage)
      : []
  })

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        setFavorites
      }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}
