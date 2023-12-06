import './CartItemCard.css'
export default function CartItemCard({item,removeFromCart}){

    return(
        <div className="CartItemCard">
            <div className="cartItemImageContainer">
                <img src={item.images[0]}></img>
            </div>
            <div className="cartDetails">
                <div className="listCartDetails">
                    <div className="listCartDetails-top">
                        <h2>{item.title}</h2>
                        <p>{item.price}</p>
                    </div>
                    <div className="listCartDetails-bottom"></div>
                </div>
                <button className="listCartRemoveButton">Remove</button>
            </div>
            <button onClick={() => removeFromCart(item.id)} />
        </div>
    )
}