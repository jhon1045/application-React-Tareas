import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Contexprovider from './hola/Contex'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Contexprovider>
      <App />
    </Contexprovider>
  </React.StrictMode>
)
