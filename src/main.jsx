import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// 1. Nuestro reset personalizado (para asegurar visibilidad)
import './index.css'

// 2. Bootstrap CSS & JS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// 3. Estilos de la plantilla (Orden importante)
import './styles/animate.css'
import './styles/LineIcons.2.0.css'
import './styles/default.css'
import './styles/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
