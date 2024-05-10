import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ApiDataProvider } from './Components/Context/useContextData.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>   
    <ApiDataProvider>
       <App />
    </ApiDataProvider>
  </React.StrictMode>,
)
