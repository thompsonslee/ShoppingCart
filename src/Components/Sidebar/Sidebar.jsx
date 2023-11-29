import './Sidebar.css'
import homeLogo from '../../icons/house-solid.svg'
import shopLogo from '../../icons/shop-solid.svg'
import cartLogo from '../../icons/cart-shopping-solid.svg'
import { Link } from "react-router-dom";


export default function SideBar(){
    return(
        <div className='sidebar'>
            <h1>Lorem Ipsum</h1>
            <ul className='main-list'>
                <li>
                    <Link to= '/' className='sidebar-link'>
                        <img src={homeLogo} className='icon'></img>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to= 'shopPage' className='sidebar-link'>
                        <img src={shopLogo} className='icon'></img>
                        Shop
                    </Link>
                </li>
                <li>
                    <Link to = 'cartPage' className='sidebar-link'>
                        <img src={cartLogo} className='icon'></img>
                        Cart
                    </Link>
                </li>
            </ul>
            <div className='bottom-links'>
                <li>Help</li>
                <li>Contact Us</li>
            </div>
        </div>
    )
}