import ProductCard from "../../Components/ProductCard/ProductCard.jsx"
import './ShopPage.css'

export default function ShopPage({products}){
    return(
        <div className="shopPage">
        {products.map((product) =>{
            return(
                <ProductCard
                    product={product}
                    key={product.id}
                />
            )
        })}
        </div>
    )
}