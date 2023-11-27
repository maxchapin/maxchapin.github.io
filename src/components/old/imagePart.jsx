import React from "react";
import './imagePart.css';

const ImageBar = () => {
    return (
      <div className="container">
        <div className="content">
          <img
            src= {require('../images/productPic.png')}
            alt="Product Image"
            className="image"
          />
        </div>
      </div>
    );
  };

export default ImageBar;