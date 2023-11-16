import { Link } from "react-router-dom";


export default function SideBar(){
    return(
        <ul>
            <li>
                <Link to= '/'>Home</Link>
            </li>
            <li>
                <Link to= 'shopPage'>Shop</Link>
            </li>
            <li>
                <Link to = 'cartPage'>Cart</Link>
            </li>
        </ul>
    )
}