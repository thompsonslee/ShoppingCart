import CartItemCard from "../../Components/CartItemCard/CartItemCard"

export default function CartPage({
    cart,
    getProduct,
    removeFromCart
}){
    return(
        <div className="cart-Container">
            {cart.map((cartID) => {
                const item = getProduct(cartID)
                return(
                    <CartItemCard
                        item={item}
                        removeFromCart={removeFromCart}
                        key={cartID}
                     />
                )
            }

            )}
        </div>
    )
}