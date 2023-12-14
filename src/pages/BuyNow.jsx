// src/pages/About.jsx
import React from 'react';
import ClipBuyButton from '../components/ClipBuyButton';
import CaseBuyButton from '../components/CaseBuyButton';
import stockimage2 from '../images/stockimage2.jpg';

function BuyNow(){
  return (
    <div className='buyNowPage'>
      <div className='buySection'>
         

        <h1>The Clip</h1>

        <p>The Clip attachment offers convenience and mobility, allowing individuals to carry their AuviQ with them at all times, whether they are at work, school, engaging in outdoor activities, or traveling. </p> 
        <p>Furthermore, in emergency situations, the easily accessible nature of the AuviQ on a belt clip can empower bystanders to provide prompt assistance, increasing the chances of a swift and effective response during an anaphylactic emergency.
        </p>

        <img src={stockimage2}></img>

        <ClipBuyButton></ClipBuyButton>

      </div>

      <div className='buySection'>
          

          <h1>The Case</h1>

          <p>A case designed to hold an AuviQ, with the capability to adhere to various surfaces like the back of a phone or a wall, offers significant advantages for individuals with severe allergies. This innovative approach ensures that the life-saving epinephrine auto-injector is not only portable but also highly accessible in a variety of settings. </p>
          <p>Moreover, the ability to stick the case to a wall can be particularly useful in communal spaces like schools, offices, or restaurants, making the AuviQ readily available to multiple individuals, including those who might not carry one.</p>

          <img src={stockimage2}></img>

          <CaseBuyButton></CaseBuyButton> 

      </div>
       
               
    </div>
  );
};

export default BuyNow;
