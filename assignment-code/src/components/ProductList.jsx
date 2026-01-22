import React from "react";
import useFetch from "../hooks/useFetch";
import "../styles/ProductList.css";

function ProductList() {
  const { data, loading, error } = useFetch("https://api.escuelajs.co/api/v1/products");

  if (loading) {
    return <div className="loader-container">Loading...</div>;
  }

  if (error) {
    return <div className="error-container">Error: {error}</div>;
  }

  return (
    <div className="container">
      <div className="grid">
        {data && data.map((product) => (
          <div className="card" key={product.id}>
            <div className="image-wrapper">
              <img src={product.images[0]} alt={product.title} />
              <div className="overlay">
                <button className="view-btn">View</button>
              </div>
            </div>

            <div className="content">
              <span className="category">{product.category.name}</span>
              <h3>{product.title}</h3>
              <div className="footer">
                <span className="price">${product.price}</span>
                <button className="add-btn">+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;