import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import GifsExpertApp from './gifs/GiftsExpertApp.tsx'
//import { MyCounterApp } from './MyCounterApp/MyCounterApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <MyCounterApp /> */}
    <GifsExpertApp />
  </StrictMode>,
)
