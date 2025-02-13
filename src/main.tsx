import { createRoot } from 'react-dom/client'
import App from '@src/App.tsx'
import '@scss/main.scss'
import { RestaurantProvider } from '@context/RestaurantProvider'

createRoot(document.getElementById('root') as HTMLElement).render(
  <RestaurantProvider>
    <App />
  </RestaurantProvider>
)
