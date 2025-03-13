import { Home } from '@pages/Home'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { NotFound } from '@pages/NotFound'
import { Menu } from '@pages/Menu'
import { Contact } from '@pages/Contact'
import { ScrollToTop } from '@components/common/ScrollToTop'

const Layout = () => (
  <>
    <ScrollToTop />
    <Outlet />
  </>
)

export const App = () => {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: '/', element: <Home />, errorElement: <NotFound /> },
        { path: '/menu', element: <Menu />, errorElement: <NotFound /> },
        { path: '/contact', element: <Contact />, errorElement: <NotFound /> },
        { path: '*', element: <NotFound /> }
      ]
    }
  ])
  return <RouterProvider router={router} />
}

export default App
