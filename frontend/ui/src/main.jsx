// main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'; 
import { LightDarkModeProvider } from './contexts/LightDarkMode.context.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <LightDarkModeProvider>
        <App />
      </LightDarkModeProvider>
    </BrowserRouter>
  </StrictMode>,
)