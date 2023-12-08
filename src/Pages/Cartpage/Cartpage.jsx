import './Cartpage.css'
import CartItemCard from "../../Components/CartItemCard/CartItemCard"

export default function CartPage({
    cart,
    getProduct,
    removeFromCart,
    changeQty,
    getTotalCartCost
}){
    return(
        <div className="CartPage">
            {(cart.length === 0) ? (
                <>
                    <h2>YOUR CART IS EMPTY</h2>
                    <button>SHOP NOW</button>
                </>
            ) : (
                <>
                    <h1>YOUR CART ({cart.length} ITEMS)</h1>
                    {cart.map((cartItem) => {
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
                    }
                    <div className='subTotalSection'>
                        <p>SUBTOTAL</p>
                        <span>{getTotalCartCost()}</span>
                    </div>
                </>
                )} 
        </div>
    )
}