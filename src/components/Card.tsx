import { type ReactNode } from 'react'
import { placeholder } from '../consts'

interface Props {
  isBook?: boolean
  image?: string
  paragraph?: string
  title?: string
  children?: ReactNode
}
export const Card: React.FC<Props> = ({
  isBook = true,
  image,
  paragraph,
  title = '',
  children
}) => {
  return (
    <figure className="max-w-sm rounded overflow-hidden shadow-lg relative">
      <div className=" w-full max-w-48 h-72 relative bg-gray-400">
        <img
          className={`w-full h-full object-cover object-center ${
            isBook ? '' : 'absolute'
          }`}
          src={image ?? placeholder}
          alt={title ?? 'placeholder'}
        />
        {!isBook && (
          <div className="custom-gradient-1 w-full h-full absolute"></div>
        )}
      </div>
      <figcaption className="pr-8 py-2">
        <h3 className="font-bold text-lg mb-2 line-clamp-2 text-mainBrand ">
          {title}
        </h3>
        {paragraph}
      </figcaption>
      {children}
    </figure>
  )
}
