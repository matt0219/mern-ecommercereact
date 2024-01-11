import React from 'react';

const ProductItem = ({ product, onAddToCart }) => {
    const imagePath = `/${product.image}`;
    
    return (
        <div className="product-item">
            <img src={imagePath} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => onAddToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default ProductItem;