import './Cartpage.css'
import { Link } from "react-router-dom";
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
                <div className='empty-cart-section'>
                    <h2>YOUR CART IS EMPTY</h2>
                    <Link to='/shopPage'>SHOP NOW</Link>
                </div>
            ) : (
                <>
                    <h1 className='cartPage-header'>YOUR CART ({cart.length} ITEMS)</h1>
                    <div className='cartItemsList'>
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
                    </div>
                    <div className='subTotalSection'>
                        <div className='subTotal'>
                            <p>SUBTOTAL:</p>
                            <span>$ {getTotalCartCost()}</span>
                        </div>
                        <button className='checkout-btn'>CHECKOUT</button>
                    </div>
                </>
                )} 
        </div>
    )
}