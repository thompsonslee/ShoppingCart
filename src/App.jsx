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
    if(!cart.find((cartItem) => cartItem.id == id)){
      setCart(cart => [...cart,{id: id, qty: 1}])
      console.log(cart)
    }
    else{
      console.log('already in cart')
    }
  }
  const removeFromCart = (id) =>{
    setCart(cart.filter(item => item.id != id))
  }

  const changeQty = (id,string) => {
    let updatedCart = cart.map((cartItem) => {
      if(cartItem.id == id){
        if(string === '+'){
          return({...cartItem, qty: cartItem.qty + 1})
        }
        else{
          if(cartItem.qty === 1){return cartItem}
          return({...cartItem, qty: cartItem.qty - 1})
        }
      }
      else{
        return cartItem
      }
    })
    setCart(updatedCart)
  }

  const getTotalCartCost = () =>{
    return(
      cart.reduce((accum,cartItem) => {
      return accum + ((getProduct(cartItem.id).price) * cartItem.qty)
      },0)
    )
  }

  const fetchProducts = async () => {
    const res = await fetch('https://api.escuelajs.co/api/v1/products')
    const products = await res.json()
    let featuredProducts = []
    for(let i = 0 ; i < 4 ;){
      const product = products[Math.floor(Math.random() * products.length)]
      if(!featuredProducts.find((currproduct) => currproduct.id == product.id)){
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
      <SideBar cartQty = {cart.length}/>
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
            removeFromCart={removeFromCart}
            changeQty={changeQty}
            getTotalCartCost={getTotalCartCost}/>
        }/>
        
      </Routes>
    </>
  )
}

export default App
