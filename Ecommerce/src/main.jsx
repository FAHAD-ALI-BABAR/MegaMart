import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import {Provider} from "react-redux"
import MegaMart from './Store/Store.js'
createRoot(document.getElementById('root')).render(
  <Provider store={MegaMart}>
  <BrowserRouter><App /></BrowserRouter>
  </Provider>
)
