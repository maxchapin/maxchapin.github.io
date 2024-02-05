import React from 'react';
import clipImage from '../images/productPic.png';
import stockimage3 from '../images/stockimage3.jpg';
import stockimage4 from '../images/stockimage4.jpg';
import clipImg from '../images/noBGImages/clipFront.png';
import caseImg from '../images/noBGImages/IMG_9350.png'

function ProductImages() {
    return (
        <div className="product-display">
            <div className="product">
                <h1 className='textAbove'>The Clip</h1>
                <img className="" src={clipImg}></img>
                 
            </div>
            <div className="product">
                <h1 className='textAbove'>The Case</h1>
                <img className="clipImage" src={caseImg}></img>
                
            </div>
        </div>
    );
}

export default ProductImages;