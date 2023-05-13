import { FavoritesContextProvider } from './context/FavContext'
import { BooksContextProvider } from './context/BooksContext'
import { Outlet } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import 'react-loading-skeleton/dist/skeleton.css'

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <BooksContextProvider>
        <FavoritesContextProvider>
          <Outlet />
        </FavoritesContextProvider>
      </BooksContextProvider>
      <Footer />
    </>
  )
}
