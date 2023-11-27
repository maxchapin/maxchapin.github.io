// src/pages/About.jsx
import React from 'react';
import Header from '../components/Header';
import ProductIntro from '../components/ProductIntro';
import ProductImages from '../components/ProductImages';
import UsageInfo from '../components/UsageInfo';
import MeetMax from '../components/MeetMax';

function Home(){
  return (
    <div>
        <ProductIntro />
        <ProductImages />
        <UsageInfo />
        <MeetMax />
    </div>
  );
};

export default Home;