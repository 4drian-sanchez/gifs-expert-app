import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import GifsExpertApp from './gifs/GiftsExpertApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GifsExpertApp />
  </StrictMode>,
)
