import ProductCard from "../../Components/ProductCard/ProductCard"

export default function HomePage({featureProducts}){
    return(
        <div className="homePage">
            <div className="featureProductsContainer">
                {featureProducts.map((product) =>{
                    return <ProductCard product={product} key={product.id} />
                })}
            </div>
        </div>
    )
}