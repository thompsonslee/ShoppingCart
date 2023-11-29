import { Route, Routes } from 'react-router-dom'
import SideBar from './Components/Sidebar/Sidebar'
import HomePage from './Pages/HomePage/HomePage'
import ShopPage from './Pages/ShopPage/ShopPage'
import CartPage from './Pages/Cartpage/Cartpage'
import ProductPage from './Pages/ProductPage/ProductPage'
import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [products,setProducts] = useState([])
  const [cart,setCart] = useState([])

  const addToCart = (id) =>{
    setCart(cart => [...cart,parseInt(id)])
  }
  const removeFromCart = (id) =>{
    setCart(cart.filter(item => item != id))
  }
  const fetchProducts = async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const products = await res.json()
    setProducts(products)
  }

  const getProduct = (id) =>{
    return products.find(product => product.id == id)
  }

  useEffect(() => {
    fetchProducts()
  },[])

  return (
    <>
      <SideBar />
      <Routes>
        <Route path='/' element={
          <HomePage />
        }/>
        <Route path='/shopPage' element={
          <ShopPage products={products} />
        }/>
        <Route path='/shopPage/:id' element={
          <ProductPage getProduct={getProduct} addToCart={addToCart}/>
        }/>
        <Route path='/cartPage' element={
          <CartPage
            cart={cart}
            getProduct={getProduct} 
            removeFromCart={removeFromCart}/>
        }/>
        
      </Routes>
    </>
  )
}

export default App
