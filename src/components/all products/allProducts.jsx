import React from 'react';
import "./style.css"

const AllProducts = ({ product }) => {
    return (
        <div className='mainDiv'>
            {product.map(singleProduct => (
                <div key={singleProduct.id} className="divForBoxes">
                    <table className='table'>
                        <tbody>
                            <tr>
                                <td colSpan="2"><img src={singleProduct.image} alt={singleProduct.title} className='imgProduct'/></td>
                            </tr>
                            <tr>
                                <td colSpan="2"><strong>{singleProduct.title}</strong></td>
                            </tr>
                            <tr>
                                <td colSpan="2">{singleProduct.price}$</td>
                            </tr>
                            <tr>
                                <td>
                                    <button className='btnBuy'>Buy</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
}

export default AllProducts;
