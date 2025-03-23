import { createRoot } from 'react-dom/client'
import App from '@src/App.tsx'
import '@scss/main.scss'
import { RestaurantProvider } from '@context/RestaurantProvider'
import { AuthProvider } from '@context/AuthProvider'

createRoot(document.getElementById('root') as HTMLElement).render(
  <AuthProvider>
    <RestaurantProvider>
      <App />
    </RestaurantProvider>
  </AuthProvider>
)