import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/main.scss'

createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
)
