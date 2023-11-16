import { Outlet } from 'react-router-dom'
import SideBar from './Components/Sidebar.jsx'
import './App.css'

function App() {


  return (
    <>
      <div>homepage</div>
      <SideBar />
      <Outlet />
    </>
  )
}

export default App
