import './ProductPage.css'
import { useParams } from "react-router-dom"

export default function ProductPage({getProduct,addToCart}){
    const { id } = useParams()
    const product = getProduct(id)
    console.log(product)

    return(
        <div className="ProductPage">
        {(product != undefined) && (
            <>
                <div className='product-images-section'>
                    <div className="product-image-container">
                        <img src={product.images[0]} />
                    </div>
                    <div className='product-sideImages'>
                        <div className='product-sideImage-container'>
                            <img src={product.images[1]} />
                        </div>
                        <div className='product-sideImage-container'>
                            <img src={product.images[2]} />
                        </div>
                    </div>
                </div>
                <div className='product-details-section'>
                    <div className="product-heading">
                        <h1>{product.title}</h1>
                        <h2>$ {product.price}</h2>
                        <button className='addToCart-btn' onClick={() => addToCart(id)}>ADD TO CART</button>
                    </div>
                    <div className="product-description-section">
                        <h2>DESCRIPTION</h2>
                        <p>{product.description}</p>
                        <h2>SHIPPING AND RETURNS</h2>
                        <p>We dispatch your order every day at 4 pm except on public holidays. After dispatch, it takes about:</p>
                        <ul>
                            <li className='shipping-info'>2-3 Business days via Express Shipping</li>
                            <li className='shipping-info'>5-7 Business days via Standard Shipping</li>
                        </ul>
                        <p>We ship your orders from Australia</p>
                        <p>Incase of return items must be returned in their original condition with our box + packaging + tags / labels as delivered to you, or it will not be accepted by our warehouse.</p>
                        <p>Please check our returns policy for more details.</p>
                    </div>
                </div>
                
            </>
        )}
        </div>
    )
}