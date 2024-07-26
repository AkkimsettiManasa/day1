
// App.js

import React, { useEffect, useState } from 'react';
import './S.css';

function Ass3(){
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container">
      <h1>Product List</h1>
      <ProductList products={products} />
    </div>
  );
};
const ProductList = ({ products }) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} className="product-image" />
          <div className="product-details">
            <h2 className="product-title">{product.title}</h2>
            <p className="product-price"><strong>${product.price}</strong></p>
            <p className="product-rating">★ {product.rating.rate} ({product.rating.count})</p>
            <button className="add-to-cart">Add to cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Ass3;