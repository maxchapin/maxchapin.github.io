// src/pages/About.jsx
import React from 'react';
import ClipBuyButton from '../components/ClipBuyButton';
import CaseBuyButton from '../components/CaseBuyButton';
import ComboBuyButton from '../components/ComboBuyButton';
import stockimage2 from '../images/stockimage2.jpg';
import caseImg from '../images/noBGImages/IMG_9363.png';
import clipImg from '../images/noBGImages/IMG_9355.png';


function BuyNow(){
  return (
    <div className='buyNowPage'>
      <div className='singleItems'> 
        <div className='buySection'>
          

          <h1>The Clip</h1>

          <div className='productDescription'>
            <p>The Clip attachment offers convenience and mobility, allowing individuals to carry their AuviQ with them at all times, whether they are at work, school, engaging in outdoor activities, or traveling. </p> 
            <p>Furthermore, in emergency situations, the easily accessible nature of the AuviQ on a belt clip can empower bystanders to provide prompt assistance, increasing the chances of a swift and effective response during an anaphylactic emergency.
            </p>
          </div>
          
          <div className='imgSection'>
            <img src={clipImg}></img>
          </div>

          <div>
              <p>Material: PLA Plastic</p>
              <p>Dimensions: W: 2.5in x L: 1.0in x H: 1.8in </p> 
          </div>
          
          <div className='buyButton'>
            <ClipBuyButton></ClipBuyButton>
          </div>

        </div>

        <div className='buySection'>
            

            <h1>The Case</h1>

            <div className='productDescription'>
              <p>A case designed to hold an AuviQ, with the capability to adhere to various surfaces like the back of a phone or a wall, offers significant advantages for individuals with severe allergies. This innovative approach ensures that the life-saving epinephrine auto-injector is not only portable but also highly accessible in a variety of settings. </p>
              <p>Moreover, the ability to stick the case to a wall can be particularly useful in communal spaces like schools, offices, or restaurants, making the AuviQ readily available to multiple individuals, including those who might not carry one.</p>
            </div>

            <div className='imgSection'>
              <img src={caseImg}></img>
            </div>

            <div>
              <p>Material: PLA Plastic</p>
              <p>Dimensions: W: 2.5in x L: 0.8in x H: 3.5in </p> 
          </div>

            <div className='buyButton'>
              <CaseBuyButton></CaseBuyButton> 
            </div>
        </div>
        
      </div>

      <div className='comboBuyButton'>
        <ComboBuyButton></ComboBuyButton>
      </div>

    </div>

    
  );
};

export default BuyNow;
