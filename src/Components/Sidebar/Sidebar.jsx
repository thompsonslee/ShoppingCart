import './Sidebar.css'
import homeLogo from '../../icons/house-solid.svg'
import shopLogo from '../../icons/shop-solid.svg'
import cartLogo from '../../icons/cart-shopping-solid.svg'
import { Link } from "react-router-dom";


export default function SideBar({cartQty}){
    return(
        <div className='sidebar'>
            <h1>SIMW</h1>
            <ul className='main-list'>
                <li>
                    <Link to= '/' className='sidebar-link'>
                        <img src={homeLogo} className='icon'></img>
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to= 'shopPage' className='sidebar-link'>
                        <img src={shopLogo} className='icon'></img>
                        <span>Shop</span>
                    </Link>
                </li>
                <li>
                    <Link to = 'cartPage' className='sidebar-link'>
                        <img src={cartLogo} className='icon'></img>
                        <span>Cart</span>
                        <span className='cartQty'>{cartQty}</span>

                    </Link>
                </li>
            </ul>
            <button className = "tempButton" onClick={() => window.location.href = "https://google.com"}> exit </button>
            <select>
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="Arabic">Arabic</option>
                <option value="Filipino">Filipino</option>
                <option value="Tamil">Tamil</option>
                <option value="Mandarin">Mandarin</option>
                <option value="Nepali">Nepali</option>
                <option value="Bengali">Bengali</option>
            </select>
            <div className='bottom-links'>
                <li>Help</li>
                <li>Contact Us</li>
            </div>
        </div>
    )
}
