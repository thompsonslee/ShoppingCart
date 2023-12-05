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
  const [featureProducts,setFeatureProducts] = useState([])
  const [cart,setCart] = useState([])

  const addToCart = (id) =>{
    setCart(cart => [...cart,parseInt(id)])
  }
  const removeFromCart = (id) =>{
    setCart(cart.filter(item => item != id))
  }
  const fetchProducts = async () => {
    console.log('fetchProducts()')
    const res = await fetch('https://api.escuelajs.co/api/v1/categories/1/products')
    const products = await res.json()
    console.log(products)
    let featuredProducts = []
    for(let i = 0 ; i < 4 ;){
      const product = products[Math.floor(Math.random() * products.length)]
      if(featuredProducts.find((currproduct) => currproduct.id == product.id)){
        console.log('duplicate id')
      }
      else{
      featuredProducts.push(product)
      i++
      }
    }
    setProducts(products)
    setFeatureProducts(featuredProducts)
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
          <HomePage featureProducts = {featureProducts}/>
        }/>
        <Route path='/shopPage' element={
          <ShopPage products={products} />
        }/>
        <Route path='/product/:id' element={
          <ProductPage getProduct={getProduct} addToCart={addToCart} />
        } />
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
