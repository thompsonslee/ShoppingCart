import './HomePage.css'
import ProductCard from "../../Components/ProductCard/ProductCard"

export default function HomePage({featureProducts}){
    return(
        <div className="homePage">
            <div className="featureProductsContainer">
                <h2>New Drops</h2>
                <div className='featProdsGridContainer'>
                    {featureProducts.map((product) =>{
                        return <ProductCard product={product} key={product.id} />
                    })}
                </div>
            </div>
        </div>
    )
}