import { Home } from '@pages/Home'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { NotFound } from '@pages/NotFound'
import { Menu } from '@pages/Menu'
import { Contact } from '@pages/Contact'
import { ScrollToTop } from '@components/common/ScrollToTop'
import { Login } from '@pages/admin/Login'
import { EditDetails } from '@pages/admin/EditDetails'
import { EditMenu } from '@pages/admin/EditMenu'
import { ProtectedRoute } from '@components/utils/ProtectedRoute'
import { urlAdmin, urlContact, urlEditDetails, urlEditMenu, urlHome, urlMenu } from '@constants/constants'

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
        { path: urlHome, element: <Home />, errorElement: <NotFound /> },
        { path: urlMenu, element: <Menu />, errorElement: <NotFound /> },
        { path: urlContact, element: <Contact />, errorElement: <NotFound /> },
        { path: urlAdmin, element: <Login />, errorElement: <NotFound /> },
        {
          path: urlEditDetails,
          element:
            <ProtectedRoute>
              <EditDetails />
            </ProtectedRoute>,
          errorElement: <NotFound />
        },
        {
          path: urlEditMenu,
          element:
            <ProtectedRoute>
              <EditMenu />
            </ProtectedRoute>,
          errorElement: <NotFound />
        },
        { path: '*', element: <NotFound /> }
      ]
    }
  ])
  return <RouterProvider router={router} />
}

export default App
