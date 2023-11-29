import ProductCard from "../../Components/ProductCard/ProductCard.jsx"

export default function ShopPage({products}){
    return(
        <>
        {products.map((product) =>{
            return(
                <ProductCard
                    product={product}
                    key={product.id}
                />
            )
        })}
        </>
    )
}