import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const LoaderBooks: React.FC = () => {
  return (
    <figure className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className=" w-full max-w-48 h-72 bg-gray-400">
        <Skeleton
          highlightColor="#ebebeb"
          baseColor="#a1a1a1"
          duration={1}
          height={'100%'}
        />
      </div>
      <figcaption className="px-6 py-4">
        <Skeleton
          highlightColor="#ebebeb"
          baseColor="#a1a1a1"
          duration={1}
          count={2}
          height={'100%'}
        />
      </figcaption>
    </figure>
  )
}
