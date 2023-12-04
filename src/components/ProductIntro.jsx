import React from 'react';

import ImageCycler from './Slideshow';

function ProductIntro() {
    return (
        <div className="intro">
            <div className='introText'>
                <h2>Introducing EpiQ Case.</h2>
                <p>The product built to suit your lifestyle {"\n"} 
                and your allergies.</p>
            </div>
            <ImageCycler/>
            {/*<img className="introPic" title="Product Image" src={introImage}></img>*/}

        </div>
    );
}

export default ProductIntro;