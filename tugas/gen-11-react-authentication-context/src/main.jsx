import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Store from './Store'
import { Provider } from 'react-redux'

//import AuthProvider from './AuthProvider'

import Home from './Home'
import About from './About'
import Login from './Login'
import ProtectedLayout from './ProtectedLayout'

const router = createBrowserRouter([
  { path: '', element: <ProtectedLayout />, children: [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
  ]},

  { path: '/login', element: <Login /> },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider Store={Store}>
    <RouterProvider router={router} />
  </Provider>
)
