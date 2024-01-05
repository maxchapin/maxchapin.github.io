// src/pages/About.jsx
import React from 'react';
import stockimage4 from '../images/stockimage4.jpg';
import Footer from '../components/Footer';
import mePic from '../images/me.jpg';

function About(){
  return (
    <div className='about'>
      <h1>About Us</h1>
      <p>Max, creator of EpiQCase, has had a life threatening allergy to most nuts since the age of 2. For his entire life he has had to be reminded to carry his epinephrine injector around. EpiQCase changed that. 
      </p>

      <img src={mePic}></img>

      <p>Welcome to EpiQCase, where innovation meets life saving convenience. Originally designed in Max's freshman dorm room, the journey began with a clear mission: to make carrying an AuviQ not just easier, but a seamless part of daily life. Our founder, recognizing the crucial need for quick and reliable access to this life-saving medication, set out to create a solution. The result is EpiQCase– a meticulously designed, 3D-printed case that is as durable as it is stylish. Each EpiQCase is crafted with precision and care, ensuring that your AuviQ is always within reach, without the bulk or hassle of traditional carrying methods. Join us in our commitment to safety and convenience. An EpiQCase isn't just a case; it's peace of mind, always by your side.
      </p>

      

    </div>
  );
};

export default About;
