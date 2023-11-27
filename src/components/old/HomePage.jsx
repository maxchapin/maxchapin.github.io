import * as React from 'react';
import ResponsiveAppBar from "./components/TopBar";
import ImageBar from './components/imagePart';

function TopBar () {
    return (
        <div>
            <ResponsiveAppBar></ResponsiveAppBar>
            <ImageBar></ImageBar>
        </div>
    );
} 

export default TopBar;
