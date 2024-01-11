import React from 'react';
import { Link } from 'react-router-dom';

const ProductDetails = ({ product }) => {
    return (
        <div className="product-details">
            <Link to="/">Back to Products</Link>
            <img src={`/images/${product.image}`} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <p>Description: Lorem ipsumdolror</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default ProductDetails;