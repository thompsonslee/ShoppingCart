export default function CartItemCard({item,removeFromCart}){

    return(
        <div className="cartItemCard">
            <h1>{item.id}</h1>
            <button onClick={() => removeFromCart(item.id)} />
        </div>
    )
}