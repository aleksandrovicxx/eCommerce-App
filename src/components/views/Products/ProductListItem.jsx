import React from "react";
import { Link } from "react-router-dom";
import "./ProductListItem.css"; 

const ProductListItem = ({ product }) => {
    const handleBuyClick = () => {
        console.log(`Kupovina proizvoda: ${product.title}`);
    };

    return (
        <div className="product-item">
            <Link to={`/product/${product.id}`} className="product-link">
                <div className="product-grid-item">
                    <img src={product.image} alt={product.title} className="product-image" />
                    <h3 className="product-title">{product.title}</h3>
                    <p className="product-price">{product.price}</p>
                    <button className="btnBuy" onClick={handleBuyClick}>Buy</button>
                </div>
            </Link>
        </div>
    );
};

export default ProductListItem;
