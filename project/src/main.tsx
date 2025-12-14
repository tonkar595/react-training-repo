import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.tsx'
import Nav from './nav.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Nav />
    <App />
    
  </StrictMode>,
)
