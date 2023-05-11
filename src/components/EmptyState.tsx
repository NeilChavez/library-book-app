import { type ReactNode } from 'react'
import { EmptyIcon } from './Icons'

interface Props {
  children?: ReactNode
}
export const EmptyState: React.FC<Props> = ({ children }) => {
  return (
    <section className="h-screen pt-8">
      <p className="flex justify-center items-center flex-col gap-8">
        <EmptyIcon/>
        {children}
      </p>
    </section>
  )
}
