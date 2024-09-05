import React from 'react';
import './ProductItem.css';

const ProductItem = ({ title, image, features, price }) => {
  return (
    <div className="product-item container">
      <h2 className="mt-5">{title}</h2>
      <div className="row mt-3">
        <div className="col-md-6">
          <img src={image} className="img-fluid" alt={title} />
        </div>
        <div className="col-md-6">
          <h3>Key Features:</h3>
          <ul>
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <h3>Price: {price}</h3>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
