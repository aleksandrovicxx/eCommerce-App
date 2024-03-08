import { useEffect, useState } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import instance from "../../utils/api";
import "./SingleProductPage.css"
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
    <div className="divSingleProduct">
        <div className="divForImgAndH1">
          <h2>{product?.title}</h2>
          <img src={product?.image} alt='' />
        </div>
        <div className="divForDetailAndPrice">
          <h2>Details:</h2>
          <p>{product?.description}</p>
          <h2>Price:</h2>
          <h1>${product?.price}</h1>
        </div>
    </div>
  );
}

export default SingleProductPage;
