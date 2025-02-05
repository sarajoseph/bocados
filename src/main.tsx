import { createRoot } from 'react-dom/client'
import App from '@src/App.tsx'
import '@scss/main.scss'

createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
)
