import { type ReactNode } from 'react'

interface Props {
  children: ReactNode
}
export const SectionContainer: React.FC<Props> = ({ children }) => {
  return <section className="max-w-4xl m-auto">{children}</section>
}
