import { Home } from '@pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

export const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    }
  ])
  return <RouterProvider router={router} />
}

export default App
