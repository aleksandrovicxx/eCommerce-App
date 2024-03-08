import React, { useState, useEffect } from 'react';
import instance from '../../utils/api';
import Loading from "./Loading";
import Error from "./Error";
import "./productPage.css"
import ProductList from './Products/ProductList';

const ProductPage = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [sortBy, setSortBy] = useState('');

    
    useEffect(() => {
        instance.get("/products")
        .then((res) => {
            setProduct(res.data);
            setLoading(false);
        })
        .catch((error) => {
            setError(error);
            setLoading(false);
        });
        
        instance.get("/products/categories")
        .then((res) => {
            setCategories(res.data);
        })
        .catch((error) => {
            console.log(`Error fetching categories: ${error}`);
        });
    }, []);
    
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };
    
    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    };
    
    let filteredProducts = product;
    
    if (selectedCategory) {
        filteredProducts = product.filter(product => product.category === selectedCategory);
    }
    
    if (sortBy === 'asc') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'desc') {
        filteredProducts.sort((a, b) => b.price - a.price);
    }
    
    return (
        <div>
            <div className='selectAndSort'>
                <select value={selectedCategory} onChange={handleCategoryChange} className='selectCategory'>
                    <option value="">All Categories</option>
                    {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                        ))}
                </select>
                <select value={sortBy} onChange={handleSortChange} className='sortBy'>
                    <option value=""><b>Sort by</b></option>
                    <option value="asc">Price Ascending</option>
                    <option value="desc">Price Descending</option>
                </select>
            </div>
            {loading ? (
            <Loading/>
            ) : error ? (
            <Error/>
            ) : (
            <ProductList products={filteredProducts}/>
            )}
        </div>
    );
};

export default ProductPage;
