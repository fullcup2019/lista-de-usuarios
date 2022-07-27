import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Users from './users'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Users />
  </React.StrictMode>
)
