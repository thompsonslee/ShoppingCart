import ProductCard from "../Components/ProductCard"

export default function ShopPage({products}){

    console.log(products)
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