import React from "react";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

function Footer() {
    return(
        
        <div className="footer">

            <h1 className="footerLogo">EpiQCase</h1>

            <Link to='./About'>
                <Button className='footerButton' >About</Button>
             </Link>

            <Link to='/Home'>
                <Button className='footerButton'>Home</Button>
             </Link>

            <Link to='/Purchase' >
                <Button className='footerButton'>Buy Now</Button>
            </Link>

            <p>Copyright 2023 EpiQCase</p>
            <p>AUVI-Q® and AUVI-q® are registered trademarks of kaleo, Inc. Other referenced trademarks are owned by their respective third-party owners.</p>
    
            <Link to='/PrivacyPolicy' >
                <Button >Privacy Policy</Button>
            </Link>

        </div>
    );

}

export default Footer;