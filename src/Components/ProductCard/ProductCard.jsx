import './ProductCard.css'

export default function ProductCard({product}){

    return(
        <div className="product-Card">
            <img src={product.image}></img>
            {product.title}
        </div>
    )
}