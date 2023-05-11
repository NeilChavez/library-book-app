import { SectionContainer } from './Container'
import { LoaderBooks } from './LoaderBook'

export const LoaderList: React.FC = () => {
  const array: null[] = new Array<null>(10).fill(null)

  return (
    <SectionContainer>
      <ul className="grid grid-cols-fluid gap-3">
        {array.map(() => {
          return <LoaderBooks key={crypto.randomUUID()} />
        })}
      </ul>
    </SectionContainer>
  )
}
