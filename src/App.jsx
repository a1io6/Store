import React from 'react'
import Header from './header/Header'
import Banner from './banner/Banner'
import Home from './home/Home'
import './App.css'

import { RouterProvider } from 'react-router-dom'
import myRouter from './Router'
function App() {
  return (
    <div>
      <RouterProvider router={myRouter}/>
    </div>
  )
}

export default App
