import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import { AuthHandler } from './auth/AuthHandler.jsx'
import { MyRouter } from './router/'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <MyRouter/>
  </React.StrictMode>,
)

