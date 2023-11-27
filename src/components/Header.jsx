import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

function Header() {
  return (
    <div className = "navbar">
      
        <Link to='./About'>
          <Button className='aboutbutton' >About</Button>
        </Link>

        <Link to='./' className='logo'>
          <span className='logo'>CaseCaddy</span>
        </Link>

        <Link to='/Purchase' >
          <Button variant="contained" className='buy-now'>Buy Now</Button>
        </Link>
      
      
      
    </div>
  );
}

export default Header;