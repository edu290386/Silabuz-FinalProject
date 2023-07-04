import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ContextApp from './context/ContextApp.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ContextApp>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ContextApp>
  </BrowserRouter>
)
