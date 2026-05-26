import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '@fontsource/comfortaa'
import '@fontsource/raleway'
import '@fontsource/nunito'
import '@fontsource/poppins'
import '@fontsource/roboto'
import '@fontsource/playfair-display';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
