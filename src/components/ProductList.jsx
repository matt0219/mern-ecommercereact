import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products }) => {
  // Ensure that products is an array before calling map
  const productList = Array.isArray(products) ? products : [];

  return (
    <div className="product-list">
      {productList.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
