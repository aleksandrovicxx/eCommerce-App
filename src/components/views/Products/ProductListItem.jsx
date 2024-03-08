import React from "react";
import { Link } from "react-router-dom";
import "./ProductListItem.css"; 
import { useCart } from "../../../contexts/CartContext";
import { useState } from "react";

const ProductListItem = ({ product }) => {
        const { purchasedProducts, setPurchasedProducts } = useCart();
      
        const handleBuyClick = (singleProduct) => {
          setPurchasedProducts(prevProducts => [...prevProducts, singleProduct]);
        };

    return (
        <div className="product-item">
            <Link to={`/product/${product.id}`} className="product-link">
                <div className="product-grid-item">
                    <img src={product.image} alt={product.title} className="product-image" />
                    <h3 className="product-title">{product.title}</h3>
                    <p className="product-price">{product.price}</p>
                </div>
            </Link>
                    <button className="btnBuy" onClick={() => handleBuyClick(product)}>Buy</button>
        </div>
    );
};

export default ProductListItem;
