import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import './styles/index.scss'
import Paths from './pages'

const root = document.getElementById('root')

createRoot(root).render(

  <BrowserRouter>
    <Paths />
  </BrowserRouter>
)
