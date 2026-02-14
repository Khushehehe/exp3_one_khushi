import React from "react";
import "./ProductCard.css";

function ProductCard({ name, price, inStock }) {
  return (
    <div className="product-card">
      <div className="image-placeholder"></div>

      <h3>{name}</h3>
      <p className="price">${price}</p>

      {inStock ? (
        <span className="in-stock">In Stock</span>
      ) : (
        <span className="out-stock">Out of Stock</span>
      )}
    </div>
  );
}

export default ProductCard;