import { useState, useEffect} from "react"
import instance from "../../services/productService"
import MainProduct from "../main product/MainProduct"
import Loading from "./Loading"
import Error from "./Error"


const HomePage = () => {
    const [mainProductInfo, setMainProductInfo] = useState(undefined)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        instance
        .get ("/products")
        .then((res) => setMainProductInfo(res.data))
        .catch((error) => {
          setError(true);
          console.error(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }, []);

    return (
        <div>
            {loading ? (
                <loading />
            ) : error ? (
                <Error />
            ) : (
                <MainProduct mainProductInfo={mainProductInfo}/>
            )}
        </div>
        )
}

export default HomePage