import './Cartpage.css'
import CartItemCard from "../../Components/CartItemCard/CartItemCard"

export default function CartPage({
    cart,
    getProduct,
    removeFromCart,
    changeQty
}){
    return(
        <div className="CartPage">
            {(cart.length === 0) ? (
                <>
                    <h2>YOUR CART IS EMPTY</h2>
                    <button>SHOP NOW</button>
                </>
            ) : (

            cart.map((cartItem) => {
                const item = getProduct(cartItem.id)
                return(
                    <CartItemCard
                        item={item}
                        removeFromCart={removeFromCart}
                        qty={cartItem.qty}
                        changeQty={changeQty}
                        key={cartItem.id}
                     />
                )})
           )}
            
        </div>
    )
}