import React from 'react';
import introImage from '../images/productPic.png';

function ProductIntro() {
    return (
        <div className="intro">
            <div className='introText'>
                <h2>Introducing CaseCaddy.</h2>
                <p>The product built to suit your lifestyle {"\n"} 
                and your allergies.</p>
            </div>
            
            <img className="introPic" title="Product Image" src={introImage}></img>
        </div>
    );
}

export default ProductIntro;