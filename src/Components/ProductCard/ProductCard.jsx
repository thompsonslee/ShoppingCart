import { Link } from 'react-router-dom'
import './ProductCard.css'

export default function ProductCard({product}){

    return(
            <Link to={`/product/${product.id}`} className="Product-Card">
                <div className='product-image-div'>
                    <img src={product.images[0]}></img>
                </div>
                <div className='product-card-details'>
                    <h2>{product.title}</h2>
                    <p>${product.price}</p>
                </div>
            </Link>
    )
}