import { type ReactNode } from 'react'
import { type ItemsEntity } from '../types'
import { placeholder } from '../consts'

interface Props {
  book?: ItemsEntity
  isBook?: boolean
  image?: string
  description?: string
  title?: string
  children?: ReactNode
}
export const Card: React.FC<Props> = ({
  book,
  isBook = true,
  image,
  description,
  title = '',
  children
}) => {
  const imageUrl = book?.volumeInfo.imageLinks?.thumbnail ?? image
  const cardTitle = book?.volumeInfo.title ?? title
  const CardDescription = book?.searchInfo?.textSnippet ?? description
  return (
    <figure className="max-w-sm rounded overflow-hidden shadow-lg relative">
      <div className=" w-full max-w-48 h-72 relative bg-gray-400">
        <img
          className={`w-full h-full object-cover object-center ${
            isBook ? '' : 'absolute'
          }`}
          src={imageUrl ?? placeholder}
          alt={cardTitle ?? 'placeholder'}
        />
        {!isBook && (
          <div className="custom-gradient-1 w-full h-full absolute"></div>
        )}
      </div>
      <figcaption className="px-6 py-4">
        <h3 className="font-bold text-lg mb-2 line-clamp-2 text-mainBrand ">
          {cardTitle}
        </h3>
        <p className="text-sm overflow-hidden text-ellipsis line-clamp-2 text-white">
          {CardDescription}
        </p>
      </figcaption>
      {children}
    </figure>
  )
}
