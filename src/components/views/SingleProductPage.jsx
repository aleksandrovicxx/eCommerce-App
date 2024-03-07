import { useEffect, useState } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import instance from "../../services/productService";

const SingleProductPage = () => {
  const [product, setProduct] = useState(null)
  const navigate = useNavigate()
  const {productId} = useParams()

  const btnForBack = () => {
    navigate(-1)
  }

  useEffect(() => {
    instance
    .get(`/products/${productId}`)
    .then((res) => {
      console.log(res.data.image); 
      setProduct(res.data)}
    )
    .catch((error) => console.log("Greska " + error))
  }, [])

  

  return (
    <div>
        {product && product.image && (
            <img src={product.image} alt='' />
        )}
    </div>
);

}

export default SingleProductPage