import React, { useState, useEffect } from 'react';
import introImage from '../images/productPic.png';
import stockimage1 from '../images/stockimage1.jpg';
import stockimage2 from '../images/stockimage2.jpg';


const ImageCycler = () => {
    // Define the array of images inside the component
    const images = [
        introImage,
        stockimage1,
        stockimage2,
        // ... more images
    ];

    // Set the interval for cycling images (in milliseconds)
    const interval = 3000;

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Set up a timer to cycle through images
        const timer = setInterval(() => {
            setCurrentIndex(prevIndex => 
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, interval);

        // Clear the interval on component unmount
        return () => clearInterval(timer);
    }, [images.length, interval]);

    return (
        <div>
            {images.length > 0 && (
                <img  className="cyclingPics" src={images[currentIndex]} alt="Cycling Content" />
            )}
        </div>
    );
};

export default ImageCycler;
