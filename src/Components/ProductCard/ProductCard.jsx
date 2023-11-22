import { Link } from 'react-router-dom'
import './ProductCard.css'

export default function ProductCard({product}){

    return(
        <Link to={`./${product.id}`}>
        <div className="product-Card">
            <img src={product.image}></img>
            {product.title}
        </div>
        </Link>
    )
}