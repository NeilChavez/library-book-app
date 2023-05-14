import {
  type ReactNode,
  createContext,
  useState
} from 'react'
import { type BooksContextValue, type ItemsEntity } from '../types'

interface Props {
  children: ReactNode
}
export const BooksContext = createContext<BooksContextValue | null>(null)

export const BooksContextProvider: React.FC<Props> = ({ children }) => {
  const [books, setBooks] = useState<ItemsEntity[] | null>(null)
  return (
    <BooksContext.Provider value={{ books, setBooks }}>
      {children}
    </BooksContext.Provider>
  )
}
