
import { useParams } from "react-router-dom"

export default function ProductPage({getProduct}){
    const { id } = useParams()
    const product = getProduct(parseInt(id))
    console.log(product)

    return(
        <div>{product.title}</div>
    )
}