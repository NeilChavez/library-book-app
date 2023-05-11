import { Link } from 'react-router-dom'
import { SectionContainer } from './Container'
import { FormSearch } from './FormSearch'

export const Header: React.FC = () => {
  return (
    <header className="py-8">
      <SectionContainer>
        <h1 className="text-center font-bold text-4xl pb-4 text-mainBrand ">
          <Link to="">Library Search</Link>
        </h1>
        <nav className="flex gap-8 justify-center p-4">
          {['home', 'favorites', 'search', 'about'].map((entry) => {
            return (
              <Link to={`/${entry === 'home' ? '' : entry}`} key={entry}>
                {entry.toUpperCase()}
              </Link>
            )
          })}
        </nav>
        <FormSearch />
      </SectionContainer>
    </header>
  )
}
