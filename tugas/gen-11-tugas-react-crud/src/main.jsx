import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import List from './pages/List'
import Form from './pages/Form'
import Detail from './pages/Detail'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/list', element: <List /> },
  { path: '/form', element: <Form /> },
  { path: '/detail', element: <Detail /> }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
