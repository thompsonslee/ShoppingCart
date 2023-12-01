
import { useParams } from "react-router-dom"

export default function ProductPage({getProduct,addToCart}){
    const { id } = useParams()
    const product = getProduct(id)

    return(
        <>
            <div>{product?.title}</div>
            <button onClick={() => addToCart(id)}/>
        </>
    )
}