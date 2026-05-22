import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/comfortaa'
import '@fontsource/raleway'
import '@fontsource/nunito'
import '@fontsource/poppins'
import '@fontsource/roboto'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
