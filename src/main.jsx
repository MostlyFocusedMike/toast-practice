import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ToastContextProvider } from './ToastContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContextProvider>
      <App />
    </ToastContextProvider>
  </React.StrictMode>,
)
