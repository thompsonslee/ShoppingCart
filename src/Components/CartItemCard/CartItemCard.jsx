import './CartItemCard.css'
export default function CartItemCard({item,removeFromCart,qty,changeQty}){

    return(
        <div className="CartItemCard">
            <div className="cartItemImageContainer">
                <img src={item.images[0]}></img>
            </div>
            <div className="cartDetails">
                <div className="listCartDetails">
                    <div className="listCartDetails-top">
                        <h2>{item.title}</h2>
                        <p>${item.price}</p>
                        <p>Total: ${item.price * qty}</p>
                    </div>
                    <div className="listCartDetails-bottom">
                        <button onClick={() => {changeQty(item.id,'-')}} className='quantity-btn'>-</button>
                        <div className='qtyOutput'>{qty}</div>
                        <button onClick={() => {changeQty(item.id,'+')}} className='quantity-btn'>+</button>
                    </div>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="listCartRemoveButton">Remove</button>
            </div>
        </div>
    )
}