import './ProductPage.css'
import { useParams } from "react-router-dom"

export default function ProductPage({getProduct,addToCart}){
    const { id } = useParams()
    const product = getProduct(id)

    return(
        <div className="ProductPage">
        {(product != undefined) && (
            <>
                <div className="product-image-container">
                    <img src={product.image} />
                </div>
                <div className="product-heading">
                    <h1>{product.title}</h1>
                    <h2>{product.price}</h2>
                    <button onClick={() => addToCart(id)}>ADD TO CART</button>
                </div>
                <div className="product-description Section">
                    <h2>Description</h2>
                    <p>{product.description}</p>
                </div>
                
            </>
        )}
        </div>
    )
}