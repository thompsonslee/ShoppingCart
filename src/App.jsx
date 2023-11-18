import { Route, Routes } from 'react-router-dom'
import SideBar from './Components/Sidebar.jsx'
import HomePage from './Pages/HomePage'
import ShopPage from './Pages/ShopPage'
import CartPage from './Pages/Cartpage'
import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [products,setProducts] = useState([])

  const fetchProducts = async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const products = await res.json()
    setProducts(products)
  }

  useEffect(() => {
    fetchProducts()
  },[])

  return (
    <>
      <SideBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shopPage' element={<ShopPage products={products} />} />
        <Route path='/cartPage' element={<CartPage />} />
      </Routes>
    </>
  )
}

export default App
