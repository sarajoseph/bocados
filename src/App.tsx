import { Home } from '@pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { NotFound } from './pages/NotFound'
import { Menu } from './pages/Menu'
import { Contact } from './pages/Contact'

export const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <NotFound />
    },
    {
      path: '/menu',
      element: <Menu />,
      errorElement: <NotFound />
    },
    {
      path: '/contact',
      element: <Contact />,
      errorElement: <NotFound />
    },
  ])
  return <RouterProvider router={router} />
}

export default App
