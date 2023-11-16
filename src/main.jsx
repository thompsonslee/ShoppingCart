import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import ShopPage from './Pages/ShopPage.jsx'
import HomePage from './Pages/HomePage.jsx'
import CartPage from './Pages/Cartpage.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage/>},
      { path: 'shopPage', element: <ShopPage/>},
      { path: 'cartPage', element: <CartPage/>}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
