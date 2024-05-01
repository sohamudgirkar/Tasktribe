import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './app/store'
import { Provider } from 'react-redux'
import favicon from './android-chrome-512x512.png'
import Favicon from "react-favicon";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <Favicon  url={favicon} />
      <App />
    </Provider>
    
  </React.StrictMode>,
)
