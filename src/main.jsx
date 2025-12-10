import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './layouts/theme/ThemeProvider'
import Preloader from './layouts/PreloaderLayout/Preloader'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <Preloader>
        <App />
      </Preloader>
    </ThemeProvider>
  </StrictMode>,
)
