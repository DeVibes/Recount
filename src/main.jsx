import React from 'react'
import ReactDOM from 'react-dom/client'
import { MyRouter } from './modules/router'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyRouter />
  </React.StrictMode>
)
