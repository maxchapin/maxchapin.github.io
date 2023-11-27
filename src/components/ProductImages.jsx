import React from 'react';
import clipImage from '../images/productPic.png';

function ProductImages() {
    return (
        <div className="product-display">
            <div className="product">
                <img className="clipImage" src={clipImage}></img>
                <h1>The Clip</h1> 
            </div>
            <div className="product">
                <img className="clipImage" src={clipImage}></img>
                <h1>The Case</h1>
            </div>
        </div>
    );
}

export default ProductImages;