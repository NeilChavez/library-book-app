import { useContext } from 'react'
import { BooksContext } from '../context/BooksContext'
import { type BooksContextValue } from '../types'

export const useBooksContext = (): BooksContextValue => {
  const booksContext = useContext(BooksContext)

  if (booksContext === null || booksContext === undefined) {
    throw new Error(
      'useBooksContext must be used inside BooksContextProvider component'
    )
  }
  const { books, setBooks } = booksContext

  return { books, setBooks }
}
