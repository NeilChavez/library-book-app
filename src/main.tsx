import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Root } from './routes/Root'
import { Home } from './pages/Home'
import { Search } from './pages/Search'
import { AboutUs } from './pages/AboutUs'
import { Favorites } from './pages/Favorites'
import './index.css'

const domNode = document.getElementById('root') as HTMLElement
const root = createRoot(domNode)

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <div>Page Not Found TODO</div>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'search/:keyword?',
        element: <Search />
      },
      {
        path: 'favorites',
        element: <Favorites />
      },
      {
        path: 'about',
        element: <AboutUs />
      }
    ]
  },
  {
    path: 'books/:bookId',
    element: <div>Book Page</div>
  }
])
root.render(<RouterProvider router={router} />)
