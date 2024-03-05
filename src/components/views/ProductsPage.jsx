import AllProducts from "../all products/allProducts"
import { useState, useEffect } from "react"
import instance from "../../services/productService"
import Loading from "./Loading"
import Error from "./Error"

const ProductPage = () =>{

    const [product, setProduct] = useState(undefined)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        instance
        .get("/products").then((res) => setProduct(res.data))
        .catch((error) =>{ setError(error);
            console.log(`Something weorng: ${error}`)})
        .finally(() =>{setLoading(false)})
    }, [])

    return (
        <div>
            {
                loading ? (
                    <Loading/>
                ) : error ? (
                    <Error/>
                ) : (
                    <AllProducts product={product}/>
                )
                }
        </div>
    )
}

export default ProductPage