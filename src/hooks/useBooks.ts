import { useEffect, useState } from 'react'
import { type ItemsEntity, type BookSearchResult } from '../types'
import { API_KEY, GOOGLE_API } from '../consts'
import { useBooksContext } from './useBooksContext'

interface BooksResults {
  booksResults: ItemsEntity[] | null
  isLoading: boolean
  isError: boolean
  getBooks: ({ search }: { search: string }) => void
}
export const useBooks = ({
  querySearch
}: {
  querySearch?: string
}): BooksResults => {
  const { books: booksResults, setBooks: setbooksResults } = useBooksContext()
  const [isLoading, setIsLoading] = useState(false)
  const [error] = useState(false)

  const getBooks = ({ search }: { search: string }): void => {
    setIsLoading(true)
    const KEY = API_KEY as string
    const url = GOOGLE_API + search + '&maxResults=40' + '&key=' + KEY
    fetch(url)
      .then(async (res) =>
        res.ok ? await res.json() : await Promise.reject(res)
      )
      .then((json: BookSearchResult) => {
        // console.log(json)
        setIsLoading(false)
        setbooksResults(json.items as ItemsEntity[])
        window.localStorage.setItem('keyword', search)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  useEffect(() => {
    const valueToSearch =
      querySearch ?? window.localStorage.getItem('keyword') ?? 'venezia'
    getBooks({ search: valueToSearch })
  }, [querySearch])

  return {
    booksResults,
    isLoading,
    isError: error,
    getBooks
  }
}
