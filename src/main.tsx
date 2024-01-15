import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

const element = document.getElementById('root')

if (element == null) {
  throw new Error('Could not find element with id "root"')
}

const root = ReactDOM.createRoot(element)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
