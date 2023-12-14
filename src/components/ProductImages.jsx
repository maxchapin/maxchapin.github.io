import React from 'react';
import clipImage from '../images/productPic.png';
import stockimage3 from '../images/stockimage3.jpg';
import stockimage4 from '../images/stockimage4.jpg';


function ProductImages() {
    return (
        <div className="product-display">
            <div className="product">
                <img className="" src={stockimage3}></img>
                <h1 className='textOverlay'>The Clip</h1> 
            </div>
            <div className="product">
                <img className="clipImage" src={stockimage4}></img>
                <h1 className='textOverlay'>The Case</h1>
            </div>
        </div>
    );
}

export default ProductImages;