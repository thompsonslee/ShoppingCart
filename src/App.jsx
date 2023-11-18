import { Route, Routes } from 'react-router-dom'
import SideBar from './Components/Sidebar.jsx'
import HomePage from './Pages/HomePage'
import ShopPage from './Pages/ShopPage'
import CartPage from './Pages/Cartpage'
import './App.css'

function App() {


  return (
    <>
      <SideBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shopPage' element={<ShopPage />} />
        <Route path='/cartPage' element={<CartPage />} />
      </Routes>
    </>
  )
}

export default App
