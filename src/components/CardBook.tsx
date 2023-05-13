import { type ReactNode } from 'react'
import { type ItemsEntity } from '../types'
import { Card } from './Card'
import { placeholder } from '../consts'

interface Props {
  book: ItemsEntity
  children: ReactNode
}
export const CardBook: React.FC<Props> = ({ book, children }) => {
  const imageUrl = book?.volumeInfo.imageLinks?.thumbnail ?? placeholder
  const cardTitle = book?.volumeInfo.title

  return (
    <Card image={imageUrl} title={cardTitle}>
      <p className="text-sm line-clamp-1"> {book.volumeInfo.authors}</p>
      <p className="text-sm font-bold"> {book.volumeInfo.publishedDate}</p>
      {children}
    </Card>
  )
}
